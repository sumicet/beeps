import {
    Drawer as DrawerChakra,
    DrawerBody,
    DrawerContent,
    Button,
    useDisclosure,
    Icon,
    HStack,
    DrawerOverlay,
} from '@chakra-ui/react';
import { useRef } from 'react';
import { FiMenu } from 'react-icons/fi';
import { Statistics } from './Statistics';
import { IoCloseOutline } from 'react-icons/io5';
import { Logo } from './Logo';

export function Drawer() {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const btnRef = useRef<HTMLButtonElement | null>(null);

    return (
        <>
            <Button
                display={{ base: 'flex', lg: 'none' }}
                size='round'
                ref={btnRef}
                onClick={onOpen}
            >
                <Icon as={FiMenu} boxSize='space20' />
            </Button>

            <DrawerChakra
                isOpen={isOpen}
                placement='left'
                onClose={onClose}
                finalFocusRef={btnRef}
                preserveScrollBarGap
            >
                <DrawerOverlay />
                <DrawerContent>
                    <DrawerBody>
                        <HStack spacing='space12' height='menu'>
                            <Button
                                display={{ base: 'flex', lg: 'none' }}
                                size='round'
                                onClick={onClose}
                            >
                                <Icon as={IoCloseOutline} boxSize='space20' />
                            </Button>
                            <Logo />
                        </HStack>
                        <Statistics />
                    </DrawerBody>
                </DrawerContent>
            </DrawerChakra>
        </>
    );
}
