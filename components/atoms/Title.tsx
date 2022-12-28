import {ReactNode} from "react"

type Props = {
  children: ReactNode
}

/**
 * タイトル
 */
const Title = ({children} : Props) => {
  return (
    <>
      <div className="flex justify-center">
        <img src="images/icon_logo.png" className="h-12 inline" />
        <div className="font-semibold text-4xl my-auto">
          {children}
        </div>
      </div>
      <hr className="border-2 border-dashed mt-1 mx-4" />
    </>
  )
}

export default Title
