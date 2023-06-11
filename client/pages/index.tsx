import Image from 'next/image'
import { Inter } from 'next/font/google'
import { InfoCard } from '@/components/InfoCard'
import { FA_DEFINITION } from '@/constants/const'
import { useEffect } from 'react'
import { StateAutomata } from '@/components/StateAutomata'
import { Description } from '@/components/Description'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  
  return (
    <main
      className={`flex min-h-screen flex-col items-center px-10 pt-20 ${inter.className}`}
    >
      <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
        <div id="sticky-banner" className="fixed top-0 left-0 z-50 flex justify-between w-full p-4 border-b border-gray-200 bg-gray-50 dark:bg-gray-700 dark:border-gray-600">
          <h1 className='text-3xl font-bold'>Finite Automata</h1>
          <div className='flex flex-col'>
            <p>Created by Ralph Pereira</p>
            <p><a href='https://github.com/ralph-p/finite-automata' target={'_blank'}>Visit GitHub </a></p>
          </div>
        </div>
      </div>
      <StateAutomata />
      <Description />
      <div className="w-full max-w-5xl mb-32 grid lg:mb-0 lg:grid-cols-3 text-left">
        {FA_DEFINITION.map(({title, body}) => <InfoCard key={`fa-def-${title}`} title={title} body={body}/>)}
       </div>
    </main>
  )
}
