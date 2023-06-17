import React from 'react'
import { SocialIcon } from 'react-social-icons'

type Props = {}

export default function Header({}: Props) {
  return (
    <header>
      <div className='flex flex-row items-center'>
        {/* Social Icons */}
        <SocialIcon 
        url="https://github.com/SomarGuy" 
        fgColor="gray"
        bgColor="transparent"
        />
        <SocialIcon 
        url="https://www.linkedin.com/in/diogomiguelramos/" 
        fgColor="gray"
        bgColor="transparent"
        />
      </div>

      <div>
        <SocialIcon
        className='cursor-pointer'
        network='email'
        fgColor='gray'
        bgColor='transparent'
        />
      </div>
    </header>
  )
}