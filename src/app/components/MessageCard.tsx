import { Image } from '@/components';
import { Message } from '@/hooks';
import { Box, HStack, Text, VStack, Wrap, useColorModeValue } from '@chakra-ui/react';
import formatDistanceToNow from 'date-fns/formatDistanceToNow';

export function MessageCard({ message, tags, timestamp, user }: Message) {
    const background = useColorModeValue('5.light', '5.dark');

    return (
        <VStack
            spacing='space8'
            padding='space16'
            alignItems='flex-start'
            background={background}
            borderRadius='radius8'
            width='100%'
        >
            <HStack spacing='space8'>
                <Box boxSize='space48'>
                    <Image
                        src={user.image_url}
                        alt={`avatar of user ${user.username}`}
                        width={48}
                        height={48}
                        borderRadius='full'
                    />
                </Box>
                <VStack spacing='space8' alignItems='flex-start'>
                    <HStack>
                        <Text>{user.name}</Text>
                        <Text size='small' variant='ghost'>
                            {formatDistanceToNow(timestamp)} ago
                        </Text>
                    </HStack>
                    <Text fontWeight={400}>{message}</Text>
                </VStack>
            </HStack>
            <Wrap spacing='space8'>
                {tags.map((tag, index) => (
                    <Text key={index + 1} size='small' variant='ghost'>
                        #{tag}
                    </Text>
                ))}
            </Wrap>
        </VStack>
    );
}
