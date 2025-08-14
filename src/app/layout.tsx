'use client';

import StyledComponentsRegistry from '@/lib/registry';

import { Geist, Geist_Mono } from 'next/font/google';
import { Providers } from './providers';
import { ThemeProvider } from 'styled-components';
import theme from '@/styles/theme';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ThemeProvider theme={theme}>
      <html lang="en">
        <head>
          <title>Boilerplate</title>
          <link
            rel="icon"
            href="/logo-gh.svg"
            sizes="256x256"
            type="image/x-icon"
          ></link>
        </head>
        <body className={`${geistSans.variable} ${geistMono.variable}`}>
          <StyledComponentsRegistry>
            <Providers>{children}</Providers>
          </StyledComponentsRegistry>
        </body>
      </html>
    </ThemeProvider>
  );
}
