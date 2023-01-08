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
        <img className="mt-3 mx-auto" src="/images/hinoki.jpg" />
        <div className="mt-3">
          樹木の説明を入れる
        </div>
        <div className="mt-3">
          <ButtonLink href="/landing">もどる</ButtonLink>
        </div>
      </div>
    </div>
  </>
}
