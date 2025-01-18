import './globals.css';
import { Inter } from 'next/font/google';
import { Analytics } from '@vercel/analytics/react';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: "$TrumpGPT",
  description:
    "45th & 47th President of the United States. Builder of walls, maker of deals, and winner of elections. Making America Great Again.",
  icons: {
    icon: "/DONALD.png", // Update this path to where your trumpy.png is located
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
      
      </head>
      <body className="font-Glass">
        {children}
        <Analytics />
      </body>
    </html>
  );
}
