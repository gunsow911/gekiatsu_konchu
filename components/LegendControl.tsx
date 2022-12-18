import {getColor} from "../utility/Insect"


const LegendControl = () => {
  return (
    <div className="leaflet-bottom leaflet-right">
      <div 
      className="leaflet-control leaflet-bar" 
      style={{
        marginBottom: "3em",
        padding: "1em",
        background: "#ffffff",
        color: "#222222",
      }}
      >
        <div><span style={{paddingRight: "1em", backgroundColor: getColor(1), opacity: 0.6}}>&nbsp;</span><span style={{paddingLeft: "0.5em"}}>カブトムシ・クワガタ</span></div>
        <div><span style={{paddingRight: "1em", backgroundColor: getColor(2), opacity: 0.6}}>&nbsp;</span><span style={{paddingLeft: "0.5em"}}>セミ</span></div>
        <div><span style={{paddingRight: "1em", backgroundColor: getColor(0), opacity: 0.6}}>&nbsp;</span><span style={{paddingLeft: "0.5em"}}>その他</span></div>
      </div>
    </div>
  )
}


export default LegendControl
