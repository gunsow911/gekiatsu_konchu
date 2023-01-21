import React, {useState} from 'react'
import ButtonLink from '../../components/atoms/ButtonLink'
import Title from '../../components/atoms/Title'

/**
 * サクラの説明
 */
export default function Sakura() {
  const [hovering, setHovering] = useState<boolean>(false)
  return <>
    <div className="container mx-auto">
      <div className="my-8 mx-4" onMouseEnter={() => setHovering(true)} onMouseLeave={() => setHovering(false)}>
        <Title isHover={hovering}>サクラ</Title>
        <div className="grid gap-x-4 grid-cols-1 sm:grid-cols-2">
          <div>
            <img className="rounded mt-3 mx-auto" src="/images/sakura_1.jpg" />
            <div className="mt-2">
              <div className="text-lg mb-2 font-semibold">葉っぱの特徴</div>
              卵形あるいは楕円形で枝から互い違いに生じる。縁には細かなギザギザがあり、葉先は尾状に細く尖る
            </div>
          </div>
          <div>
            <img className="rounded mt-3 mx-auto" src="/images/sakura_2.jpg" />
            <div className="mt-2">
              <div className="text-lg mb-2 font-semibold">樹皮の特徴</div>
              紫褐色で横縞（皮目）が目立ち、 若い木では光沢があるが成木では暗い感じになる
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
