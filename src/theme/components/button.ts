import { defineStyleConfig } from '@chakra-ui/react';

export const Button = defineStyleConfig({
    baseStyle: {
        cursor: 'pointer',
        display: 'inline-flex',
        justifyContent: 'center',
        alignItems: 'center',
        color: 'inherit',
        height: 'space40',
    },
    variants: {},
    sizes: {
        round: {
            borderRadius: 'full',
            width: 'space40',
        },
    },
    defaultProps: {},
});
