import { HStack, Icon, Text } from '@chakra-ui/react';
import { MdLogoDev } from 'react-icons/md';

export function Logo() {
    return (
        <HStack spacing='space8'>
            <Icon as={MdLogoDev} boxSize='space32' />
            <Text size='title'>Beeps</Text>
        </HStack>
    );
}
