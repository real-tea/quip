import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import 


const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Quip',
  description: 'All In one workspace for your everyday needs',
  icons : {
    icon : 
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
