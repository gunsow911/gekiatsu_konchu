import Head from 'next/head'
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
// import styles from '../styles/Landing.module.css'

export default function Landing() {
  return (
    <div>
      <Head>
        <title>激アツ！昆虫マップ ランディング</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main style={{
          textAlign: 'center',
          margin: '50px 100px'
          }}>
        <div style={{
          textAlign: 'center',
          margin: '50px 100px',
          }}>
          <Image className='logo_en' src="/logo/logo_ja.svg" alt="Logo" width={350} height={160} />
        </div>
        <div style={{marginBottom: '3em'}}>
          <div style={{marginBottom: '1.2em'}}>
            <h1>激アツ！昆虫マップ とは？</h1>
          </div>
          <p>
            身近な自然の中に潜む昆虫の種別をマップ上で可視化できるツールです。<br/>
            昆虫の好きな樹種からそれを好む昆虫のいそうな場所をマッピングします。
            このマップを見ることにより身近な森林が昆虫ワクワクゾーンに大変身。
          </p>
        </div>
        <div>
        <img style={{marginBottom: '1.2em', width: '100%'}} src="/landing/slide1.png" alt="" />
        </div>
        <div>
        <img style={{marginBottom: '1.2em', width: '100%'}} src="/landing/slide2.png" alt="" />
        </div>
        <div>
        <img style={{marginBottom: '1.2em', width: '100%'}} src="/landing/slide3.png" alt="" />
        </div>
      </main>
    </div>
  )
}
