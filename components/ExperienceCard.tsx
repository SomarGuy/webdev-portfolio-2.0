import React from 'react'
import { motion } from 'framer-motion'

type Props = {}

function ExperienceCard({}: Props) {
  return (
    <article className='flex flex-col rounded-lg items-center space-y-4 flex-shrink-0 w-full
    md:w-[450px] xl:w-[600px] snap-center bg-[#292929] p-4 hover:opacity-100
    opacity-40 cursor-pointer transition-opacity duration-200 overflow-hidden'>
      <motion.img
      initial={{
        y: -100,
        opacity: 0,
      }}
      transition={{ duration: 1.2 }}
      whileInView={{ opacity: 1, y: 0}}
      viewport={{ once: true }}
      className='w-24 h-24 rounded-full xl:w-[100px] xl:h-[100px] object-cover
      object-center' 
      src="https://img.freepik.com/free-vector/freelancer-flexible-remote-work-locations-isometric-flowchart-with-shared-office-writing-home-outdoor-with-laptop-vector-illustration_1284-30324.jpg?w=2000" 
      alt="" 
    />

    <div className='px-0 md:px-4'>
      <h4 className='text-3xl font-light'>Full-Stack Web Developer</h4>
      <p className='font-bold text-xl mt-1'>Self Employed</p>
      <div className='flex space-x-2 my-2'>
        <img 
        className='h-8 w-8 rounded-full'
        src="https://res.cloudinary.com/crunchbase-production/image/upload/c_lpad,f_auto,q_auto:eco,dpr_1/erkxwhl1gd48xfhe2yld" 
        alt="" />
        <img 
        className='h-8 w-8 rounded-full'
        src="https://w7.pngwing.com/pngs/452/24/png-transparent-js-logo-node-logos-and-brands-icon.png" 
        alt="" />
        <img 
        className='h-8 w-8 rounded-full'
        src="https://cdn.iconscout.com/icon/free/png-256/free-react-1-282599.png?f=webp" 
        alt="" />
        <img 
        className='h-8 w-8 rounded-full'
        src="https://w7.pngwing.com/pngs/925/447/png-transparent-express-js-node-js-javascript-mongodb-node-js-text-trademark-logo.png" 
        alt="" />
      </div>
      <p className='uppercase py-3 text-gray-300'>Started September 2017... - Current...</p>

      <ul className='list-disc space-y-2 ml-3 text-lg'>
        <li>Summary points</li>
        <li>Summary points</li>
        <li>Summary points</li>
        <li>Summary points</li>
        <li>Summary points</li>
      </ul>
    </div>
    </article>
  )
}

export default ExperienceCard

