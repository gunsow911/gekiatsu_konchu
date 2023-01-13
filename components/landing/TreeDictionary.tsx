import Link from "next/link"
import {useState} from "react"
import ButtonLink from "../atoms/ButtonLink"
import Description from "../atoms/Description"
import Title from "../atoms/Title"

/**
 * 樹木図鑑
 */
const TreeDictionary = () => {
  const [hovering, setHovering] = useState<boolean>(false)

  const list: {name: string, url: string, image: string}[] = [
    {
      name: "アカマツ",
      url: "/trees/akamatsu",
      image: "/images/akamatsu.jpg",
    },
    {
      name: "ヒノキ",
      url: "/trees/hinoki",
      image: "/images/hinoki.jpg",
    },
    {
      name: "ケヤキ",
      url: "/trees/keyaki",
      image: "/images/keyaki.jpg",
    },
    {
      name: "クヌギ",
      url: "/trees/kunugi",
      image: "/images/kunugi.jpg",
    },
    {
      name: "モウソウ",
      url: "/trees/mousou",
      image: "/images/mousou.jpg",
    },
    {
      name: "サクラ",
      url: "/trees/sakura",
      image: "/images/sakura.jpg",
    },
  ]
  return <>
    <div className="my-8 mx-4" onMouseEnter={() => setHovering(true)} onMouseLeave={() => setHovering(false)}>
      <Title isHover={hovering}>樹木図鑑</Title>
      <Description>
        <div className="grid gap-x-4 gap-y-2 grid-cols-1 sm:grid-cols-3 text-center">
          {list.map(({name, url, image}) => (
            <div key={url} className="mb-3 ">
              <Link href={url}>
                <img className="rounded mt-0 mx-auto" src={image} />
                <div className="text-xl mt-1 hover:underline">{name}</div>
              </Link>
            </div>
          ))}
        </div>
      </Description>
    </div>
  </>
}

export default TreeDictionary

