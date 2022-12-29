import {ReactNode, useState} from "react"

type Props = {
  children: ReactNode
}

/**
 * タイトル
 */
const Title = ({children} : Props) => {
  const [hovering, setHovering] = useState<boolean>(false)

  const onEnter = () => {
    setHovering(true)
  }

  const onLeave = () => {
    setHovering(false)
  }

  return (
    <>
      <div className="flex justify-center" onMouseLeave={onLeave} onMouseEnter={onEnter}>
        <img src="images/icon_logo.png" className={`h-12 inline ease-out duration-200 ${hovering ? ' -rotate-12' : 'transform-none'}`} />
        <div className="font-semibold text-4xl my-auto">
          {children}
        </div>
      </div>
      <hr className="border-4 border-dashed mt-1 mx-4 border-[#019b4f]" />
    </>
  )
}

export default Title
