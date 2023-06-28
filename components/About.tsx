import React from 'react'
import { motion } from 'framer-motion'

type Props = {}

function About({}: Props) {
  return  (
    <motion.div
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    transition={{ duration: 1.5 }}
    className='flex flex-col relative h-auto sm:h-screen text-center sm:text-left
    sm:flex-row max-w-xl md:max-w-7xl px-4 md:px-10 justify-evenly mx-auto items-center'>
      <h3 className='md:absolute top-32 sm:top-24 uppercase tracking-[20px] text-gray-500 text-2xl mt-6 sm:mt-0'>
        About
      </h3>

      <motion.img
      initial={{
        x: -200,
        opacity: 0,
      }}
      transition={{
        duration: 1.2,
      }}
      whileInView={{ opacity: 1, x: 0}}
      viewport={{ once: true }}
      src='https://cdn.discordapp.com/attachments/680645066984783881/1122008657836654632/B5623A99-586D-452B-BDB2-DF4C196200BD_1_105_c.jpeg'
      className='mt-10 sm:mt-0 mb-4 sm:mb-0 flex-shrink-0 w-48 h-48 rounded-full object-cover sm:rounded-lg sm:w-64 sm:h-96 lg:w-[400px] lg:h-[500px]'
     />

     <div className='mt-10 sm:mt-0 space-y-6 px-0 sm:px-10'>
      <h4 className='text-3xl md:text-4xl font-semibold'>My <span className='underline decoration-[#7DE2D1]/50'>Journey</span> So Far</h4>
      <p>Hi! I'm Diogo Ramos 🐋, a Toronto-based Full-Stack Web Developer with a computer science background and 5 years of experience. I graduated from Lighthouse Labs' Full Stack Web Development Bootcamp and the Robotics program at Western Technical Commercial School. I'm proficient in various languages like TypeScript, JavaScript, Arduino, Java, Ruby, Python, and technologies such as HTML, CSS, PHP, React, Node.js, Express, Vite, Next.js, and Tailwind CSS. I'm skilled in Unit Testing using Jest, Mocha, Cypress, and Database Management with PostgreSQL, Ruby-on-Rails, and SQL. I excel in dynamic environments and aim to build user-friendly software. ⭐</p>
     </div>
    </motion.div>
  )
}

export default About