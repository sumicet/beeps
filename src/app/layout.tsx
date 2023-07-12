'use client';

import '@/theme/globals.css';
import { InnerLayout } from './components';
import '@fontsource-variable/inter';
import { Providers } from './Providers';
import { ReactNode } from 'react';
import { ColorModeScript } from '@chakra-ui/react';
import { theme } from '@/theme';

export default function RootLayout({ children }: { children: ReactNode }) {
    return (
        <html lang='en'>
            <body>
                <ColorModeScript initialColorMode={theme.config.initialColorMode} />
                <Providers>
                    <InnerLayout>{children}</InnerLayout>
                </Providers>
            </body>
        </html>
    );
}
