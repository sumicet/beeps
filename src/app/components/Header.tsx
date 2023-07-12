import { Box, Center, HStack, useColorMode, useColorModeValue } from '@chakra-ui/react';
import { DarkModeSwitch } from 'react-toggle-dark-mode';
import { Drawer } from './Drawer';
import { Logo } from './Logo';

export function Header() {
    const { colorMode, setColorMode } = useColorMode();
    const bgColor = useColorModeValue('menu.light', 'menu.dark');
    const dividerColor = useColorModeValue('5.light', '5.dark');

    return (
        <Center
            width='100%'
            position='fixed'
            backdropFilter='blur(16px)'
            backgroundColor={bgColor}
            top={0}
            height='menu'
            zIndex='menu'
        >
            <HStack
                spacing='space8'
                width='100%'
                maxWidth='container'
                justifyContent='space-between'
                paddingX={{ base: 'space20', md: 'space32' }}
            >
                <HStack spacing='space12'>
                    <Drawer />
                    <Logo />
                </HStack>
                <Box>
                    <DarkModeSwitch
                        checked={colorMode !== 'dark'}
                        onChange={checked => setColorMode(!checked ? 'dark' : 'light')}
                        size={24}
                        sunColor='white'
                        moonColor='black'
                    />
                </Box>
            </HStack>
            <Box
                width='100%'
                bg={dividerColor}
                height={1}
                maxWidth='container'
                position='absolute'
                bottom={0}
            />
        </Center>
    );
}
