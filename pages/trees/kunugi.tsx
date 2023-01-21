import React, {useState} from 'react'
import ButtonLink from '../../components/atoms/ButtonLink'
import Title from '../../components/atoms/Title'

/**
 * クヌギの説明
 */
export default function Kunugi() {
  const [hovering, setHovering] = useState<boolean>(false)
  return <>
    <div className="container mx-auto">
      <div className="my-8 mx-4" onMouseEnter={() => setHovering(true)} onMouseLeave={() => setHovering(false)}>
        <Title isHover={hovering}>クヌギ</Title>
        <div className="grid gap-x-4 grid-cols-1 sm:grid-cols-2">
          <div>
            <img className="rounded mt-3 mx-auto" src="/images/kunugi_1.jpg" />
            <div className="mt-2">
              <div className="text-lg mb-2 font-semibold">葉っぱの特徴</div>
              先端の尖った細長い楕円形。縁はノコギリ状に白くギザギザしている
            </div>
          </div>
          <div>
            <img className="rounded mt-3 mx-auto" src="/images/kunugi_2.jpg" />
            <div className="mt-2">
              <div className="text-lg mb-2 font-semibold">樹皮の特徴</div>
              灰褐色で、やや深めに不揃いに割れる。深い割れ目の底が、褐色に見える
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
