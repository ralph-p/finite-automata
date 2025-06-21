"use client"
import { createContext, useContext } from "react";
//  @typescript-eslint/no-empty-function
export const FSMContext = createContext<{ transitionTo: (inputId: string) => void }>({
  transitionTo: () => undefined,
});

export const useFSM = () => useContext(FSMContext);
