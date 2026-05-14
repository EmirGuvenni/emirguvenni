import type { Metadata } from 'next';
import { Geist, Geist_Mono, Inter } from 'next/font/google';

import { ThemeProvider } from '@/components/providers/theme-provider';
import { Footer } from '@/components/shared/footer';
import { Header } from '@/components/shared/header';

import './globals.css';

// Default font
const inter = Inter({
  variable: '--font-sans',
  subsets: ['latin'],
});

// Used for the logo
const geist = Geist({
  variable: '--font-geist',
  subsets: ['latin'],
});

// Used for code blocks and monospace text
const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://emirguvenni.com'),
  title: {
    default: 'Emir Güvenni',
    template: '%s — Emir Güvenni',
  },
  description:
    'Full-stack developer. I build web systems, admin interfaces and automations with a focus on performance, simplicity and user experience.',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://emirguvenni.com',
    siteName: 'Emir Güvenni',
    title: 'Emir Güvenni — Full Stack Developer',
    description:
      'Full-stack developer. I build web systems, admin interfaces and automations with a focus on performance, simplicity and user experience.',
  },
  twitter: {
    card: 'summary',
    title: 'Emir Güvenni — Full Stack Developer',
    description:
      'Full-stack developer. I build web systems, admin interfaces and automations with a focus on performance, simplicity and user experience.',
  },
  icons: {
    icon: '/favicon.png',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${geist.variable} ${geistMono.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="flex min-h-full flex-col">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
