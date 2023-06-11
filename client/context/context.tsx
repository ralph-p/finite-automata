import { getEmptyFSMObject } from "@/constants/finite-automata";
import { FAProps } from "@/constants/types";
import { useFSA } from "@/hooks/useFSA.hooks";
import { FSMResponseData } from "@/pages/api/finite-automaton";
import { createContext, ReactNode, useContext, useEffect, useState } from "react";
const voidFunction = async () => { }
interface FAContextProps {
  data: FSMResponseData;
  modThree: (inputString: string) => Promise<void>;
  contextFSM: FAProps | null
}

export const FAContext = createContext<FAContextProps>({ data: {}, modThree: voidFunction, contextFSM: null,})

interface ContextProps {
  children?: ReactNode
}

export const Context = ({ children }: ContextProps) => {
  const { data, modThree } = useFSA()
  const [stateFSM, setStateFSM] = useState<FAProps | null>(null)
  useEffect(() => {
    if(stateFSM === null) {
      const newFSM = getEmptyFSMObject()
      setStateFSM(newFSM)
    }
  }, [])
  const updateContextFSM = (key: string, value: string) => {

  }
  return (
    <FAContext.Provider value={{ data, modThree, contextFSM: stateFSM }}>{children}</FAContext.Provider>
  )
}

export const useFAContext = () => useContext(FAContext)