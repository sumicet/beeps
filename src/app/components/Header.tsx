import { Box, Center, HStack, Icon, Text, useColorMode, useColorModeValue } from '@chakra-ui/react';
import { MdLogoDev } from 'react-icons/md';
import { DarkModeSwitch } from 'react-toggle-dark-mode';
import { Drawer } from './Drawer';

export function Logo() {
    return (
        <HStack spacing='space8'>
            <Icon as={MdLogoDev} boxSize='space32' />
            <Text size='title'>Beeps</Text>
        </HStack>
    );
}

export function Header() {
    const { colorMode, setColorMode } = useColorMode();
    const bgColor = useColorModeValue('menu.light', 'menu.dark');

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
        </Center>
    );
}
