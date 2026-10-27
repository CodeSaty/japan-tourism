import type {Metadata} from 'next';
import './globals.css';
import { ChatBot } from '@/components/ChatBot';

export const metadata: Metadata = {
  title: 'Japan — Sacred Pathways & Regional Heritage Guide',
  description:
    "An interactive journey across Japan's regional temple and shrine heritage across 8 regions and 47 prefectures, with live AI Travel Concierge.",
  openGraph: {
    title: 'Japan — Sacred Pathways & Regional Heritage Guide',
    description:
      "An interactive journey across Japan's regional temple and shrine heritage across 8 regions and 47 prefectures, with live AI Travel Concierge.",
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Japan — Sacred Pathways & Regional Heritage Guide',
    description:
      "An interactive journey across Japan's regional temple and shrine heritage across 8 regions and 47 prefectures, with live AI Travel Concierge.",
  },
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en">
      <body suppressHydrationWarning className="bg-[#05070a] text-[#dfe7e0] antialiased">
        {children}
        <ChatBot />
      </body>
    </html>
  );
}
