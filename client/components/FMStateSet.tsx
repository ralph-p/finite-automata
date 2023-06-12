import { useFAContext } from '@/context/context'
import React from 'react'


export const FMStateSet = () => {
  const { contextFSM, updateContextFSM } = useFAContext()
  const setStartingState = (stateName: string) => {
    updateContextFSM('initialState', stateName)
  }
  const setFinalStates = (stateName: string) => {
    updateContextFSM('finalStates', stateName)
  }
  if(!contextFSM?.allStates) return <div></div>
  return (
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
    </div>
  )
}