import {useState} from "react"
import Description from "../atoms/Description"
import Title from "../atoms/Title"

/**
 * 激アツ！昆虫マップのオープンデータ参照先
 */
const OpenDataReference = () => {
  const [hovering, setHovering] = useState<boolean>(false)
  const list: {name: string, url: string}[] = [
    {
      name: "山口市森林簿（山口県）",
      url: "https://yamaguchi-opendata.jp/ckan/dataset/350001-forest",
    },
    {
      name: "都市公園一覧表（山口市）",
      url: "https://www.city.yamaguchi.lg.jp/soshiki/78/102060.html",
    },
    {
      name: "スポーツ施設（山口市）",
      url: "https://yamaguchi-opendata.jp/ckan/dataset/00009",
    },
    {
      name: "神社一覧（山口県神社庁）",
      url: "http://www.yamaguchi-jinjacho.or.jp/list.php",
    },
  ]

  return <>
    <div className="my-8 mx-4" onMouseEnter={() => setHovering(true)} onMouseLeave={() => setHovering(false)}>
      <Title isHover={hovering}>オープンデータ</Title>
      <Description>
        <div className="text-lg mb-2 font-semibold">激アツ！昆虫マップは、以下のオープンデータを使って作られました</div>
        <div className="grid gap-x-4 grid-cols-1 sm:grid-cols-2">
          {list.map(({name, url}) => (
            <div key={url} className="mb-3">
              <div>{name}</div>
              <a className="text-sm mt-0 hover:underline" href={url} rel="nofollow noopener" target="_blank">{url}</a>
            </div>
          ))}
        </div>
      </Description>
    </div>
  </>
}
export default OpenDataReference
