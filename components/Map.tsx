import React, {useState, useEffect} from 'react'
import { MapContainer, TileLayer, GeoJSON} from 'react-leaflet'
import useReadCsv, {WoodAreaProperty} from '../hooks/useReadCsv'
import {Marker, Popup} from 'react-leaflet'
import {Icon, Layer} from 'leaflet';
import {iconCamp, iconDefault, iconPark, iconShrine, iconSports} from '../icons/Icons'
import {getColor, getTopInsectPoint} from '../utility/Insect'
import LegendControl from './controls/LegendControl'
import ReactDOMServer from "react-dom/server"
import GekiatsuPopup from './GekiatsuPopup'
import {useRouter} from 'next/router';
import LinkLandingPageControl from './controls/LinkLandingPageControl';

const Map = () => {

  const router = useRouter()
  const {rows, geoJsonData} = useReadCsv('yamaguchi')
  const [initLayer, setInitLayer] = useState<Layer>()

  const initLat = router.query.lat ? Number(router.query.lat) : undefined
  const initLng = router.query.lng ? Number(router.query.lng) : undefined
  const initCenter = (initLat && initLng) ? {lat: initLat, lng: initLng} : undefined

  useEffect(() => {
    if (initLayer === undefined) return
    initLayer.openPopup() 
  }, [initLayer])

  return (
    <MapContainer center={initCenter ?? {lat: 34.18583, lng: 131.47139}} zoom={13} style={{width: '100%', height: '100vh'}}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {geoJsonData && 
        <GeoJSON 
          data={geoJsonData} 
          style={(feature) => {
            const trees = feature?.properties.data as {[id: string]: number}
            const insectPoint = getTopInsectPoint(trees)
            const color = getColor(insectPoint.id)
            const opacity = Math.min(1.0, insectPoint.point)
            return {
              weight: 0.5,
              fillColor: color,
              fillOpacity: 0.3 + (0.5 * opacity),
              color: "#ffffff",
            }
          }}
          onEachFeature={(feature, layer) => {
            const properties = feature.properties as WoodAreaProperty
            const popupContent = ReactDOMServer.renderToString(
              <GekiatsuPopup trees={properties.data} latLng={properties.centroid} />
            )
            layer.bindPopup(popupContent)
            if (initCenter && properties.centroid.lng === initCenter.lng && properties.centroid.lat === initCenter.lat) {
              setInitLayer(layer)
            }
          }}
        />
      }
      {rows && rows.map((row, index) => {
          let icon: Icon = iconDefault
          if (row.category === 'スポーツ施設') icon = iconSports
          if (row.category === '公園') icon = iconPark
          if (row.category === '神社') icon = iconShrine
          if (row.category === 'キャンプ場') icon = iconCamp
          return(
            <React.Fragment key={index}>
              <Marker position={row.latLng} icon={icon}>
                <Popup>
                 <div className='pt-2'>{row.name}</div>
                </Popup>
              </Marker>
            </React.Fragment>
            )
          }
      )}
      <LegendControl />
      <LinkLandingPageControl />
    </MapContainer>
  )
}

export default Map

