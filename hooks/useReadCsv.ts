import {LatLng} from 'leaflet'
import {parse} from 'papaparse'
import {useEffect, useState} from 'react'

type Row = {
  latLng: LatLng
  category: string
  name: string
}

const useReadCsv = () => {
    const [rows, setRows] = useState<Row[]>()

    useEffect(() => {
      fetch("/data/place.csv")
        .then(res => res.text())
        .then(text => {
          const results = parse(text ,{
            skipEmptyLines: true,
          })
          const rows = results.data.map<Row>((d) => {
            console.log(d)
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

  return { rows }
}

export default useReadCsv
