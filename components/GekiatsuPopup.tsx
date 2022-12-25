import Link from "next/link"
import {TwitterShareButton, TwitterIcon,} from "react-share";
import {getInsectPoints, isBeetleLike, isCicadaLike} from "../utility/Insect"

type Props = {
  trees: {[id: string]: number}
}

type InsectType = 'BEETLE' | 'CICADA' | 'UNKNOWN'

const ShareText = ''
const ShareURL = 'https://gekiatsu-konchu-ucwuauyiva-an.a.run.app/landing'
const HashTags = '激アツ昆虫'

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

  const getInsectType = (points: {id:number, point:number}[]): InsectType => {
    const beetlePoint = points[0].point
    const cicadaPoint = points[1].point

    if (beetlePoint === 0 && cicadaPoint === 0) {
      return 'UNKNOWN'
    }
    if (beetlePoint >= cicadaPoint) {
      return 'BEETLE' 
    }
    return 'CICADA'
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

  const shareText = `激アツ度 ${totalPoint}%25`

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
          </>
        </div>
      ))}
      <a href={`https://twitter.com/intent/tweet?text=${shareText}&url=${ShareURL}&hashtags=${HashTags}`} rel="nofollow noopener" target="_blank">
        <button
          type="button"
          className="inline-flex items-center rounded-md border border-transparent bg-[#1da1f2] px-3 py-2 mt-2 text-sm font-medium leading-4 text-white shadow-sm hover:bg-indigo-700"
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-4 h-4">
            <path fill="currentColor" d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"/>
          </svg>
          <div className='pl-2'>Twitterでシェア</div>
        </button>
      </a>
    </div>
  ) 
}


export default GekiatsuPopup
