import { useFSA } from '@/hooks/useFSA.hooks'
import React, { Suspense, useState } from 'react'
import { InfoCard } from './InfoCard'
import { Input } from './Input'

type Props = {}

export const StateAutomata = (props: Props) => {
  const { data, loading, modThree } = useFSA()
  const [input, setInput] = useState<string>('')
  const onInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    modThree(event?.target?.value)
    setInput(event?.target?.value)
  }
  return (
    <div className='w-full max-w-5xl items-center mb-10 space-y-3'>
      <h1 className='text-2xl font-bold'>Calculate Mod-Three of a binary input Using Finite Automation</h1>
      <Input value={input} inputLabel="Enter Mod 3 Input here" onChange={onInputChange} />
      <Suspense fallback={<div>Loading...</div>}>

        <div>
          {
            data.error ? <div> <h1 className="text-lg font-bold text-rose-600">{data?.error}</h1> </div> : (
              data?.value && data?.state ? (
              <div className='flex flex-row'>
                <InfoCard title='Calculated using the FSM' body={` ${input} % 3 = ${data?.value} on Ended on State ${data?.state}`} />
                <InfoCard title='Calculated by parsing the input' body={` ${parseInt(input, 2)} % 3 = ${parseInt(input, 2) % 3}`} />
              </div>
              ) : <div> Begin typing to calculate the % 3 of your input. </div>
            )
          }


        </div>
      </Suspense>
    </div>
  )
}
