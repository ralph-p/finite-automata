// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { getErrorMessage, reqToFSMProps } from '@/constants/utils';
import type { NextApiRequest, NextApiResponse } from 'next'

export type FSMResponseData = {
  state?: string;
  value?: string;
  error?: string;
}

const runFiniteAutomaton = (states: Set<string>, inputSymbols: Set<string>, initialState: string, finalStates: Set<string>, equations: [string, string][], matchingValues: string[], inputString: string) => {
  // check that the final accepting states are in the states set
  finalStates.forEach((s) => {
    if(!states.has(s)) throw new Error(`Invalid final state: ${s}`);
  })
  const transitions = new Map(); // Transition function
  
  // Build transition function based on equations and matching values
  for (let i = 0; i < equations.length; i++) {
    const fromState = equations[i][0];
    const inputSymbol = equations[i][1];
    const toState = matchingValues[i];
    
    if (!transitions.get(fromState)) {
      transitions.set(fromState, {})
    }
    transitions.get(fromState)[inputSymbol] = toState;
  }
  
  // Start with initial state
  let currentState = initialState; 
  
  for (let i = 0; i < inputString.length; i++) {
    const input = inputString[i];
    
    // Check if input symbol is valid in the input map provided 
    if (!inputSymbols.has(input)) {
      throw new Error(`Invalid input symbol: ${input}`);
    }
    
    // Check if transition exists for current state and input symbol
    if (!transitions.get(currentState) || !transitions.get(currentState)[input]) {
      throw new Error(`No transition found for state ${currentState} and input symbol ${input}`);
    }
    // Update current state to be the new state based on transition mapping
    currentState = transitions.get(currentState)[input]; 
  }
  
  // Once the input string is complete we check that the current state is in the final state array
  if (finalStates.has(currentState)) {
    // if it is we can return the final state
    return currentState;
  } else {
    throw new Error(`Final state not reached. Current state: ${currentState}`);
  }
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<FSMResponseData>
) {
  const faProps = reqToFSMProps(req)
  
  
  try {
    const output = runFiniteAutomaton(faProps.allStates, faProps.inputSymbols, faProps.initialState, faProps.finalStates, faProps.equations, faProps.matchingValues, faProps.inputString)
    // need to do a `toString` because a 0 triggers a `false` when trying to render
    const modval = Array.from(faProps.finalStates).indexOf(output).toString();
    const test = parseInt(faProps.inputString, 2) % 3
    
    res.status(200).json({ state: output, value: modval })
    
  } catch (error) {
    res.status(400).send({error: getErrorMessage(error)})
  }
}
