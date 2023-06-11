import Image from 'next/image'
import { Inter } from 'next/font/google'
import { useEffect, useState } from 'react'
import { FAProps } from '@/constants/types'
import { getEmptyFSMObject } from '@/constants/finite-automata'

const inter = Inter({ subsets: ['latin'] })

export default function Build() {
  const [stateFSM, setStateFSM] = useState<FAProps | null>(null)
  useEffect(() => {
    const newFSM = getEmptyFSMObject()
    setStateFSM(newFSM)
  }, [])

  return (
    <main
      className={`flex min-h-screen flex-col items-center px-10 pt-20 ${inter.className}`}
    >
      <div className="max-w-md mx-auto">
          <div className="mb-4">
            <label htmlFor='name' className="block text-gray-700 text-sm font-bold mb-2">State</label>
            <input id="name" type="text" placeholder="Enter a state here" className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-indigo-500" />
            <button>Add State</button>
          </div>
      </div>
    </main>
  )
}
