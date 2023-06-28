import React from 'react'
import { motion } from 'framer-motion'

type Props = {
  directionLeft?: boolean;
}

function Skill({ directionLeft }: Props) {
  return (
    <div className='group relative flex cursor-pointer'>
      <motion.img
      initial={{
        x: directionLeft ? -200 : 200,
        opacity: 0,
      }}
      transition={{ duration: 1 }}
      whileInView={{ opacity: 1, x: 0}}
      src='https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/2048px-HTML5_logo_and_wordmark.svg.png'
      className='rounded-full border border-gray-500 object-cover w-24 h-24 xl:w-32
      xl:h-32 filter group-hover:grayscale'
      />
    </div>
  )
}

export default Skill