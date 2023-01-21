import {useState} from "react"
import Description from "../atoms/Description"
import Title from "../atoms/Title"

/**
 * 使い方
 */
const Usage = () => {
  const [hovering, setHovering] = useState<boolean>(false)
  return <>
    <div className="my-8 mx-4" onMouseEnter={() => setHovering(true)} onMouseLeave={() => setHovering(false)}>
      <Title isHover={hovering}>つかいかた</Title>
      <Description>
        <div className="grid gap-x-4 grid-cols-1 sm:grid-cols-3">
          <div>
            <img className="mt-3 mx-auto rounded" src="/images/gekiatsumap_1.jpg" />
            <div className="mt-2">
              昆虫がいそうなエリアに色がぬられているよ！<br />
              色がこくなればなるほど激アツ！！
            </div>
          </div>
          <div>
            <img className="mt-3 mx-auto rounded" src="/images/gekiatsumap_2.jpg" />
            <div className="mt-2">
              エリアを押すと激アツ度と、そのエリアの樹木が表示されるよ！<br />
              昆虫のアイコンのある樹木はその昆虫の大好きな樹木！さがしてみよう！
            </div>
          </div>
          <div>
            <img className="mt-3 mx-auto rounded" src="/images/gekiatsumap_3.jpg" />
            <div className="mt-2">
              きみの好きな昆虫が好きな樹木はどれだろう？<br />
              樹木図鑑で樹木の特徴を調べてみよう！
            </div>
          </div>
        </div>
      </Description>
    </div>
  </>
}

export default Usage
