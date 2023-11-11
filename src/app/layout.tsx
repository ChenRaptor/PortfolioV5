import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import SideBarNav from '@/components/custom/SideBarNav/SideBarNav'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="bg-gradient-to-b from-gradient-top to-gradient-bottom">
        <main className="flex min-h-screen h-screen">
          <SideBarNav/>
          <div className="flex items-center justify-center w-full relative">
            {children}
          </div>
        </main>
      </body>
    </html>
  )
}
