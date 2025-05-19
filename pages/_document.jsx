import { Head, Html, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html>
      <Head />
      <body data-theme='dark'>
        <noscript>
          <iframe
            src='https://www.googletagmanager.com/ns.html?id=GTM-WF7K3Q6W'
            height='0'
            width='0'
            style={{ display: 'none', visibility: 'hidden' }}
          ></iframe>
        </noscript>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
