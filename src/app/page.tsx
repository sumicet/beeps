'use client';

import { Message } from '@/hooks';
import { forwardRef } from 'react';
import { useQuery } from 'react-query';
import { ItemProps, Virtuoso } from 'react-virtuoso';
import { AnimatePresence, motion } from 'framer-motion';
import { MessageCard } from './components';
import { Box, Text, VStack, chakra, useColorModeValue, useToken } from '@chakra-ui/react';
import { HashLoader } from 'react-spinners';

const Item = forwardRef<HTMLDivElement, ItemProps<Message>>(({ children, ...rest }, ref) => {
    // @ts-ignore
    if (rest['data-index'] !== rest?.context?.last)
        return (
            <div {...rest} ref={ref} style={{ width: '100%', paddingBottom: 16 }}>
                {children}
            </div>
        );

    return (
        <motion.div
            ref={ref}
            {...rest}
            // Scale will mess up Virtuoso's followOutput
            initial={{
                opacity: 0,
                y: 20,
            }}
            animate={{
                opacity: 1,
                y: 0,
            }}
            style={{ width: '100%' }}
        >
            {children}
        </motion.div>
    );
});

Item.displayName = 'Item';

function Footer() {
    return <Box height={100} />;
}

Footer.displayName = 'Footer';

const MotionVStack = motion(VStack);

export default function Home() {
    const { data } = useQuery<Message[]>('chat', {
        // For websockets, we don't want to refetch the data
        staleTime: Infinity,
    });

    const skeletonColor = useColorModeValue('skeleton.light', 'skeleton.dark');
    const skeletonColorToken = useToken('colors', skeletonColor);

    return (
        <chakra.main width='100%' minHeight='inherit'>
            <AnimatePresence mode='popLayout'>
                {!data?.length && (
                    <MotionVStack
                        initial={{
                            opacity: 0,
                        }}
                        animate={{
                            opacity: 1,
                        }}
                        exit={{
                            opacity: 0,
                        }}
                        spacing='space32'
                    >
                        <Text variant='ghost'>Stay tuned for exciting updates.</Text>
                        <HashLoader color={skeletonColorToken} size='50px' />
                    </MotionVStack>
                )}
            </AnimatePresence>
            <Virtuoso
                useWindowScroll
                overscan={20}
                followOutput
                atBottomThreshold={300}
                totalCount={data?.length ?? 0}
                data={data}
                itemContent={(_, message) => (
                    <MessageCard key={`${message.id} ${message.timestamp}`} {...message} />
                )}
                components={{
                    Item,
                    Footer,
                }}
                context={{
                    last: (data?.length ?? 0) - 1,
                }}
            />
        </chakra.main>
    );
}
