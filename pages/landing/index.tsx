import React from 'react'
import GekiatsuMapLink from '../../components/landing/GekiatsuMapLink'
import GekiatsuSlide from '../../components/landing/GekiatsuSlide'
import Introduction from '../../components/landing/Introduction'
import Logo from '../../components/landing/Logo'
import Usage from '../../components/landing/Usage'

/**
 * ランディングページ
 */
export default function Landing() {
  return (
    <div className="mt-5 text-center">
      <Logo />
      <Introduction />
      <Usage />
      <GekiatsuMapLink />
      <GekiatsuSlide />
    </div>
  )
}
