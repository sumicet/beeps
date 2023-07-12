'use client';

import { config } from '@/config';
import { useEffect, useRef, useState } from 'react';
import { useQueryClient } from 'react-query';

export interface Message {
    id: string;
    timestamp: number;
    user: {
        id: number;
        image_url: string;
        name: string;
        username: string;
    };
    message: string;
    tags: string[];
}

export interface Stats {
    totalMessages: number;
    rate: number;
}

const delay = 3500;

export const useWebSocket = () => {
    const [isLoading, setIsLoading] = useState(true);
    const queryClient = useQueryClient();

    const websocket = useRef<WebSocket>();

    const intervalRef = useRef<NodeJS.Timeout>();
    const startTime = useRef<number>();

    useEffect(() => {
        let inconsistentData: Message[] = [];

        websocket.current = new WebSocket(config.wsUrl);
        websocket.current.onmessage = event => {
            const data: Message = JSON.parse(event.data);

            const index = inconsistentData?.findIndex(o => o.id === data.id) || -1;
            if (inconsistentData && index >= 0) {
                inconsistentData[index] = data;
            } else {
                inconsistentData.push(data);
                inconsistentData.sort((a, b) => a.timestamp - b.timestamp);
                // Limit to 10k messages as the user will probs never want to read more than that
                inconsistentData = inconsistentData.slice(-10000);
            }

            // The delay doesn't seem to be higher than 3500 so to avoid layout shifts, we'll use that as the threshold
            const orderedData = inconsistentData.filter(
                event => Date.now() - event.timestamp > delay
            ); // 5 seconds

            queryClient.setQueryData<Message[]>(['chat'], orderedData);
            queryClient.setQueryData<Stats>(['stats'], old => ({
                rate: old?.rate || 0,
                totalMessages: orderedData?.length || 0,
            }));
        };

        websocket.current.onopen = () => {
            startTime.current = Date.now();
            setInterval(() => {
                setIsLoading(false);
            }, delay * 1000); // 3.5 seconds
        };

        // Count the rate of messages per minute
        intervalRef.current = setInterval(() => {
            if (!startTime.current) return;

            const minutesPassed = Math.floor((Date.now() - startTime.current) / 1000 / 60) || 1;
            console.log('minutesPassed', minutesPassed);
            queryClient.setQueryData<Stats>(['stats'], old => ({
                rate: inconsistentData?.length / minutesPassed,
                totalMessages: old?.totalMessages || 0,
            }));
        }, 60000); // 1 minute

        return () => {
            websocket.current?.close();
            clearInterval(intervalRef.current);
        };
    }, [queryClient]);

    return { isLoading };
};
