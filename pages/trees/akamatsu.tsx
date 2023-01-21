import React, {useState} from 'react'
import ButtonLink from '../../components/atoms/ButtonLink'
import Title from '../../components/atoms/Title'

/**
 * アカマツの説明
 */
export default function Akamatsu() {
  const [hovering, setHovering] = useState<boolean>(false)
  return <>
    <div className="container mx-auto">
      <div className="my-8 mx-4" onMouseEnter={() => setHovering(true)} onMouseLeave={() => setHovering(false)}>
        <Title isHover={hovering}>アカマツ</Title>
        <div className="grid gap-x-4 grid-cols-1 sm:grid-cols-2">
          <div>
            <img className="rounded mt-3 mx-auto" src="/images/akamatsu_1.jpg" />
            <div className="mt-2">
              <div className="text-lg mb-2 font-semibold">葉っぱの特徴</div>
              針状で、細く柔らかいため触れてもあまり痛くない
            </div>
          </div>
          <div>
            <img className="rounded mt-3 mx-auto" src="/images/akamatsu_2.jpg" />
            <div className="mt-2">
              <div className="text-lg mb-2 font-semibold">樹皮の特徴</div>
              白みを帯びた赤褐色で、縦長の亀甲状に亀裂して剥がれる
            </div>
          </div>
        </div>
        <div className="mt-3">
          <ButtonLink href="/landing">もどる</ButtonLink>
        </div>
      </div>
    </div>
  </>
}
