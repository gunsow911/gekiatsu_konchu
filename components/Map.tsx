import React from 'react'
import {MapContainer, TileLayer} from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import useReadCsv from '../hooks/useReadCsv'
import {Marker, Popup} from 'react-leaflet'
import L, {Icon} from 'leaflet';
import SearchArea from './SearchArea'
import {iconCamp, iconDefault, iconPark, iconShrine, iconSports} from '../icons/Icons'
// import intersect from '@turf/intersect'


const Map = () => {

  const {rows} = useReadCsv()

  return (
    <MapContainer center={[34.1046934,131.3046877]} zoom={13} style={{width: '100%', height: '100vh'}}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
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
                 <div>カテゴリー: {row.category}</div>
                 <div>施設名: {row.name}</div>
                </Popup>
              </Marker>
            </React.Fragment>
            )
          }
      )}
      {/* <SearchArea></SearchArea> */}
    </MapContainer>
  )
}

export default Map

