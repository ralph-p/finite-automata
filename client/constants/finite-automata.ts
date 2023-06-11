import { FAProps } from "./types"

export const buildFAMap = ( equations: [string, string][], matchingValues: string[]) => {
  // Transition map which is used to store key: value objects for each state in the equations
  // since each key in a map has to be unique and has O(1) lookup, we can easily use this to find the connected state trees given a starting state 
  
  const transitions = new Map(); 

  // Build transition function based on equations and matching values
  for (let i = 0; i < equations.length; i++) {
    // the state the equation starts in
    const fromState = equations[i][0];
    // the input for the equation
    const inputSymbol = equations[i][1];
    // the state the FA moves to once it processes the input
    const toState = matchingValues[i];
    // if there is no starting state in the transitions map, insert a key of the starting state and a value of an empty object
    if (!transitions.get(fromState)) {
      transitions.set(fromState, {})
    }
    // in each state in the transitions map the output is set for a given input
    transitions.get(fromState)[inputSymbol] = toState;
  }
  return transitions
}

export const runFiniteAutomaton = ({ allStates, inputSymbols, initialState, finalStates, equations, matchingValues, inputString }: FAProps) => {
  // check that the final accepting states are in the states set
  finalStates.forEach((s) => {
    if (!allStates.has(s)) throw new Error(`Invalid final state: ${s}`);
  })
  const transitions = buildFAMap(equations, matchingValues)

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

export const getModThreeObject = (inputString: string): FAProps => {
// build the FSM for Mod 3
    // create sets for states, input symbols, and final accepected states
    let allStates: Set<string> = new Set()
    let inputSymbols: Set<string> = new Set()
    let finalStates: Set<string> = new Set()
    // set the starting state
    let initialState: string = "S0"
    // add the states and inputs to the sets
    allStates.add("S0").add("S1").add("S2")
    inputSymbols.add("0").add("1")
    finalStates.add("S0").add("S1").add("S2")
    // build the prop object
    return {
      allStates, 
      inputSymbols, 
      initialState,
      finalStates, 
      equations: [["S0", "0"], ["S0", "1"], ["S1", "0"], ["S1", "1"], ["S2", "0"], ["S2", "1"]], 
      matchingValues: ["S0", "S1", "S2", "S0", "S1", "S2"], 
      inputString
    }
}