import React from 'react'
import { PhoneIcon, MapPinIcon, EnvelopeIcon } from "@heroicons/react/24/solid"

type Props = {}

function ContactMe({}: Props) {
  return (
    <div className='h-screen flex relative flex-col text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center'>
      <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl'>
        Contact
      </h3>

      <div className='flex flex-col space-y-10'>
        <h4 className='text-4xl font-semibold text-center'>
          I have got just what you need.{" "}
          <span className='decoration-[#7DE2D1]/50 underline'>Let's Talk.</span>
        </h4>

        <div>
          <div className='flex items-center space-x-5 justify-center'>
          <PhoneIcon className='text-[#7DE2D1] h-7 w-7 animate-pulse' />
          <p>+6479995995</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ContactMe