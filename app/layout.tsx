import './globals.css'
import { Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/react';

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: "Trump's Artificial Intelligence",
  description: "45th & 47th President of the United States. Builder of walls, maker of deals, and winner of elections. Making America Great Again.",
  icons: {
    icon: "/trump-ai.png", // Path to your app icon
  },
  openGraph: {
    title: "Trump's Artificial Intelligence", // Optional, can repeat title
    description: "45th & 47th President of the United States. Builder of walls, maker of deals, and winner of elections. Making America Great Again.", // Optional, can repeat description
    images: [
      {
        url: "/trump-ai.png", // Image path in the public folder
        width: 800,
        height: 600,
        alt: "Trump's AI Homepage Image", // Alt text for the image
      }
    ],
    site_name: "Trump's Artificial Intelligence", // Optional, the website's name
  },
  twitter: {
    card: "summary_large_image", // Twitter card type (large image)
    title: "Trump's Artificial Intelligence", 
    description: "45th & 47th President of the United States. Builder of walls, maker of deals, and winner of elections. Making America Great Again.",
    images: ["/home.png"], // Same image for Twitter card
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
