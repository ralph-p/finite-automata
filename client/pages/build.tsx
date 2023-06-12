import Image from 'next/image'
import { Inter } from 'next/font/google'
import { useEffect, useRef, useState } from 'react'
import { FAProps } from '@/constants/types'
import { getEmptyFSMObject } from '@/constants/finite-automata'
import { useFAContext } from '@/context/context'
import { Input } from '@/components/Input'
import { FSMVisualizer } from '@/components/FSMVisualizer'

const inter = Inter({ subsets: ['latin'] })

export default function Build() {
  const { data, contextFSM, updateContextFSM } = useFAContext()
  const stateRef = useRef<HTMLInputElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)
  console.log(contextFSM);
  const addNewState = () => {
    if (stateRef?.current?.value) {
      // remove commas and white spaces
      updateContextFSM('allStates', stateRef.current.value as string)
      stateRef.current.value = ''
    }
  }
  const addNewInput = () => {
    if (inputRef?.current?.value) {
      // remove commas and white spaces
      updateContextFSM('inputSymbols', inputRef.current.value[0] as string)
      inputRef.current.value = ''
    }
  }
  const setStartingState = (stateName: string) => {
    updateContextFSM('initialState', stateName)
  }
  const setFinalStates = (stateName: string) => {
    updateContextFSM('finalStates', stateName)
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
        {/* Move to it's own component */}
        {contextFSM?.allStates && (
          <div className="flex space-x-4 justify-between">

            <div className="mb-4">
              <p className="text-gray-700 text-sm font-bold mb-2">Starting State</p>
              {
                Array.from(contextFSM.allStates).map((s) => (
                  <div className="flex items-center" >
                    <input id="interest1" type="radio" checked={s === contextFSM.initialState} name="startingState" className="mr-2" onClick={() => setStartingState(s)} />
                    <label htmlFor="interest1" className="text-gray-700">{s}</label>
                  </div>
                ))
              }
            </div>
            <div className="mb-4">

              <p className="text-gray-700 text-sm font-bold mb-2">Final States</p>
              {
                Array.from(contextFSM.allStates).map((s) => (
                  <div className="flex items-center" >
                    <input id="interest1" type="checkbox" checked={contextFSM.finalStates.has(s)} name="finalStates" className="mr-2" onClick={() => setFinalStates(s)} />
                    <label htmlFor="interest1" className="text-gray-700">{s}</label>
                  </div>
                ))
              }
            </div>
          </div>)}
        {/* Move to it's own component */}
        {
          contextFSM?.allStates && (
            <div className="grid grid-cols-4 gap-4">
              <div>Starting State</div>
              <div>Input</div>
              <div>Final State State</div>
              <div className=""></div>
              <div>
                {
                  Array.from(contextFSM.allStates).map((s) => (
                    <div className="flex items-center" >
                      <input id="interest1" type="radio" name="equationStartingState" className="mr-2" />
                      <label htmlFor="interest1" className="text-gray-700">{s}</label>
                    </div>
                  ))
                }
              </div>
              <div>
                {
                  Array.from(contextFSM.inputSymbols).map((i) => (
                    <div className="flex items-center" >
                      <input id="interest1" type="radio" name="equationInputSymbol" className="mr-2"  />
                      <label htmlFor="interest1" className="text-gray-700">{i}</label>
                    </div>
                  ))
                }
              </div>
              <div>
                {
                  Array.from(contextFSM.allStates).map((s) => (
                    <div className="flex items-center" >
                      <input id="interest1" type="radio" name="equationEndingState" className="mr-2" />
                      <label htmlFor="interest1" className="text-gray-700">{s}</label>
                    </div>
                  ))
                }
              </div>
              <button>Create Rule</button>
            </div>
          )
        }
      </div>
      <FSMVisualizer states={Array.from(contextFSM?.allStates || [])} currentState={contextFSM?.initialState || ""} finalStates={Array.from(contextFSM?.finalStates || [])} />
    </main>
  )
}
