import React from 'react'
import { SocialIcon } from 'react-social-icons'

type Props = {}

export default function Header({}: Props) {
  return (
    <header>
      <div>
        {/* Social Icons */}
        <SocialIcon url="https://github.com/SomarGuy" />
      </div>
    </header>
  )
}