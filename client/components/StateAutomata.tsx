import { useFSA } from '@/hooks/useFSA.hooks'
import React, { Suspense, useState } from 'react'
import { Input } from './Input'
import { Loading } from './Loading'

export const StateAutomata = () => {
  const { data, modThree } = useFSA()
  const [input, setInput] = useState<string>('')
  const onInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    modThree(event?.target?.value)
    setInput(event?.target?.value)
  }
  return (
    <div className='w-full max-w-5xl items-center mb-10 space-y-3'>
      <h1 className='text-2xl font-bold'>Calculate Mod-Three of a binary input Using Finite Automation</h1>
      <Input value={input} inputLabel="Enter Mod 3 Input here" onChange={onInputChange} />
      <Suspense fallback={<Loading />}>
        <div>
          {
            data.error ? <h1 className="text-lg font-bold text-rose-600 p-2">{data?.error}</h1> : (
              data?.value && data?.state ? (
                <div className='flex flex-row'>
                  <div
                    className="group px-5 py-4"
                  >
                    <h2 className={`mb-3 text-xl font-semibold`}>
                    Calculated using the FSM
                    </h2>
                    <div className={`m-0 max-w-[30ch] text-lg`}>
                    {input} % 3 = {data?.value} on Ended on State {data?.state}
                    </div>
                  </div>
                  <div
                    className="group px-5 py-4"
                  >
                    <h2 className={`mb-3 text-xl font-semibold`}>
                    Calculated by parsing the input
                    </h2>
                    <div className={`m-0 max-w-[30ch] text-lg`}>
                    {parseInt(input, 2)} % 3 = {parseInt(input, 2) % 3}
                    </div>
                  </div>
                </div>
              ) : <div> Begin typing to calculate the % 3 of your input. </div>
            )
          }


        </div>
      </Suspense>
    </div>
  )
}
