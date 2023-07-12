import { queryClient } from '@/queryClient';
import { manager, theme } from '@/theme';
import { ChakraBaseProvider } from '@chakra-ui/react';
import { ReactNode } from 'react';
import { QueryClientProvider } from 'react-query';

export function Providers({ children }: { children: ReactNode }) {
    return (
        <QueryClientProvider client={queryClient}>
            <ChakraBaseProvider theme={theme} colorModeManager={manager}>
                {children}
            </ChakraBaseProvider>
        </QueryClientProvider>
    );
}
