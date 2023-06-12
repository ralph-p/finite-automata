import Image from 'next/image'
import { Inter } from 'next/font/google'
import { useEffect, useRef, useState } from 'react'
import { FAProps } from '@/constants/types'
import { getEmptyFSMObject } from '@/constants/finite-automata'
import { useFAContext } from '@/context/context'
import { Input } from '@/components/Input'
import { FSMVisualizer } from '@/components/FSMVisualizer'
import { FMStateSet } from '@/components/FMStateSet'
import { FMEquation } from '@/components/FMEquation'

const inter = Inter({ subsets: ['latin'] })

export default function Build() {
  const { data, contextFSM, updateContextFSM, getCustomFA } = useFAContext()
  const stateRef = useRef<HTMLInputElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)
  const inputStringRef = useRef<HTMLInputElement>(null)
  console.log(contextFSM);

  const addNewState = () => {
    if (stateRef?.current?.value) {
      // remove commas and white spaces
      var newState = stateRef?.current?.value.replace(/[, ]+/g, '').trim();
      updateContextFSM('allStates', newState)
      stateRef.current.value = ''
    }
  }
  const addNewInput = () => {
    if (inputRef?.current?.value) {
      // use the first input as the symbol
      updateContextFSM('inputSymbols', inputRef.current.value[0] as string)
      inputRef.current.value = ''
    }
  }
  const onInputChange = () => {
    updateContextFSM('inputString', inputStringRef?.current?.value as string)
  }
  return (
    <main
      className={`flex min-h-screen flex-col items-center px-10 pt-20 ${inter.className}`}
    >
      <div className='flex flex-col space-y-2'>

        <Input inputRef={stateRef} inputLabel="Enter a new State (one word, no commas)" inputPlaceholder='S1' />
        <button onClick={addNewState} className='font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 bg-gray-800 text-white border-gray-600 hover:bg-gray-700 hover:border-gray-600 focus:ring-gray-700'>Add State</button>
        <Input inputRef={inputRef} inputLabel="Enter a new Input (one letter, no commas)" inputPlaceholder='0' />
        <button onClick={addNewInput} className='font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 bg-gray-800 text-white border-gray-600 hover:bg-gray-700 hover:border-gray-600 focus:ring-gray-700'>Add Input</button>
        <FMStateSet />
        <FMEquation />
        {
          contextFSM?.equations.length && contextFSM?.matchingValues.length ? (
            <div className='flex flex-row space-x-2'>
              <Input inputRef={inputStringRef} inputLabel="Enter an input string to test your FSM" inputPlaceholder='010' onChange={onInputChange} />
              <button className='font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 bg-gray-800 text-white border-gray-600 hover:bg-gray-700 hover:border-gray-600 focus:ring-gray-700' onClick={() => getCustomFA(contextFSM)}>Run FSM</button>
            </div>
          ) : null
        }
        {
         data?.error ? <h1 className="text-lg font-bold text-rose-600 p-2">{data.error}</h1> : ( data?.state && (<div>Final State: {data.state}, Final Value: {data.value}</div>))
        }
      </div>
      <FSMVisualizer states={Array.from(contextFSM?.allStates || [])} currentState={data?.state || contextFSM?.initialState || ""} finalStates={Array.from(contextFSM?.finalStates || [])} />
    </main>
  )
}
