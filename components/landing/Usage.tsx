import Description from "../atoms/Description"
import Title from "../atoms/Title"

/**
 * 使い方
 */
const Usage = () => {
  return <>
    <div className="my-8 mx-4">
      <Title>使い方</Title>
      <Description>
        <div className="grid gap-x-4 grid-cols-1 sm:grid-cols-2">
          <div>
            <img className="mt-3 mx-auto" src="/images/gekiatsumap_1.jpg" />
            <div className="mt-2">
              昆虫がいそうなエリアに色がぬられているよ！<br />
              色が濃くなればなるほど激アツ！！
            </div>
          </div>
          <div>
            <img className="mt-3 mx-auto" src="/images/gekiatsumap_2.jpg" />
            <div className="mt-2">
              エリアを押すと激アツ度と、そのエリアの樹木が表示されるよ！<br />
              昆虫のアイコンのある樹木はその昆虫の大好きな樹木！探してみよう！
            </div>
          </div>
        </div>
      </Description>
    </div>
  </>
}

export default Usage
