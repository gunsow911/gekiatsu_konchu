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
      </Description>
    </div>
  </>
}

export default ProjectContext

