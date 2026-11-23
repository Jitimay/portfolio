import { Html, Head, Main, NextScript } from 'next/document';

const themeScript = "try { var theme = localStorage.getItem('darkMode'); if (theme === 'true' || (theme === null && matchMedia('(prefers-color-scheme: dark)').matches)) document.documentElement.classList.add('dark'); } catch {}";

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
