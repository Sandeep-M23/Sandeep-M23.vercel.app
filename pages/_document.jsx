import { Head, Html, Main, NextScript } from 'next/document';
import Script from 'next/script';

export default function Document() {
  return (
    <Html>
      <Head />
      <Script id='gtm-new' async src='/scripts/gtm.js' />
      <body data-theme='dark'>
        <noscript>
          <iframe
            src='https://www.googletagmanager.com/ns.html?id=GTM-WF7K3Q6W'
            height='0'
            width='0'
            style='display:none;visibility:hidden'
          ></iframe>
        </noscript>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
