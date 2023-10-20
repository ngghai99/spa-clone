import './globals.css'
import { Inter } from 'next/font/google'
import { Header } from '@/components'

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <Header />
      <body suppressHydrationWarning={true} className={inter.className}>{children}</body>
    </html>
  )
}
