import { FAProps } from "@/constants/types";
import { objToPayload } from "@/constants/utils";
import { FSMResponseData } from "@/pages/api/fsm";
import { useState } from "react";


export const useFSA = () => {
  const [data, setData] = useState<FSMResponseData>({})
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(false)
  const getCustomFA = () => {

  }
  const modThree = async (inputString: string) => {
    setLoading(true)
    // build the FSM for Mod 3
    let allStates: Set<string> = new Set()
    let inputSymbols: Set<string> = new Set()
    let initialState: string = "S0"
    let finalStates: Set<string> = new Set()
    allStates.add("S0").add("S1").add("S2")
    inputSymbols.add("0").add("1")
    finalStates.add("S0").add("S1").add("S2")
    let equations: [string, string][] = [["S0", "0"], ["S0", "1"], ["S1", "0"], ["S1", "1"], ["S2", "0"], ["S2", "1"]]
    let values: string[] = ["S0", "S1", "S2", "S0", "S1", "S2"]
    // build the prop object
    const newModThreeFSM: FAProps = {
      allStates, 
      inputSymbols, 
      initialState,
      finalStates, 
      equations, 
      matchingValues: values, 
      inputString
    }
    // build the query string from the object
    const searchParams = objToPayload(newModThreeFSM)
    
    // double step to build the objct and then use the object to build a string could be avoided by just hard coding a string:
    // { states → "S0,S1,S2", inputSymbols → "0,1", initialState → "S0", finalStates → "0,1", equations → "S0,0,S0,1,S1,0,S1,1,S2,0,S2,1", matchingValues → "S0,S1,S2,S0,S1,S2", inputString → "1010" }
    // build it like this so its easier to visualize
    
    await fetch('/api/fsm?' + searchParams).then((response) => response.json()).then((data) => setData(data)).catch((error) => setError(error))
    setLoading(false)
  }

  return { data, error, loading, modThree }
}