import {Button} from '@mui/material';
import Head from 'next/head'
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

export default function Landing() {
  return (
    <div>
      <Head>
        <title>激アツ！昆虫マップ</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main style={{ textAlign: 'center', marginTop: '5em' }}>
        <div style={{ marginBottom: '3em' }}>
          <img src="/logo/logo.png" alt="Logo" width={350} />
        </div>
        <div style={{marginBottom: '3em'}}>
          <div style={{marginBottom: '1.2em'}}>
            <h1>激アツ！昆虫マップ とは？</h1>
          </div>
          <p>
            身近な自然の中に潜む昆虫の種別をマップ上で可視化できるツールです。<br/>
            昆虫の好きな樹種からそれを好む昆虫のいそうな場所がわかります！
            このマップを見ることにより身近な森林が昆虫ワクワクゾーンに大変身！
          </p>
        </div>

        <Link href="/" passHref>
          <Button variant='outlined' size="large">昆虫マップへ</Button>
        </Link>
        <div style={{margin: '6em 4em'}}>
        <img style={{ width: '100%'}} src="/landing/slide1.png" alt="" />
        </div>
        <div style={{margin: '6em 4em'}}>
        <img style={{ width: '100%'}} src="/landing/slide2.png" alt="" />
        </div>
        <div style={{margin: '6em 4em'}}>
        <img style={{ width: '100%'}} src="/landing/slide3.png" alt="" />
        </div>
        <div style={{margin: '6em 4em'}}>
        <img style={{ width: '100%'}} src="/landing/slide4.png" alt="" />
        </div>
        <div style={{margin: '6em 4em'}}>
        <img style={{ width: '100%'}} src="/landing/slide5.png" alt="" />
        </div>
      </main>
    </div>
  )
}
