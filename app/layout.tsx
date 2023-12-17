import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from "@/components/provider/theme-provider";
import { Toaster } from 'sonner';
import ModalProvider from "@/components/provider/modal-provider";

import { EdgeStoreProvider } from '@/lib/edgestore';
import { ConvexClientProvider } from '@/components/provider/convex-provider';

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Quip',
  description: 'All In one workspace for your everyday needs',
  icons : {
    icon : "/logo.svg"
  }
}


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ConvexClientProvider>
          <EdgeStoreProvider>
            <ThemeProvider
              attribute="class"
              defaultTheme="system"
              enableSystem
              disableTransitionOnChange
              storageKey="notion-theme"
            >
              <Toaster position="bottom-center" />
              <ModalProvider />
              {children}
            </ThemeProvider>
          </EdgeStoreProvider>
        </ConvexClientProvider>
      </body>
    </html>
  );
}