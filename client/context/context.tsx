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
  updateContextFSM: (key: string, value: string | string[]) => void
  getCustomFA: (stateMachine: FAProps) => Promise<void>
}

export const FAContext = createContext<FAContextProps>({
  data: {},
  modThree: voidFunction,
  contextFSM: null,
  updateContextFSM: voidFunction,
  getCustomFA: voidFunction
})

interface ContextProps {
  children?: ReactNode
}

export const Context = ({ children }: ContextProps) => {
  const { data, modThree, getCustomFA } = useFSA()
  const [stateFSM, setStateFSM] = useState<FAProps | null>(null)
  useEffect(() => {
    if (stateFSM === null) {
      const newFSM = getEmptyFSMObject()
      setStateFSM(newFSM)
    }
  }, [])
  const updateContextFSM = (key: string, value: string | string[]) => {
    if (stateFSM) {
      switch (key) {
        case 'allStates':
          const currentStates = stateFSM.allStates
          currentStates.add(value as string)
          setStateFSM({ ...stateFSM, allStates: currentStates })
          break;
        case 'inputSymbols':
          const currentInputs = stateFSM.inputSymbols
          currentInputs.add(value as string)
          setStateFSM({ ...stateFSM, inputSymbols: currentInputs })
          break;
        case 'initialState':
          setStateFSM({ ...stateFSM, initialState: value as string })
          break;
        case 'finalStates':
          const finalStates = stateFSM.finalStates
          if (finalStates.has(value as string)) finalStates.delete(value as string)
          else finalStates.add(value as string)
          setStateFSM({ ...stateFSM, finalStates })
          break;
        case 'equation':
          if (value && value.length === 3) {
            const equations = stateFSM.equations
            const matchingValues = stateFSM.matchingValues
            equations.push([value[0], value[1]])
            matchingValues.push(value[2])
            setStateFSM({ ...stateFSM, equations, matchingValues })
          }
          break;
        case 'inputString':
          setStateFSM({ ...stateFSM, inputString: value as string })
          break;
        default:
          break;
      }
    }
  }
  return (
    <FAContext.Provider value={{ data, modThree, contextFSM: stateFSM, updateContextFSM, getCustomFA }}>{children}</FAContext.Provider>
  )
}

export const useFAContext = () => useContext(FAContext)