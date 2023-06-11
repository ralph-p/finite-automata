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
    <div className='w-full max-w-5xl items-center mb-10 space-y-3' data-testid="sa-component">
      <h1 className='text-2xl font-bold' data-testid="sa-title">Calculate Mod-Three of a binary input Using Finite Automation</h1>
      {/* <Input value={input} inputLabel="Enter Mod 3 Input here" onChange={onInputChange} /> */}
      <div className='flex max-w-md'>
          <label className='block mb-2 text-sm font-medium text-gray-900 dark:text-white' htmlFor="input-mod-3">Enter Mod 3 Input here</label>
          <input 
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
            type="text" 
            id="input-mod-3"
            placeholder="1010" 
            required 
            value={input}
            onChange={(event) => onInputChange(event)}
        />
      </div>
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
              ) : <div data-testid="no-input"> Begin typing to calculate the % 3 of your input. </div>
            )
          }


        </div>
      </Suspense>
    </div>
  )
}
