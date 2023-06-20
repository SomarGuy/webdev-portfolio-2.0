import React from 'react'
import { Cursor, useTypewriter } from 'react-simple-typewriter'


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
  return <div>
    <h1>
      <span>{text}</span>
      <Cursor cursorColor='#7DE2D1'></Cursor>
    </h1>
  </div>;
}
