import React from 'react'
import GekiatsuMapLink from '../../components/landing/GekiatsuMapLink'
import Introduction from '../../components/landing/Introduction'
import Logo from '../../components/atoms/Logo'
import Usage from '../../components/landing/Usage'
import OpenDataReference from '../../components/landing/OpenDataReference'

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
      <OpenDataReference />
    </div>
  )
}
