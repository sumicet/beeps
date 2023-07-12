import { Image } from '@/components';
import { Message } from '@/hooks';
import { Box, HStack, Text, VStack, Wrap, useColorModeValue } from '@chakra-ui/react';
import formatDistanceToNow from 'date-fns/formatDistanceToNow';

export function MessageCard({ message, tags, timestamp, user }: Message) {
    const background = useColorModeValue('5.light', '5.dark');

    return (
        <VStack
            spacing='space16'
            padding='space16'
            alignItems='flex-start'
            background={background}
            borderRadius='radius8'
            width='100%'
        >
            <VStack spacing='space8' alignItems='flex-start' width='100%'>
                <HStack spacing='space8' alignItems='flex-start'>
                    <Box boxSize='space48'>
                        <Image
                            src={user.image_url}
                            alt={`avatar of user ${user.username}`}
                            width={45}
                            height={45}
                            borderRadius='full'
                            minWidth={45}
                        />
                    </Box>
                    <VStack
                        spacing='space4'
                        height={45}
                        justifyContent='center'
                        alignItems='flex-start'
                    >
                        <Text noOfLines={1} verticalAlign='center'>
                            {user.name}
                        </Text>
                        <Text
                            size='small'
                            variant='ghost'
                            whiteSpace='nowrap'
                            verticalAlign='center'
                        >
                            {formatDistanceToNow(timestamp)} ago
                        </Text>
                    </VStack>
                </HStack>
                <Text fontWeight={400}>{message}</Text>
            </VStack>
            <Wrap spacing='space8' spacingY='space4'>
                {tags.map((tag, index) => (
                    <Text key={index + 1} size='small' variant='ghost'>
                        #{tag}
                    </Text>
                ))}
            </Wrap>
        </VStack>
    );
}
