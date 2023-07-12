import { defineStyleConfig } from '@chakra-ui/styled-system';
import { textStyles } from '../foundations/textStyles';
import { mode } from '@chakra-ui/theme-tools';

/**
 * @see https://chakra-ui.com/docs/components/text/usage
 */
export const Text = defineStyleConfig({
    sizes: textStyles,
    variants: {
        ghost: props => ({
            color: mode('textGhost.light', 'textGhost.dark')(props),
        }),
    },
    defaultProps: {
        size: 'medium',
    },
});
