import { LatLngBounds} from "leaflet"
import {useState} from "react"
import {Rectangle, useMapEvent} from "react-leaflet"

const SearchArea = () => {

 /**
  * 選択エリア
  */
  const [area, setArea] = useState<LatLngBounds>()

  useMapEvent('click', (e) => {
    const lat = e.latlng.lat
    const lng = e.latlng.lng

    const bounds = new LatLngBounds([lat-0.005, lng-0.005], [lat+0.005, lng+0.005])
    setArea(bounds)
  })

  if (area) {
    return <Rectangle bounds={area}></Rectangle>
  }
  return <></>
  }

export default SearchArea
