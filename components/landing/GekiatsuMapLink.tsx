import Link from "next/link"

/**
 * 激アツ！昆虫マップへのリンクボタン
 */
const GekiatsuMapLink = () => {
  return <>
    <Link href="/" passHref>
      <div className="text-2xl text-center">
        <button className=" ease-in-out duration-100 hover:bg-[#CC7A00] rounded-full border-solid border-gray-200 hover:border-gray-50 border-4 px-6 py-3">激アツ！昆虫マップへ</button>
      </div>
    </Link>
  </>
}
export default GekiatsuMapLink

