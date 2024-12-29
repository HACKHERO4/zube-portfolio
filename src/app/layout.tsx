import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { Inter } from 'next/font/google';
import profilePic from './images/profileImg.png';

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Gideon Nnadi - Web, Mobile, UIUX & Game Developer',
  description: 'I have rich experience in web, blockchain and mobile application development. I also have 6 years of experience in game development using Unity. I love to talk with you about your unique projects and how we can collaborate to bring your ideas to life.',
  icons: [
    {
      rel: 'icon',
      url: profilePic.src,
    },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
        <svg width="0" height="0">
          <filter id="outline">
            <feMorphology in="SourceAlpha" result="DILATED" operator="dilate" radius="2"></feMorphology>
            <feFlood flood-color="#000000" flood-opacity="1" result="COLORED"></feFlood>
            <feComposite in="COLORED" in2="DILATED" operator="in" result="OUTLINE"></feComposite>
            <feMerge>
              <feMergeNode in="OUTLINE" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </svg>
      </body>
    </html>
  )
}
