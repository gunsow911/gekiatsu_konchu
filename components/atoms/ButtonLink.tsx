import Link from "next/link"
import {ReactNode} from "react"

type Props = {
  children: ReactNode
  href: string
}

/**
 * ボタンリンク
 */
const ButtonLink = (props: Props) => {
  return <>
      <div className="text-2xl text-center font-extrabold">
        <Link href={props.href} passHref>
          <button className="ease-out duration-100 bg-[#ea5315] hover:bg-[#ea642c] rounded-full border-solid border-gray-200 border-4 px-6 py-3">
            {props.children}
          </button>
        </Link>
      </div>
  </>
}
export default ButtonLink
