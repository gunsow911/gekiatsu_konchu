import React from 'react'
import { MapContainer, TileLayer, GeoJSON} from 'react-leaflet'
import useReadCsv, {WoodAreaProperty} from '../hooks/useReadCsv'
import {Marker, Popup} from 'react-leaflet'
import {Icon} from 'leaflet';
import {iconCamp, iconDefault, iconPark, iconShrine, iconSports} from '../icons/Icons'
import {getColor, getInsectPoint} from '../utility/Insect'
import LegendControl from './LegendControl'
import ReactDOMServer from "react-dom/server"
import GekiatsuPopup from './GekiatsuPopup'


const Map = () => {

  const {rows, geoJsonData} = useReadCsv()

  return (
    <MapContainer center={[34.18583,131.47139]} zoom={13} style={{width: '100%', height: '100vh'}}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {geoJsonData && 
        <GeoJSON 
          data={geoJsonData} 
          style={(feature) => {
            const trees = feature?.properties.data as {[id: string]: number}
            const insectPoint = getInsectPoint(trees)
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
                  <GekiatsuPopup trees={properties.data} />
                );
            layer.bindPopup(popupContent);
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
    </MapContainer>
  )
}

export default Map

