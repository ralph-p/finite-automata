import { Inter } from 'next/font/google'
import { useRef } from 'react'
import { useFAContext } from '@/context/context'
import { Input } from '@/components/Input'
import { FSMVisualizer, FMStateSet, FMEquation, FMShortestPath, FMPossibleInputs } from '@/components/FMBuilder'
import { getAllInputs } from '@/constants'
const inter = Inter({ subsets: ['latin'] })

export default function Build() {
  const { data, contextFSM, updateContextFSM, getCustomFA } = useFAContext()
  const stateRef = useRef<HTMLInputElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)
  const inputStringRef = useRef<HTMLInputElement>(null)
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
  const ShowAllInputs = () => {
    if(!contextFSM || !contextFSM?.inputSymbols) return <div></div>
    let inputs = getAllInputs(Array.from(contextFSM.inputSymbols), contextFSM?.equations.length)
    return (
      <div className='flex flex-row space-x-1 flex-wrap'>
        {
          inputs.map((i) => <p>{i}, </p>)
        }
      </div>
    )
  }
  return (
    <main
      className={`flex min-h-screen flex-col items-center px-10 pt-20 ${inter.className}`}
    >
      <div className='flex flex-col space-y-2' data-testid="build-container">

        <Input inputRef={stateRef} inputLabel="Enter a new State (one word, no commas)" inputPlaceholder='S1' />
        <button onClick={addNewState} className='font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 bg-gray-800 text-white border-gray-600 hover:bg-gray-700 hover:border-gray-600 focus:ring-gray-700'>Add State</button>
        <Input inputRef={inputRef} inputLabel="Enter a new Input (one letter, no commas)" inputPlaceholder='0' />
        <button onClick={addNewInput} className='font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 bg-gray-800 text-white border-gray-600 hover:bg-gray-700 hover:border-gray-600 focus:ring-gray-700'>Add Input</button>
        <FMStateSet />
        <FMEquation />
        <FMPossibleInputs />
        <ShowAllInputs />
        {
          contextFSM?.equations.length && contextFSM?.matchingValues.length ? (
            <div className='flex flex-row space-x-2'>

              <Input inputRef={inputStringRef} inputLabel="Enter an input string to test your FSM" inputPlaceholder='010' onChange={onInputChange} />
              <button className='font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 bg-gray-800 text-white border-gray-600 hover:bg-gray-700 hover:border-gray-600 focus:ring-gray-700' onClick={() => getCustomFA(contextFSM)}>Run FSM</button>
            </div>
          ) : null
        }
        {
          data?.error ? <h1 className="text-lg font-bold text-rose-600 p-2">{data.error}</h1> : (data?.state && (<div>Final State: {data.state}, Final Value: {data.value}</div>))
        }
      </div>
      <FSMVisualizer states={Array.from(contextFSM?.allStates || [])} currentState={data?.state || contextFSM?.initialState || ""} finalStates={Array.from(contextFSM?.finalStates || [])} />
      <FMShortestPath />

    </main>
  )
}
