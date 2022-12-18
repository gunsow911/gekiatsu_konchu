import React from 'react'
import { MapContainer, TileLayer, GeoJSON} from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import useReadCsv, {WoodAreaProperty} from '../hooks/useReadCsv'
import {Marker, Popup} from 'react-leaflet'
import L, {Icon} from 'leaflet';
import {iconCamp, iconDefault, iconPark, iconShrine, iconSports} from '../icons/Icons'
import {getPopUpElement} from '../utility/WoodArea'


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
            return {
              weight: 0.5,
            }
          }}
          onEachFeature={(feature, layer) => {
            const properties = feature.properties as WoodAreaProperty
            layer.bindPopup(getPopUpElement(properties.data))
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
                 <div>{row.name}</div>
                </Popup>
              </Marker>
            </React.Fragment>
            )
          }
      )}
    </MapContainer>
  )
}

export default Map

