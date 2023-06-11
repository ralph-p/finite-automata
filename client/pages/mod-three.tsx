import Image from 'next/image'
import { Inter } from 'next/font/google'
import React, {useState} from 'react';
import { ModThreeInput } from '@/components/ModThreeInput'
import { FSMVisualizer } from '@/components/FSMVisualizer';
import { useFAContext } from '@/context/context';

const inter = Inter({ subsets: ['latin'] })



export default function ModThree() {
  const {data} = useFAContext()
  const states = ["S0", "S1", "S2"]
  
  return (
    <main
      className={`flex min-h-screen flex-col items-center px-10 pt-20 ${inter.className}`}
    >
      <ModThreeInput />
          <div>
            <code className="">Current State: {data.state || states[0]}</code>
            <FSMVisualizer currentState={data.state || states[0]} states={states}/>

          </div>
    </main>
  )
}
