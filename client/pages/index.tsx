import Image from 'next/image'
import { Inter } from 'next/font/google'
import { InfoCard } from '@/components/InfoCard'
import { FA_DEFINITION } from '@/constants/const'
import { useEffect } from 'react'
import { StateAutomata } from '@/components/StateAutomata'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  // useEffect(() => {
  //   fetch('/api/fsm?')
  // }, [])
  
  return (
    <main
      className={`flex min-h-screen flex-col items-center p-24 ${inter.className}`}
    >
      <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
        <div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white pb-2 dark:from-black dark:via-black lg:static lg:h-auto lg:w-auto lg:bg-none">
          <h1 className='text-3xl font-bold'>Finite Automata</h1>
        </div>
      </div>
      <StateAutomata />
      <div className="w-full max-w-5xl items-center">
        <p>
        Finite Automata(FA) is the simplest machine to recognize patterns. The finite automata or finite state machine is an abstract machine that has five elements or tuples. 
        It has a set of states and rules for moving from one state to another but it depends upon the applied input symbol. 
        Basically, it is an abstract model of a digital computer.
        <br />
        Formal specification of machine is 
        <code> (Q, Σ, q, F, δ) </code>
        <br />
        In this example we are calculating Mod 3 for a string of binary inputs. Based on the notation from the definition, our modulo three FSM would be configured as follows:
        </p>
        <br />
        <ul className='list-disc pl-6 py-1'>
          <li> Q = (S0, S1, S2)</li>
          <li>Σ = (0, 1)</li>
          <li>q0 = S0</li>
          <li>F = (S0, S1, S2)</li>
          <li>δ(S0,0) = S0; δ(S0,1) = S1; δ(S1,0) = S2; δ(S1,1) = S0; δ(S2,0) = S1; δ(S2,1) = S2</li>
        </ul>
      </div>
      <div className="w-full max-w-5xl mb-32 grid lg:mb-0 lg:grid-cols-3 text-left">
        {FA_DEFINITION.map(({title, body}) => <InfoCard key={`fa-def-${title}`} title={title} body={body}/>)}
       </div>
    </main>
  )
}
