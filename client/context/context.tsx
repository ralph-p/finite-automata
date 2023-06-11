import { useFSA } from "@/hooks/useFSA.hooks";
import { FSMResponseData } from "@/pages/api/finite-automaton";
import { createContext, ReactNode, useContext } from "react";
const voidFunction = async () => { }
interface FAContextProps {
  data: FSMResponseData;
  modThree: (inputString: string) => Promise<void>;
}

export const FAContext = createContext<FAContextProps>({ data: {}, modThree: voidFunction })

interface ContextProps {
  children?: ReactNode
}

export const Context = ({ children }: ContextProps) => {
  const { data, modThree } = useFSA()
  return (
    <FAContext.Provider value={{ data, modThree }}>{children}</FAContext.Provider>
  )
}

export const useFAContext = () => useContext(FAContext)