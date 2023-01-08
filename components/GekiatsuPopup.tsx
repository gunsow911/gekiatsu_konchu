import {getInsectPoints, isBeetleLike, isCicadaLike, isLonghornBeetleLike} from "../utility/Insect"
import {getTreeDescriptionUrl, getTreeName} from "../utility/Tree"
import TwitterButton from "./TwitterButton"

type Props = {
  trees: {[id: string]: number}
  latLng?: {lat: number, lng: number}
}

const GekiatsuPopup = (props: Props) => {
  const insectPoints = getInsectPoints(props.trees)

  const totalPoint = Number((insectPoints.reduce((prev, current) => {
    return prev + current.point
  }, 0) * 100).toFixed(0))

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
          <span className="pr-1">
            <span className="pr-1">{getTreeName(percent.id)}</span>
            {percent.percent}%
          </span>
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
      <div className="text-center">
        <TwitterButton point={totalPoint} latLng={props.latLng} />
      </div>
    </div>
  ) 
}

export default GekiatsuPopup
