import { createMultiStyleConfigHelpers } from '@chakra-ui/react';
import { drawerAnatomy } from '@chakra-ui/anatomy';
import { mode } from '@chakra-ui/theme-tools';

const { defineMultiStyleConfig } = createMultiStyleConfigHelpers(drawerAnatomy.keys);

export const Drawer = defineMultiStyleConfig({
    baseStyle: props => ({
        dialogContainer: {
            display: 'flex',
            overscrollBehaviorY: 'none',
            zIndex: 'modal',
        },
        dialog: {
            color: 'inherit',
            bg: mode('background.light', 'background.dark')(props),
            maxWidth: 300,
            paddingX: 'space16',
            zIndex: 'modal',
        },
        header: {
            textStyle: 'large',
            paddingBottom: 'space32',
        },
        overlay: {
            bg: mode('10.light', '10.dark')(props),
        },
    }),
});
