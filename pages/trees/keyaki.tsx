import React, {useState} from 'react'
import ButtonLink from '../../components/atoms/ButtonLink'
import Title from '../../components/atoms/Title'

/**
 * ケヤキの説明
 */
export default function Keyaki() {
  const [hovering, setHovering] = useState<boolean>(false)
  return <>
    <div className="container mx-auto">
      <div className="my-8 mx-4" onMouseEnter={() => setHovering(true)} onMouseLeave={() => setHovering(false)}>
        <Title isHover={hovering}>ケヤキ</Title>
        <div className="grid gap-x-4 grid-cols-1 sm:grid-cols-2">
          <div>
            <img className="rounded mt-3 mx-auto" src="/images/keyaki_1.jpg" />
            <div className="mt-2">
              <div className="text-lg mb-2 font-semibold">葉っぱの特徴</div>
              細長い楕円形で先端が尖っており、質はやや薄い。縁には鋭いノコギリ歯がある
            </div>
          </div>
          <div>
            <img className="rounded mt-3 mx-auto" src="/images/keyaki_2.jpg" />
            <div className="mt-2">
              <div className="text-lg mb-2 font-semibold">樹皮の特徴</div>
              灰紫褐色で雲紋状の薄い片となって剥がれ落ちる
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
