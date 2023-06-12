import React, { useState } from 'react'
import { useFAContext } from '@/context/context'

type EquationProps = {
  startingState: string;
  input: string;
  endingState: string;
}
const newEquation: EquationProps = {startingState: '', input: '', endingState: ''}
export const FMEquation = () => {
    const { contextFSM, updateContextFSM } = useFAContext()
    const [equation, setEquation] = useState<EquationProps>(newEquation)
    if(!contextFSM?.allStates) return <div></div>
    const createEquation = () => {
      const eq = [equation.startingState, equation.input, equation.endingState]
      updateContextFSM('equation', eq)
    }
    return (
      <div className="grid grid-cols-4 gap-4">
      <div>Starting State</div>
      <div>Input</div>
      <div>Final State State</div>
      <div className=""></div>
      <div>
        {
          Array.from(contextFSM.allStates).map((s) => (
            <div key={`starting-state-rario-${s}`} className="flex items-center" >
              <input id="interest1" type="radio"  name="equationStartingState" className="mr-2" checked={s === equation.startingState} onChange={() => setEquation({...equation, startingState: s})}/>
              <label htmlFor="interest1" className="text-gray-700">{s}</label>
            </div>
          ))
        }
      </div>
      <div>
        {
          Array.from(contextFSM.inputSymbols).map((i) => (
            <div key={`input-rario-${i}`} className="flex items-center" >
              <input id="interest1" type="radio" name="equationInputSymbol" className="mr-2" checked={i === equation.input} onClick={() => setEquation({...equation, input: i})} />
              <label htmlFor="interest1" className="text-gray-700">{i}</label>
            </div>
          ))
        }
      </div>
      <div>
        {
          Array.from(contextFSM.allStates).map((s) => (
            <div key={`ending-state-rario-${s}`} className="flex items-center" >
              <input id="interest1" type="radio" name="equationEndingState" className="mr-2" checked={s === equation.endingState} onClick={() => setEquation({...equation, endingState: s})} />
              <label htmlFor="interest1" className="text-gray-700">{s}</label>
            </div>
          ))
        }
      </div>
      <button onClick={createEquation}>Create Rule</button>
    </div>
    )
}