import { getModThreeObject, runFiniteAutomaton } from "@/constants/finite-automata";
import '@testing-library/jest-dom'

describe('getModThreeObject', () => { 
    let inputString = "1010"
    let initialState = "S0"
    afterEach(() => {
        inputString = "1010"
    })
    describe('getModThreeObject', () => { 

        it('should return the mod three object', () => {
            const modThree = getModThreeObject(inputString)
            expect(modThree.inputString).toEqual(inputString)
            inputString = "10110"
            const modThree2 = getModThreeObject(inputString)
            expect(modThree2.inputString).toEqual(inputString)
            expect(modThree2.initialState).toEqual(initialState)
            expect(modThree2.finalStates.has(initialState)).toBeTruthy()
            expect(modThree2.allStates.has("S1")).toBeTruthy()
        })
     })
     describe('runFiniteAutomaton', () => { 

         it('should return the mod three object', () => {
             const modThree = getModThreeObject(inputString)
             expect(modThree.inputString).toEqual(inputString)
             let finalState = runFiniteAutomaton(modThree)
             expect(finalState).toEqual("S1")
             inputString = "101010"
             const modThree2 = getModThreeObject(inputString)
             finalState = runFiniteAutomaton(modThree2)
             expect(finalState).toEqual("S0")
         })
         it('should return the incorrect mod three object', () => {
             inputString = "110111111101111011111111111111111111111101010101110000000000000000001"
             const modThree = getModThreeObject(inputString)
             expect(modThree.inputString).toEqual(inputString)
             let finalState = runFiniteAutomaton(modThree)
             expect(finalState).toEqual("S2")
             // this is the correct state it should be in according to the parser
             expect(finalState).not.toEqual("S1")
         })
         it('should throw error if one of the final states is incorrect', () => {
             let modThree = getModThreeObject(inputString)
             modThree.finalStates.add("H1")
             let finalState = () => runFiniteAutomaton(modThree)
             expect(finalState).toThrow(/Invalid /)
         })

         it('should throw error if one of the input fields is incorrect', () => {
             inputString = "aaab"
             let modThree = getModThreeObject(inputString)
             let finalState = () => runFiniteAutomaton(modThree)
             expect(finalState).toThrow(/Invalid input symbol:/)
         })

      })
 })