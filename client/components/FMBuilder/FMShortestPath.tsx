import React, { useRef, useState } from 'react'
import { useFAContext } from '@/context/context'
import { findShortestPath, buildFAMap } from '@/constants'
import { Input } from '../Input'
import { FSMVisualizer } from './FSMVisualizer'


export const FMShortestPath = () => {
    const { data, contextFSM, updateContextFSM, getCustomFA } = useFAContext()
    const [path, setPath] = useState<string[] | boolean>(false)
    const startRef = useRef<HTMLInputElement>(null)
    const endRef = useRef<HTMLInputElement>(null)

    const findPath = () => {
        if(contextFSM && startRef.current?.value && endRef.current?.value) {
          const transitionMap = buildFAMap(contextFSM.equations, contextFSM?.matchingValues)
          let pathArray = findShortestPath(transitionMap, startRef.current?.value, endRef.current?.value, Array.from(contextFSM?.inputSymbols))
          setPath(pathArray);
        }
      }
  return (
    <div className='flex flex-col max-w-md space-y-3'>
        <h1 className='text-2xl font-bold'>Find the shortest path between two states</h1>
        <div className='flex max-w-sm space-x-2'>
        <Input inputLabel='Start State' inputRef={startRef}/>
        <Input inputLabel='End State' inputRef={endRef}/>

        </div>
        <button onClick={findPath} className='font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 bg-gray-800 text-white border-gray-600 hover:bg-gray-700 hover:border-gray-600 focus:ring-gray-700'>Find Path</button>
        {
            Array.isArray(path) ? (
                <FSMVisualizer states={path} currentState={path[0]} header={`Quickest path from ${path[0]} to ${path[path.length - 1]}`}/>
            ) : (
                <div> No path found</div>
            )
        }
    </div>
  )
}
