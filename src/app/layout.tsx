import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Alcemir Macedo',
  description: 'Generated by Alcemir Macedo',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <meta name="viewport" content="width=device-width, inicial-scale=1.0" />
      <body className={inter.className}>{children}</body>
    </html>
  )
}
