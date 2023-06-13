
import { finiteAutomatioObjToPayload, FAProps } from "@/constants";
import { FSMResponseData } from "@/pages/api/finite-automaton";
import { useState } from "react";


export const useFSA = () => {
  const [data, setData] = useState<FSMResponseData>({})
  const [loading, setLoading] = useState(false)
  const getCustomFA = async (stateMachine: FAProps) => {
    setLoading(true)
    await fetch('/api/finite-automaton?' + finiteAutomatioObjToPayload(stateMachine)).then((response) => response.json()).then((data) => setData({...data}))
    setLoading(false)
  }
  const modThree = async (inputString: string) => {
    setLoading(true)    
    await fetch('/api/mod-three?input=' + inputString).then((response) => response.json()).then((data) => setData({...data, input: inputString}))
    setLoading(false)
  }

  return { data, loading, modThree, getCustomFA }
}