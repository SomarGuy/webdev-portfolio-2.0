import React from 'react'
import { motion } from 'framer-motion'

type Props = {}

function ExperienceCard({}: Props) {
  return <article>
    <motion.img
    initial={{
      y: -100,
      opacity: 0,
    }} 
    transition={{ duration: 1.2 }}
    whileInView={{ opacity: 1, y: 0}}
    viewport={{ once: true }}
    className='w-32 h-32 rounded-full md:rounded-full xl:w-[200px] xl:h-[200px]
    object-cover object-center'
    src="https://media.licdn.com/dms/image/C4E0BAQH3nUDO57s78A/company-logo_200_200/0/1531936161449?e=1695859200&v=beta&t=N7WHifromNrxOyf5uY96n3ck3ZWyjlk2ndvBV-JgWVU" 
    alt="" />
  </article>
}

export default ExperienceCard