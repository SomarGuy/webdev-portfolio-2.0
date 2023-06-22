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
      <h1>
      <span>{text}</span>
      <Cursor cursorColor='#7DE2D1'></Cursor>
    </h1>
      </div>
  </div>
  );
  
}
