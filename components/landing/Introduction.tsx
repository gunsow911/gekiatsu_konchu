import Description from "../atoms/Description"
import Title from "../atoms/Title"

/**
 * 激アツ！昆虫マップの説明
 */
const Introduction = () => {
  return <>
    <div className="my-8 mx-4">
      <Title>激アツ！昆虫マップとは？</Title>
      <Description>
          山口市の身近な自然の中に潜む昆虫の種別をマップ上で可視化できるツールです。<br />
          昆虫の好きな樹種からそれを好む昆虫のいそうな場所がわかります！<br />
          このマップを見ることにより身近な森林が昆虫ワクワクゾーンに大変身！
      </Description>
    </div>
  </>
}
export default Introduction
