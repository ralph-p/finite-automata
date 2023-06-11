import { FAProps } from "./types"

// states: Set<string>, inputSymbols: Set<string>, initialState: string, finalStates: Set<string>, equations: [string, string][], matchingValues: string[], inputString: string
export const runFiniteAutomaton = ({ allStates, inputSymbols, initialState, finalStates, equations, matchingValues, inputString }: FAProps) => {
  // check that the final accepting states are in the states set
  finalStates.forEach((s) => {
    if (!allStates.has(s)) throw new Error(`Invalid final state: ${s}`);
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
    // construct the equation and value array
    let equations: [string, string][] = [["S0", "0"], ["S0", "1"], ["S1", "0"], ["S1", "1"], ["S2", "0"], ["S2", "1"]]
    let values: string[] = ["S0", "S1", "S2", "S0", "S1", "S2"]
    // build the prop object
    return {
      allStates, 
      inputSymbols, 
      initialState,
      finalStates, 
      equations, 
      matchingValues: values, 
      inputString
    }
}