import React from 'react'
import GekiatsuMapLink from '../../components/landing/GekiatsuMapLink'
import Introduction from '../../components/landing/Introduction'
import Logo from '../../components/atoms/Logo'
import Usage from '../../components/landing/Usage'
import OpenDataReference from '../../components/landing/OpenDataReference'
import ProjectContext from '../../components/landing/ProjectContext'
import TreeDictionary from '../../components/landing/TreeDictionary'
import ReadyToGoMapLink from '../../components/landing/ReadyToGoLink'

/**
 * ランディングページ
 */
export default function Landing() {
  return (
    <div className="container mx-auto">
      <Logo />
      <Introduction />
      <GekiatsuMapLink />
      <Usage />
      <ReadyToGoMapLink />
      <TreeDictionary />
      <ProjectContext />
      <OpenDataReference />
    </div>
  )
}
