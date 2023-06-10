import { useFSA } from '@/hooks/useFSA.hooks'
import React from 'react'

type Props = {}

export const StateAutomata = (props: Props) => {
  const { data, error, loading, modThree } = useFSA()
  return (
    <div className='w-full max-w-5xl items-center mb-10'>
      StateAutomata
      Input: 1010
      <button onClick={() => modThree("1010")}>Get Mod 3</button>
      {
        data && (<div> 1010 % 3 = {data?.value} </div>)
      }
      </div>
  )
}
