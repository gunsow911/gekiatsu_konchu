import React, {useState} from 'react'
import ButtonLink from '../../components/atoms/ButtonLink'
import Title from '../../components/atoms/Title'

/**
 * モウソウの説明
 */
export default function Mousou() {
  const [hovering, setHovering] = useState<boolean>(false)
  return <>
    <div className="container mx-auto">
      <div className="my-8 mx-4" onMouseEnter={() => setHovering(true)} onMouseLeave={() => setHovering(false)}>
        <Title isHover={hovering}>モウソウ</Title>
        <img className="mt-3 mx-auto" src="/images/mousou.jpg" />
        <div className="mt-3">
          樹木の説明を入れる
        </div>
        <ButtonLink href="/landing">もどる</ButtonLink>
      </div>
    </div>
  </>
}



