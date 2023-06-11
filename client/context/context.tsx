import { fsmExample } from "@/assets";
import { getEmptyFSMObject } from "@/constants/finite-automata";
import { FAProps } from "@/constants/types";
import { useFSA } from "@/hooks/useFSA.hooks";
import { FSMResponseData } from "@/pages/api/finite-automaton";
import { createContext, ReactNode, useContext, useEffect, useState } from "react";
const voidFunction = async () => { }
interface FAContextProps {
  data: FSMResponseData;
  modThree: (inputString: string) => Promise<void>;
  contextFSM: FAProps | null;
  updateContextFSM: (key: string, value: string) => void
}

export const FAContext = createContext<FAContextProps>({ data: {}, modThree: voidFunction, contextFSM: null, updateContextFSM: voidFunction })

interface ContextProps {
  children?: ReactNode
}

export const Context = ({ children }: ContextProps) => {
  const { data, modThree } = useFSA()
  const [stateFSM, setStateFSM] = useState<FAProps | null>(null)
  useEffect(() => {
    if (stateFSM === null) {
      const newFSM = getEmptyFSMObject()
      setStateFSM(newFSM)
    }
  }, [])
  const updateContextFSM = (key: string, value: string) => {
    if (stateFSM) {

      switch (key) {
        case 'allStates':
          const currentStates = stateFSM.allStates
          currentStates.add(value)
          setStateFSM({...stateFSM, allStates: currentStates})
          break;
        case 'inputSymbols':
          const currentInputs = stateFSM.inputSymbols
          currentInputs.add(value)
          setStateFSM({...stateFSM, inputSymbols: currentInputs})
          break;
        default:
          break;
      }
    }
  }
  return (
    <FAContext.Provider value={{ data, modThree, contextFSM: stateFSM, updateContextFSM }}>{children}</FAContext.Provider>
  )
}

export const useFAContext = () => useContext(FAContext)