import Image from 'next/image'
import { Inter } from 'next/font/google'
import React, { useState } from 'react';
import { ModThreeInput } from '@/components/ModThreeInput'
import { FSMVisualizer } from '@/components/FSMVisualizer';
import { useFAContext } from '@/context/context';

const inter = Inter({ subsets: ['latin'] })



export default function ModThree() {
  const { data } = useFAContext()
  const states = ["S0", "S1", "S2"]

  return (
    <main
      className={`flex min-h-screen flex-col items-center px-10 pt-20 ${inter.className}`}
    >
      <ModThreeInput />
      <div className="">Current State: {data.state || states[0]}</div>
      <div className='flex flex-col'>
        <FSMVisualizer currentState={data.state || states[0]} states={states} finalStates={states}/>

        <div className="relative overflow-x-auto rounded">

          <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
            <caption className="p-5 text-lg font-semibold text-left text-gray-900 bg-white dark:text-white dark:bg-gray-800">
              Transition Table
              <p className="mt-1 text-sm font-normal text-gray-500 dark:text-gray-400">The top row represents the inputs, the first column represents the possible states.</p>
            </caption>
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" className="px-6 py-3" />
                <th scope="col" className="px-6 py-3">
                  0
                </th>
                <th scope="col" className="px-6 py-3">
                  1
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                  S0
                </th>
                <td className="px-6 py-4">
                  S0
                </td>
                <td className="px-6 py-4">
                  S1
                </td>
              </tr>
              <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                  S1
                </th>
                <td className="px-6 py-4">
                  S2
                </td>
                <td className="px-6 py-4">
                  S0
                </td>
              </tr>
              <tr className="bg-white dark:bg-gray-800">
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                  S2
                </th>
                <td className="px-6 py-4">
                  S1
                </td>
                <td className="px-6 py-4">
                  S2
                </td>
              </tr>
            </tbody>
          </table>
        </div>

      </div>

    </main>
  )
}
