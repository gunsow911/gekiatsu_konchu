import Link from 'next/link';
import React from 'react';

export default function Landing() {
  return (
      <div className="mt-5 text-center">
        <div className="my-5">
          <img className="mx-auto" src="/logo/logo.png" alt="Logo" width={350} />
        </div>
        <div className="mt-8">
          <div className="mt-6 font-semibold text-4xl">
             激アツ！昆虫マップとは？
          </div>
          <div className="mt-6">
            山口市の身近な自然の中に潜む昆虫の種別をマップ上で可視化できるツールです。<br/>
            昆虫の好きな樹種からそれを好む昆虫のいそうな場所がわかります！
            このマップを見ることにより身近な森林が昆虫ワクワクゾーンに大変身！
          </div>
        </div>

        <Link href="/" passHref>
          <div className="my-10 text-2xl ">
            <button className=" ease-in-out duration-100 hover:bg-[#CC7A00] rounded-full border-solid border-gray-200 hover:border-gray-50 border-4 px-6 py-3">激アツ！昆虫マップへ</button>
          </div>
        </Link>

        <div className="my-6">
          <img width={800} className="object-cover mx-auto" src="/landing/slide1.png" />
        </div>
        <div className="my-6">
          <img width={800} className="object-cover mx-auto" src="/landing/slide2.png" />
        </div>
        <div className="my-6">
          <img width={800} className="object-cover mx-auto" src="/landing/slide3.png" />
        </div>
        <div className="my-6">
          <img width={800} className="object-cover mx-auto" src="/landing/slide4.png" />
        </div>
        <div className="my-6">
          <img width={800} className="object-cover mx-auto" src="/landing/slide5.png" />
        </div>
      </div>
  )
}
