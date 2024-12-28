import './globals.css'
import { Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/react';

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: "Chat with Donald Trump's Terminal",
  description:"Those who dare to dream, dare to win. What are you waiting for? Let's Make America Great Again!",
  icons: {
    icon: "/trumpy.png" // Update this path to where your trumpy.png is located
  }
}

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">   <head>
      <link rel="icon" href="/trumpy.png" type="image/png" />
    </head>
      <body className={inter.className}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
