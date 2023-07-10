import './globals.css';
import localFont from 'next/font/local';
import favicon from './favicon.ico';
import '@fortawesome/fontawesome-svg-core/styles.css';
import { config } from '@fortawesome/fontawesome-svg-core';
config.autoAddCss = false;

const TwitterChirp = localFont({
  src: [
    {
      path: '../fonts/chirp-regular-web.woff',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../fonts/chirp-bold-web.woff',
      weight: '700',
      style: 'normal',
    },
  ],
  variable: '--font-chirp',
});

export const metadata = {
  title: 'Hyper Archive',
  description:
    'Hyper Archive is a simple yet powerful app that allows you to store and organize all your hyperlinks in more convenient way.',
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <head>
        <link rel='icon' type='image/x-icon' href={favicon.src} />
      </head>
      <body className={TwitterChirp.variable}>{children}</body>
    </html>
  );
}
