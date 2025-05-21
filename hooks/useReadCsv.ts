import {LatLng} from 'leaflet'
import {FeatureCollection, MultiPolygon} from 'geojson'
import {parse} from 'papaparse'
import {useEffect, useState} from 'react'

type Row = {
  latLng: LatLng
  category: string
  name: string
}

export type WoodAreaProperty = {
  id: number
  data: {[id: string]: number}
  centroid: {lat: number, lng: number}
}

const useReadCsv = (place: string) => {
    const [rows, setRows] = useState<Row[]>()
    const [geoJsonData, setGeoJsonData] = useState<FeatureCollection<MultiPolygon, WoodAreaProperty>>()

    useEffect(() => {
      fetch(`/data/landmarks/${place}.csv`)
        .then(res => res.text())
        .then(text => {
          const results = parse(text ,{
            skipEmptyLines: true,
          })
          const rows = results.data.map<Row>((d) => {
            const row = d as any[]
            // 型安全のために数値変換を追加
            const latLng = new LatLng(Number(row[0]), Number(row[1]))
            const category = row[2]
            const name = row[3]
            return {
              latLng,
              category,
              name,
            }
          })
          setRows(rows) 
        })
        .catch(e => {
          setRows([])
          console.error(e)
        })
    }, [place])

    useEffect(() => {
      fetch(`/data/forest-reports/${place}.geojson`)
        .then(res => res.text())
        .then(text => {
          const fc = JSON.parse((text)) as FeatureCollection<MultiPolygon, WoodAreaProperty>
          setGeoJsonData(fc)
        })
        .catch(e => {
          setGeoJsonData(undefined)
          console.error(e)
        })
    }, [place])

  return { rows, geoJsonData }
}

export default useReadCsv
