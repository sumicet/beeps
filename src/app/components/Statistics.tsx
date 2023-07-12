import { Stats } from '@/hooks';
import { formatNumber } from '@/utils';
import { Text, VStack, StackProps, HStack, Icon } from '@chakra-ui/react';
import { GoGraph } from 'react-icons/go';
import { RiTimerFlashFill } from 'react-icons/ri';
import { useQuery } from 'react-query';

export function Statistics(props: StackProps) {
    const { data } = useQuery<Stats>('stats');
    const statistics = [
        {
            text: `Total events: ${formatNumber(data?.totalMessages || 0)}`,
            icon: GoGraph,
        },
        {
            text: `Rate: ${formatNumber(data?.rate || 0)}/min`,
            icon: RiTimerFlashFill,
        },
    ] as const;

    return (
        <VStack width='100%' alignItems='flex-start' spacing='space12' {...props}>
            {statistics.map(({ text, icon }) => (
                <HStack key={text} spacing='space8'>
                    <Icon as={icon} boxSize='space20' />
                    <Text>{text}</Text>
                </HStack>
            ))}
        </VStack>
    );
}
