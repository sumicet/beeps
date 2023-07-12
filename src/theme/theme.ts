import { createLocalStorageManager } from '@chakra-ui/react';
import type { ThemeConfig } from '@chakra-ui/react';
import { components } from './components';
import { foundations } from './foundations';

const config: ThemeConfig = {
    useSystemColorMode: false, // change this in the future when we fully implement the dark theme
    initialColorMode: 'light',
    cssVarPrefix: 'beeps',
};

// Theme fields
// https://github.com/chakra-ui/chakra-ui/tree/main/packages/theme/src/foundations
const theme = {
    config,
    components,
    ...foundations,
};

const manager = createLocalStorageManager('beeps-color-mode');

export { theme, manager };
