import { getModThreeObject } from "@/constants/finite-automata";
import { finiteAutomatioObjToPayload } from "@/constants/utils";
import { FSMResponseData } from "@/pages/api/finite-automaton";
import { useState } from "react";


export const useFSA = () => {
  const [data, setData] = useState<FSMResponseData>({})
  const [loading, setLoading] = useState(false)
  const getCustomFA = () => {

  }
  const modThree = async (inputString: string) => {
    setLoading(true)
    // get the pre-build object
    const newModThreeFSM = getModThreeObject(inputString)
    // build the query string from the object
    const searchParams = finiteAutomatioObjToPayload(newModThreeFSM)
    
    // double step to build the objct and then use the object to build a string could be avoided by just hard coding a string:
    // { states → "S0,S1,S2", inputSymbols → "0,1", initialState → "S0", finalStates → "0,1", equations → "S0,0,S0,1,S1,0,S1,1,S2,0,S2,1", matchingValues → "S0,S1,S2,S0,S1,S2", inputString → "1010" }
    // build it like this so its easier to visualize
    
    await fetch('/api/finite-automaton?' + searchParams).then((response) => response.json()).then((data) => setData({...data, input: inputString}))
    setLoading(false)
  }

  return { data, loading, modThree }
}