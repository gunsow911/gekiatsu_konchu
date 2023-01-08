import {ReactNode} from "react"

type Props = {
  children: ReactNode
  isHover?: boolean
}

/**
 * タイトル
 */
const Title = (props : Props) => {
  return (
    <>
      <div className="flex justify-center">
        <img src="/images/icon_logo.png" className={`h-12 inline ease-out duration-200 ${props.isHover ? ' -rotate-12' : 'transform-none'}`} />
        <div className="font-semibold text-4xl my-auto">
          {props.children}
        </div>
      </div>
      <hr className="border-4 border-dashed mt-1 mx-4 border-[#019b4f]" />
    </>
  )
}

export default Title
