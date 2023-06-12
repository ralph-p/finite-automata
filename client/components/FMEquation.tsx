import React, { useState } from 'react'
import { useFAContext } from '@/context/context'

type EquationProps = {
  startingState: string;
  input: string;
  endingState: string;
}
const newEquation: EquationProps = { startingState: '', input: '', endingState: '' }
export const FMEquation = () => {
  const { contextFSM, updateContextFSM } = useFAContext()
  const [equation, setEquation] = useState<EquationProps>(newEquation)
  if (!contextFSM?.allStates) return <div></div>
  const createEquation = () => {
    updateContextFSM('equation', [equation.startingState, equation.input, equation.endingState])
  }
  return (
    <div className='flex flex-col'>
      <div className="grid grid-cols-4 gap-4">
        <div>Starting State</div>
        <div>Input</div>
        <div>Final State State</div>
        <div className=""></div>
        <div>
          {
            Array.from(contextFSM.allStates).map((s) => (
              <div key={`starting-state-rario-${s}`} className="flex items-center" >
                <input id={`starting-${s}-state-equation`} type="radio" name="equationStartingState" className="mr-2" checked={s === equation.startingState} onChange={() => setEquation({ ...equation, startingState: s })} />
                <label htmlFor={`starting-${s}-state-equation`} className="text-gray-700">{s}</label>
              </div>
            ))
          }
        </div>
        <div>
          {
            Array.from(contextFSM.inputSymbols).map((i) => (
              <div key={`input-rario-${i}`} className="flex items-center" >
                <input id={`starting-${i}-input-equation`} type="radio" name="equationInputSymbol" className="mr-2" checked={i === equation.input} onClick={() => setEquation({ ...equation, input: i })} />
                <label htmlFor={`starting-${i}-input-equation`} className="text-gray-700">{i}</label>
              </div>
            ))
          }
        </div>
        <div>
          {
            Array.from(contextFSM.allStates).map((s) => (
              <div key={`ending-state-rario-${s}`} className="flex items-center" >
                <input id={`final-${s}-state-equation`} type="radio" name="equationEndingState" className="mr-2" checked={s === equation.endingState} onClick={() => setEquation({ ...equation, endingState: s })} />
                <label htmlFor={`final-${s}-state-equation`} className="text-gray-700">{s}</label>
              </div>
            ))
          }
        </div>
        <button className='text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800' onClick={createEquation}>Create Rule</button>
      </div>
      {
        contextFSM?.equations.length && contextFSM?.matchingValues.length ? (
          <div className='flex flex-row space-x-4 flex-wrap max-w-lg'>
            {
              contextFSM?.equations.map((equation, index) => {
                return (
                  <code key={`equation-${index}`}>{`δ(${equation[0]}, ${equation[1]}) = ${contextFSM.matchingValues[index]};`}</code>
                )
              })
            }
          </div>
        ) : null
      }
    </div>
  )
}