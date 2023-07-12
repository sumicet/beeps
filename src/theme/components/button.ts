import { defineStyleConfig } from '@chakra-ui/react';
import { mode } from '@chakra-ui/theme-tools';

export const Button = defineStyleConfig({
    baseStyle: props => ({
        cursor: 'pointer',
        display: 'inline-flex',
        justifyContent: 'center',
        alignItems: 'center',
        color: 'inherit',
        height: 'space40',
    }),
    variants: {},
    sizes: {
        round: {
            borderRadius: 'full',
            width: 'space40',
        },
    },
    defaultProps: {},
});
