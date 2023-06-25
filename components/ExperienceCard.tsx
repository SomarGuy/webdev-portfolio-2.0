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

    <div className='px-0 md:px-10'>
      <h4 className='text-4xl font-light'>Full-Stack Web Developer</h4>
      <p className='font-bold text-2xl mt-1'>Freelance</p>
      <div className='flex space-x-2 my-2'>
        <img className='h-10 w-10 rounded-full' src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/JavaScript-logo.png/800px-JavaScript-logo.png" alt="" />
        {/* Tech used */}
        {/* Tech used */}
        {/* Tech used */}
        {/* Tech used */}
        {/* Tech used */}
        {/* Tech used */}
        {/* Tech used */}
      </div>
      <p>Started work... - Ended...</p>

      <ul className='list-disc space-y-4 ml-5 text-lg'>
        <li>Summary points</li>
        <li>Summary points</li>
        <li>Summary points</li>
        <li>Summary points</li>
        <li>Summary points</li>
      </ul>
    </div>
  </article>
}

export default ExperienceCard