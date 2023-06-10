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
      className={`flex min-h-screen flex-col items-center p-24 ${inter.className}`}
    >
      <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
        <div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white pb-2 dark:from-black dark:via-black lg:static lg:h-auto lg:w-auto lg:bg-none">
          <h1 className='text-3xl font-bold'>Finite Automata</h1>
        </div>
      </div>
      <Description />
      <StateAutomata />
      <div className="w-full max-w-5xl mb-32 grid lg:mb-0 lg:grid-cols-3 text-left">
        {FA_DEFINITION.map(({title, body}) => <InfoCard key={`fa-def-${title}`} title={title} body={body}/>)}
       </div>
    </main>
  )
}
