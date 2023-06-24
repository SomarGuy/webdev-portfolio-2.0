import React from 'react'
import { motion } from 'framer-motion'

type Props = {}

function About({}: Props) {
  return (
    <div className='flex flex-col relative h-screen text-center md:text-left
    md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center'>
      <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl'>
        About
      </h3>

      <motion.img
      initial={{
        x: -200,
      }}
      whileInView={{
        x: 0
      }}
      src='https://cdn.discordapp.com/attachments/680645066984783881/1122008657836654632/B5623A99-586D-452B-BDB2-DF4C196200BD_1_105_c.jpeg'
      />
    </div>
  )
}

export default About