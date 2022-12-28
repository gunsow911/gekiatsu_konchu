import {ReactNode} from "react"

type Props = {
  children: ReactNode
}

/**
 * 説明
 */
const Description = ({children} : Props) => {
  return <div className="flex justify-center">
    <div className="mt-6 text-lg">
      {children}
    </div>
  </div>
}
export default Description

