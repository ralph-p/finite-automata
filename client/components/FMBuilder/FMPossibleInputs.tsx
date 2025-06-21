import React, { useRef, useState } from 'react'
import { useFAContext } from '@/context/context'
import {  getAllInputs } from '@/constants'
import { Input } from '../Input'
type Props = {}

export const FMPossibleInputs = (props: Props) => {
  const { contextFSM, getCustomFA } = useFAContext()
  const [inputStrings, setInputStrings] = useState<string[]>([])
  const lengthRef = useRef<HTMLInputElement>(null)
  if(!contextFSM || !contextFSM?.inputSymbols) return <div></div>
  let inputs = getAllInputs(Array.from(contextFSM.inputSymbols), contextFSM?.equations.length)
  const getPossibleInputs = () => {
    const stringLength = parseInt(lengthRef?.current?.value as string)
    
    let newInputStrings: string[] = []
    for (let index = 1; index <= stringLength; index++) {
      let inputs = getAllInputs(Array.from(contextFSM.inputSymbols),index)
      newInputStrings = [...newInputStrings, ...inputs]
    }
    setInputStrings([...newInputStrings])
  }
  const inputStringOnClick = (input: string) => {
    const newFSM = {...contextFSM, inputString: input}
    getCustomFA(newFSM)
  }
  return (
    <div className='flex flex-row space-x-1 flex-wrap'>
      <Input inputLabel='Length of input string' inputRef={lengthRef} inputPlaceholder="3"/>
      <button className='font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 bg-gray-800 text-white border-gray-600 hover:bg-gray-700 hover:border-gray-600 focus:ring-gray-700' onClick={getPossibleInputs}>Get Possible Inputs</button>
      {
        inputStrings.map((i) => <div className="flex p-1" onClick={() => inputStringOnClick(i)}>{i}</div>)
      }
    </div>
  )
}