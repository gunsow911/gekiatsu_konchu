import Link from "next/link"

const LinkLandingPageControl = () => {
  return (
    <div className="leaflet-top leaflet-right mb-4">
      <div className="leaflet-control leaflet-bar px-1 bg-white text-gray-900">
        <Link className="leaflet-landing-link" href="/landing" passHref>ページに戻る</Link>
      </div>
    </div>
  )
}

export default LinkLandingPageControl
