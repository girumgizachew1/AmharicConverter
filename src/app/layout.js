import Head from 'next/head';
import { Inter } from 'next/font/google';

import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Amharic Converter Documentation',
  description: 'Comprehensive documentation for the Amharic Converter library, enabling fast Amharic writing.',
  author: 'Your Name',
  keywords: 'Amharic, Converter, Writing, Library, Documentation',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <meta name="author" content={metadata.author} />
        <meta name="keywords" content={metadata.keywords} />
        <link rel="icon" href="/path/to/favicon.ico" /> {/* Replace with the path to your favicon */}
      </Head>
      <body className={inter.className}>{children}</body>
    </html>);
}
