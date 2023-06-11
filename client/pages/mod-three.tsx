import Image from 'next/image'
import { Inter } from 'next/font/google'
import React, {useState} from 'react';
import { ModThreeInput } from '@/components/ModThreeInput'
import { FSMVisualizer } from '@/components/FSMVisualizer';

const inter = Inter({ subsets: ['latin'] })



export default function ModThree() {
  const [current, setCurrent] = useState(0)
  const states = ["S0", "S1", "S2"]
  return (
    <main
      className={`flex min-h-screen flex-col items-center px-10 pt-20 ${inter.className}`}
    >
      <ModThreeInput />
      <button onClick={() => setCurrent( current + 1)}>+</button>
      {states[current]}
      <FSMVisualizer currentState={states[current]} states={states}/>
    </main>
  )
}
