import React, {useState} from 'react'
import ButtonLink from '../../components/atoms/ButtonLink'
import Title from '../../components/atoms/Title'

/**
 * ヒノキの説明
 */
export default function Hinoki() {
  const [hovering, setHovering] = useState<boolean>(false)
  return <>
    <div className="container mx-auto">
      <div className="my-8 mx-4" onMouseEnter={() => setHovering(true)} onMouseLeave={() => setHovering(false)}>
        <Title isHover={hovering}>ヒノキ</Title>
        <div className="grid gap-x-4 grid-cols-1 sm:grid-cols-2">
          <div>
            <img className="rounded mt-3 mx-auto" src="/images/hinoki_1.jpg" />
            <div className="mt-2">
              <div className="text-lg mb-2 font-semibold">葉っぱの特徴</div>
              ウロコ状で、裏面にはY字状に白い気孔溝がある
            </div>
          </div>
          <div>
            <img className="rounded mt-3 mx-auto" src="/images/hinoki_2.jpg" />
            <div className="mt-2">
              <div className="text-lg mb-2 font-semibold">樹皮の特徴</div>
              赤褐色で、 縦方向に裂けて剥がれる
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
