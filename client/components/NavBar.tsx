import Link from 'next/link'
import React from 'react'

type Props = {}

const NavBar = (props: Props) => {
  return (
    <nav className="bg-white border-gray-200 dark:bg-gray-900">
      <div id="sticky-banner" data-testid="banner" className="fixed top-0 left-0 z-50 flex justify-between w-full p-4 border-b border-gray-200 bg-gray-50 dark:bg-gray-700 dark:border-gray-600">
        <h1 className='text-3xl font-bold'>Finite Automata</h1>
        <div className='flex flex-col'>
          <div className="block w-auto" id="navbar-default">
            <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
              <li>
                <Link href="/" className="block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white md:dark:text-blue-500">Home</Link>
              </li>
              <li>
                <Link href="/mod-three" className="block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white md:dark:text-blue-500">Modulo Three Example</Link>
              </li>
              <li>
                <Link href="/build" className="block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white md:dark:text-blue-500">Build Your Own FSM</Link>
              </li>
              <li>
                <Link href='https://github.com/ralph-p/finite-automata' target={'_blank'} className="block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white md:dark:text-blue-500">Visit GitHub </Link>

              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default NavBar