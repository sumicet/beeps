import { Flex, HStack, VStack, useColorModeValue } from '@chakra-ui/react';
import '@/theme/globals.css';
import '@fontsource-variable/inter';
import { ReactNode } from 'react';
import { useWebSocket } from '@/hooks';
import { Header } from './Header';
import { Statistics } from './Statistics';

export function InnerLayout({ children }: { children: ReactNode }) {
    const background = useColorModeValue('background.light', 'background.dark');
    const color = useColorModeValue('text.light', 'text.dark');

    useWebSocket();

    return (
        <Flex
            bg={background}
            color={color}
            flex={1}
            minHeight='100%'
            width='100%'
            justifyContent='center'
        >
            <VStack maxWidth='container' flex={1} minHeight='100%' width='100%' spacing='space16'>
                <Header />
                <HStack
                    paddingTop='100px'
                    width='100%'
                    alignItems='flex-start'
                    paddingX={{ base: 'space20', md: 'space32' }}
                    minHeight='100%'
                >
                    <Statistics
                        width={300}
                        display={{ base: 'none', lg: 'flex' }}
                        position='sticky'
                        top={100}
                    />
                    {children}
                </HStack>
            </VStack>
        </Flex>
    );
}
