import React from 'react'
import {MapContainer, TileLayer} from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import useReadCsv from '../hooks/useReadCsv'
import {Marker, Popup} from 'react-leaflet'
import L from 'leaflet';


L.Icon.Default.mergeOptions({
    iconRetinaUrl: 'leaflet/marker-icon-2x.png',
    iconUrl: 'leaflet/marker-icon.png',
    shadowUrl: 'leaflet/marker-shadow.png'
});

const Map = () => {
  
  const {rows} = useReadCsv()

  return (
    <MapContainer center={[34.1046934,131.3046877]} zoom={13} style={{width: '100%', height: '100vh'}}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {rows && rows.map((row, index) => {
          return(
            <React.Fragment key={index}>
              <Marker position={row.latLng}>
                <Popup>
                 <div>カテゴリー: {row.category}</div>
                 <div>施設名: {row.category}</div>
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

