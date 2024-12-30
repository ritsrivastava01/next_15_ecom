import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import Header from 'rit/components/Header';
import { notFound } from 'next/navigation';
import { routing } from 'rit/i18n/routing';
import { getMessages } from 'next-intl/server';
import { NextIntlClientProvider } from 'next-intl';
import Footer from 'rit/components/Footer';
import { CartProvider } from 'rit/components/CartProvider';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin']
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin']
});

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app'
};

export default async function RootLayout({
  children,
  params
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}>) {
  // Ensure that the incoming `locale` is valid
  const locale = (await params).locale;

  if (!routing.locales.includes(locale)) {
    notFound();
  }
  // Providing all messages to the client
  // side is the easiest way to get started
  const messages = await getMessages();
  return (
    <html lang={locale}>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <CartProvider>
          <NextIntlClientProvider messages={messages}>
            <Header></Header>
            <div className='max-w-7xl mx-auto px-3'>{children}</div>
            <div className='pt-5'>
              <Footer></Footer>
            </div>
          </NextIntlClientProvider>
        </CartProvider>
      </body>
    </html>
  );
}
