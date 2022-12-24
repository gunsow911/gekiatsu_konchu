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
}

const useReadCsv = () => {
    const [rows, setRows] = useState<Row[]>()
    const [geoJsonData, setGeoJsonData] = useState<FeatureCollection<MultiPolygon, WoodAreaProperty>>()

    useEffect(() => {
      fetch("/data/place.csv")
        .then(res => res.text())
        .then(text => {
          const results = parse(text ,{
            skipEmptyLines: true,
          })
          const rows = results.data.map<Row>((d) => {
            const row = d as any[]
            const latLng = new LatLng(row[0], row[1])
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
    }, [])

    useEffect(() => {
      fetch("/data/山口市森林簿.geojson")
        .then(res => res.text())
        .then(text => {
          const fc = JSON.parse((text)) as FeatureCollection<MultiPolygon, WoodAreaProperty>
          setGeoJsonData(fc)
        })
    }, [])

  return { rows, geoJsonData }
}

export default useReadCsv
