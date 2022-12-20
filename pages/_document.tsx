import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="ja">
      <Head>
        <title>激アツ！昆虫マップ</title>
        <link rel="icon" href="/favicon.png" />
      </Head>
      <body className="font-body">
        <main>
          <Main />
        </main>
        <NextScript />
      </body>
    </Html>
  )
}
