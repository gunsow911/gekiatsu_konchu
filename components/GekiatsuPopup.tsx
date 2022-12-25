import {getInsectPoints, isBeetleLike, isCicadaLike, isLonghornBeetleLike} from "../utility/Insect"

type Props = {
  trees: {[id: string]: number}
}

const GekiatsuPopup = (props: Props) => {

  const getName = (id: string) => {
    if (id === "1") return 'スギ'
    if (id === "11") return 'ヒノキ'
    if (id === "12") return 'アカマツ'
    if (id === "13") return 'クロマツ'
    if (id === "15") return 'イチョウ'
    if (id === "16") return 'カヤ'
    if (id === "19") return '針葉樹'
    if (id === "21") return 'クヌギ'
    if (id === "22") return 'カシ'
    if (id === "23") return 'シイ'
    if (id === "24") return 'クリ'
    if (id === "25") return 'キリ'
    if (id === "27") return 'ヤシヤブシ'
    if (id === "28") return 'ケヤキ'
    if (id === "29") return '広葉樹'
    if (id === "31") return 'マダケ'
    if (id === "32") return 'モウソウ'
    if (id === "33") return 'ハチク'
    if (id === "41") return 'コナラ'
    if (id === "42") return 'ヤマザクラ'
    if (id === "43") return 'ヤマグワ'
    if (id === "46") return 'ヤブツバキ'
    if (id === "49") return 'サカキ'
    if (id === "51") return 'ヤマモモ'
    if (id === "53") return 'イタヤカエデ'
    if (id === "55") return 'イヌマキ'
    if (id === "56") return 'コウヤマキ'
    if (id === "57") return 'モミ'
    return 'わからん'
  }

  const insectPoints = getInsectPoints(props.trees)

  const totalPoint = (insectPoints.reduce((prev, current) => {
    return prev + current.point
  }, 0) * 100).toFixed(0)

  const total = Object.keys(props.trees).reduce((sum, id) => {
    return sum + props.trees[id]
  }, 0)

  const percents = Object.keys(props.trees)
    .sort((a, b) => {
      return props.trees[b] - props.trees[a]
    })
    .map((id) => {
      const percent = ((props.trees[id] / total) * 100).toFixed(2)
      return {id: id, percent: percent}
    })

  return (
    <div className="w-40">
      <div className="text-lg text-center">激アツ度 {totalPoint}%</div>
      <hr className="mb-1.5 mt-1"  />
      <div className="text-xs font-semibold pb-1">樹木の種類</div>
      {percents.map((percent, index) => (
        <div className="flex items-center h-5" key={index}>
          <span className="pr-1">{getName(percent.id)} {percent.percent}%</span>
          <>
            {isBeetleLike(percent.id) && 
              <>
                <img className="h-5 flex-initial" src="/images/beetle.png" />
                <img className="h-5 flex-initial" src="/images/beetle_stag.png" />
              </>
            }
            {isCicadaLike(percent.id) && <img className="h-5" src="/images/cicada.png" />}
            {isLonghornBeetleLike(percent.id) && <img className="h-5 flex-initial" src="/images/longhorn_beetle.png" /> }
          </>
        </div>
      ))}
    </div>
  ) 
}


export default GekiatsuPopup
