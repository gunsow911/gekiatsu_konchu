import ButtonLink from "../atoms/ButtonLink"

/**
 * 虫取り準備へのリンクボタン
 */
const ReadyToGoMapLink = () => {
  return <>
    <div className="flex justify-center pb-2">
      <div className="text-lg font-semibold">
          さぁ、虫取りに行こう！！
      </div>
    </div>
    <ButtonLink href="/ready-to-go">虫取りの準備リスト</ButtonLink>
  </>
}
export default ReadyToGoMapLink

