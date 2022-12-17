import React from 'react'
import {MapContainer, TileLayer} from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import useReadCsv from '../hooks/useReadCsv'

const Map = () => {
  
  const {rows} = useReadCsv()

  console.log(rows)

  return (
    <MapContainer center={[34.1046934,131.3046877]} zoom={13} style={{width: '100%', height: '100vh'}}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

    </MapContainer>
  )
}

export default Map

