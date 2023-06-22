import React from 'react'
import { Cursor, useTypewriter } from 'react-simple-typewriter'
import BackgroundCircles from './BackgroundCircles';

type Props = {}

export default function Hero({}: Props) {
  const [text, count] = useTypewriter({
    words: [
      "Hi!, My Name's Diogo Ramos",
      "PassionateDeveloper.tsx",
      "Coffee-Is-My-Programming-Fuel",
  ],
  loop: true,
  delaySpeed: 2500,
  });
  return (
    <div className='h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden'>
      <BackgroundCircles />
      <img 
      className='relative rounded-full h-32 w-32 mx-auto object-cover'
      src="https://cdn.discordapp.com/attachments/680645066984783881/1121536405466779750/image.png" 
      alt="" />
      <div>
        <h2 className='text-sm uppercase text-gray-500 pb-2 tracking-[15px]'>Software Engineer</h2>
      <h1 className='text-5xl lg:text-6xl font-semibold px-10'>
      <span className='mr-3'>{text}</span>
      <Cursor cursorColor='#7DE2D1'></Cursor>
    </h1>

    <div>
      <button className='heroButton'>About</button>
      <button className='heroButton'>Experience</button>
      <button className='heroButton'>Skills</button>
      <button className='heroButton'>Projects</button>
    </div>
      </div>
  </div>
  );
  
}
