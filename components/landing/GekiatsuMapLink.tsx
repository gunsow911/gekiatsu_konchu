import Link from "next/link"

/**
 * 激アツ！昆虫マップへのリンクボタン
 */
const GekiatsuMapLink = () => {
  return <>
      <div className="text-2xl text-center font-extrabold">
        <Link href="/" passHref>
          <button className="ease-out duration-100 bg-[#ea5315] hover:bg-[#ea642c] rounded-full border-solid border-gray-200 border-4 px-6 py-3">激アツ！昆虫マップへ</button>
        </Link>
      </div>
  </>
}
export default GekiatsuMapLink

