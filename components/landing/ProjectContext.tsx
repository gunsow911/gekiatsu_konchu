import {useState} from "react"
import Description from "../atoms/Description"
import Title from "../atoms/Title"

/**
 * 取組の背景
 */
const ProjectContext = () => {
  const [hovering, setHovering] = useState<boolean>(false)
  return <>
    <div className="my-8 mx-4" onMouseEnter={() => setHovering(true)} onMouseLeave={() => setHovering(false)}>
      <Title isHover={hovering}>取組の背景</Title>
      <Description>
        <div className="grid gap-x-4 gap-y-3 grid-cols-2 mb-5 items-center">
          <div>
            <div>
              近年、運動や外遊びをする子どもたちが減少しています。<br />
              原因としては、<br />
              ・室内玩具(ゲーム、スマホ)の人気<br />
              ・習い事、塾通いによる時間不足<br />
              ・外出先でのケガ、事件への不安<br />
              ・コロナ禍の外出抑制<br />
              などがあります。<br />
            </div>
            <div className="mt-4">
              外遊びをすると、様々なメリットがあります。<br />
              ・体力維持、運動能力の向上<br />
              ・意欲的な心の育成<br />
              ・社会適応力の発達<br />
              ・認知的能力の発達<br />
              外遊びは体の成長も促す効果があります！<br />
            </div>
          </div>
          <div className="px-5">
            <img className="rounded" src="/images/project_context_1.jpg" />
          </div>
        </div>
        <div className="grid gap-x-4 gap-y-2 grid-cols-2 items-center">
          <div className="px-5">
            <img className="rounded" src="/images/project_context_2.jpg" />
          </div>
          <div>
            <div>
              山口県には自然がいっぱい！<br />
              豊かな自然に囲まれながら、昔楽しんだ虫取り<br />
              よし、子どもと一緒に虫取りに行こう！<br />
              …って、どこでできるんだっけ？<br />
            </div>
            <div className="mt-4">
              激アツ！昆虫マップは、虫取りができるスポットが見えるアプリです。<br />
              昆虫の好きな木と樹木の植生に着目し、「激アツ度」として昆虫がいそうな度合いを表現しています。<br />
              普段何気なく通り過ぎていた公園や神社は、実は虫取りの激アツスポットなのかもしれません！<br />
            </div>
          </div>
        </div>
      </Description>
    </div>
  </>
}

export default ProjectContext

