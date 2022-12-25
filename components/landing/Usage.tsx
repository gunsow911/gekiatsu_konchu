
/**
 * 使い方
 */
const Usage = () => {
  return <>
    <div className="my-8">
      <div className="mt-6 font-semibold text-4xl">
        使い方
      </div>
      <div className="mt-6">
        <div>
          マップ上で赤く塗られている部分がカブトムシ・クワガタがいそうなところ
        </div>
        <div>
          青く塗られている部分がセミがいそうなところ！
        </div>
        <div>
          色が濃くなればなるほど激アツ！！
        </div>
        <img className="mt-3 mx-auto w-1/2" src="/images/gekiatsumap_1.jpg" />
      </div>
      <div className="mt-6">
        <div>
          エリアを押すと激アツ度と、そのエリアの樹木が表示されるよ！
        </div>
        <div>
          昆虫のアイコンのある樹木はその昆虫の大好きな樹木！探してみよう！
        </div>
        <img className="mt-3 mx-auto w-1/2" src="/images/gekiatsumap_2.jpg" />
      </div>
    </div>
  </>
}

export default Usage
