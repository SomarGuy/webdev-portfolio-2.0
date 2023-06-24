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
        opacity: 0,
      }}
      transition={{
        duration: 1.2,
      }}
      whileInView={{ opacity: 1, x: 0}}
      viewport={{ once: true }}
      src='https://cdn.discordapp.com/attachments/680645066984783881/1122008657836654632/B5623A99-586D-452B-BDB2-DF4C196200BD_1_105_c.jpeg'
      className='-mb-20 md:mb0 flex-shrink-0 w-56 h-56 rounded-full object-cover md:rounded-lg md:w-64 md:h-96 xl:w-[500px] xl:h-[600px]'
     />

     <div className='space-y-10 px-0 md:px-10'>
      <h4 className='text-4xl font-semibold'>My <span className='underline decoration-[#7DE2D1]/50'>Journey</span> So Far</h4>
      <p>Hey! I'm Diogo Ramos 🐋, a Full-Stack Web Developer based in Toronto with a solid foundation in computer science and 5 years of experience in web development. Graduated from Lighthouse Labs' Full Stack Web Development Bootcamp and Western Technical Commercial School's Specialist High Skills Major (SHSM) program in Robotics, I've acquired an in-depth knowledge and hands-on experience with modern web technologies. My technical expertise ranges from programming languages such as TypeScript, JavaScript, Arduino, Java, Ruby, Python, to web development technologies like HTML, CSS, PHP, React, Node.js, Express, Vite, Next.js, and Tailwind CSS. I also have experience with Unit Testing using tools like Jest, Mocha, and Cypress, and Database Management with PostgreSQL, Ruby-on-Rails, and SQL. Always eager to leverage my technical expertise and problem-solving abilities to contribute to impactful missions. I thrive in fast-paced, rapidly changing environments and believe in building software that offers great user experience! ⭐</p>
     </div>
    </div>
  )
}

export default About