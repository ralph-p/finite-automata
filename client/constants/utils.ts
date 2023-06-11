import type { NextApiRequest } from 'next'
import { FAProps } from "./types"

export const getErrorMessage = (error: unknown) => {
  if (error instanceof Error) return error.message
  return String(error)
}

// build a payload string using the finite automata object
export const finiteAutomatioObjToPayload = (fmObject: FAProps) => {
  return new URLSearchParams({
    states: Array.from(fmObject.allStates).toString(), 
    inputSymbols: Array.from(fmObject.inputSymbols).toString(),
    initialState: fmObject.initialState,
    finalStates: Array.from(fmObject.finalStates).toString(),
    equations: Array.from(fmObject.equations).toString(),
    matchingValues: Array.from(fmObject.matchingValues).toString(),
    inputString: fmObject.inputString,
    
  })
}
// util would exist on server to get the query params from the endpoint and convert it to an object that can be used in the `runFiniteAutomaton` function
export const reqToFiniteAutomationDTO = (req: NextApiRequest) => {
  let initalProps: FAProps = {
    allStates: new Set(),
    inputSymbols: new Set(),
    initialState: '',
    finalStates: new Set(),
    equations: [],
    matchingValues: [],
    inputString: ''
  }
  const query = req?.query || null
  if (query?.states && typeof query?.states === 'string') {
    const stateArray = query.states.split(',')
    stateArray.forEach((s) => initalProps.allStates.add(s))
  }
  if (query?.inputSymbols && typeof query?.inputSymbols === 'string') {
    const inputArray = query.inputSymbols.split(',')
    inputArray.forEach((input) => initalProps.inputSymbols.add(input))
  }
  if (query?.initialState && typeof query?.initialState === 'string') {
    initalProps.initialState = query.initialState
  }
  if (query?.finalStates && typeof query?.finalStates === 'string') {
    const inputArray = query.finalStates.split(',')
    inputArray.forEach((s) => initalProps.finalStates.add(s))
  }
  if (query?.equations && typeof query?.equations === 'string') {
    const inputArray = query.equations.split(',')
    for(var i = 0; i < inputArray.length ; i += 2) {
      initalProps.equations.push([inputArray[i], inputArray[i+1]])
    }
  }
  if (query?.matchingValues && typeof query?.matchingValues === 'string') {
    const inputArray = query.matchingValues.split(',')
    inputArray.forEach((value) => initalProps.matchingValues.push(value))
  }
  if (query?.inputString && typeof query?.inputString === 'string') {
    initalProps.inputString = query.inputString
  }
  return initalProps
}