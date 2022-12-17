import Papa from 'papaparse'

type Row = {
  lat: number
  lng: number
  description: string
}

const useReadCsv = () => {

  const rows = Papa.parse<Row>("/data/place.csv").data

  return {rows}
}

export default useReadCsv
