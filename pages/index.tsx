import dynamic from 'next/dynamic';
import Head from 'next/head'
import React from 'react';
import styles from '../styles/Home.module.css'

export default function Home() {
  const Map = React.useMemo(
    () =>
      dynamic(() => import("../components/Map"), {
        loading: () => <p>地図をロード中です…</p>,
        ssr: false,
      }),
    []
  );
  return (
    <div className={styles.container}>
      <Head>
        <title>激アツ！昆虫マップ</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Map />
      </main>
    </div>
  )
}
