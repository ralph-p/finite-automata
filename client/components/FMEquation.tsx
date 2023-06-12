import React, { useState } from 'react'
import { useFAContext } from '@/context/context'

type EquationProps = {
  startingState: string;
  input: string;
  endingState: string;
}

export const FMEquation = () => {
    const { contextFSM, updateContextFSM } = useFAContext()
    if(!contextFSM?.allStates) return <div></div>
    const [equation, setEquation] = useState<EquationProps>({startingState: '', input: '', endingState: ''})
    
    return ( 
      <div className="grid grid-cols-4 gap-4">
      <div>Starting State</div>
      <div>Input</div>
      <div>Final State State</div>
      <div className=""></div>
      <div>
        {
          Array.from(contextFSM.allStates).map((s) => (
            <div className="flex items-center" >
              <input id="interest1" type="radio"  name="equationStartingState" className="mr-2" checked={s === equation.startingState} onClick={() => setEquation({...equation, startingState: s})}/>
              <label htmlFor="interest1" className="text-gray-700">{s}</label>
            </div>
          ))
        }
      </div>
      <div>
        {
          Array.from(contextFSM.inputSymbols).map((i) => (
            <div className="flex items-center" >
              <input id="interest1" type="radio" name="equationInputSymbol" className="mr-2" checked={i === equation.input} onClick={() => setEquation({...equation, input: i})} />
              <label htmlFor="interest1" className="text-gray-700">{i}</label>
            </div>
          ))
        }
      </div>
      <div>
        {
          Array.from(contextFSM.allStates).map((s) => (
            <div className="flex items-center" >
              <input id="interest1" type="radio" name="equationEndingState" className="mr-2" checked={s === equation.endingState} onClick={() => setEquation({...equation, endingState: s})} />
              <label htmlFor="interest1" className="text-gray-700">{s}</label>
            </div>
          ))
        }
      </div>
      <button>Create Rule</button>
    </div>
    )
}