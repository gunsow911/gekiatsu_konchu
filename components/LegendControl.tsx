import {getColor} from "../utility/Insect"


const LegendControl = () => {
  return (
    <div className="leaflet-bottom leaflet-right mb-4">
      <div 
      className="leaflet-control leaflet-bar p-2 bg-white text-gray-900" 
      >
        <div><span className="pr-3 opacity-60" style={{backgroundColor: getColor(1)}}>&nbsp;</span><span style={{paddingLeft: "0.5em"}}>カブトムシ・クワガタ</span></div>
        <div><span className="pr-3 opacity-60" style={{backgroundColor: getColor(2)}}>&nbsp;</span><span style={{paddingLeft: "0.5em"}}>セミ</span></div>
        <div><span className="pr-3 opacity-60" style={{backgroundColor: getColor(0)}}>&nbsp;</span><span style={{paddingLeft: "0.5em"}}>その他</span></div>
      </div>
    </div>
  )
}


export default LegendControl
