import React, {useState} from 'react'
import ButtonLink from '../../components/atoms/ButtonLink'
import Title from '../../components/atoms/Title'

/**
 * 虫取りの準備リスト
 */
export default function ReadyToGo() {
  const [hovering, setHovering] = useState<boolean>(false)
  return <>
    <div className="container mx-auto">
      <div className="my-8 mx-4" onMouseEnter={() => setHovering(true)} onMouseLeave={() => setHovering(false)}>
        <Title isHover={hovering}>虫取りの準備リスト</Title>
        <div className="grid gap-x-4 gap-y-2 grid-cols-1 sm:grid-cols-2">
          <div className="ml-8 mt-3">
            <ul className="text-lg">
              <li>・長袖のシャツ</li>
              <li>・長ズボン</li>
              <li>・帽子</li>
              <li>・タオル</li>
              <li>・動きやすいクツ</li>
              <li>・軍手や手袋</li>
              <li>・リュック</li>
              <li>・虫取り網</li>
              <li>・虫かご</li>
              <li>・懐中電灯</li>
              <li>・虫除けスプレー</li>
              <li>・虫刺され用のかゆみ止め</li>
              <li>・飲み物</li>
              <li>
                ・エサ(一例)<br />
                <div className='ml-5'>バナナ、リンゴ(「バナナトラップ」で検索)</div>
              </li>
            </ul>
          </div>
          <div className="hidden sm:block my-auto">
            <img className="rounded mx-auto" src="/images/ready-to-go.png" />
          </div>
        </div>
        <div className="mt-3">
          <ButtonLink href="/landing">もどる</ButtonLink>
        </div>
      </div>
    </div>
  </>
}

