import Image from 'next/image'
import { Inter } from 'next/font/google'
import { InfoCard } from '@/components/InfoCard'
import { FA_DEFINITION } from '@/constants/const'
import { Description } from '@/components/Description'
import Link from 'next/link'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {

  return (
    <main
      className={`flex min-h-screen flex-col items-center px-10 pt-20 ${inter.className}`}
    >
      <Description />
      <div className='flex md:hidden bg-blue-100'>
        <ul className="flex flex-col space-y-2 text-xl">
          <li className='p-3 rounded hover:bg-blue-200'>
            <Link href="/mod-three">Modulo Three Example</Link>
          </li>
          <li className='p-3 rounded hover:bg-blue-200'>
            <Link href="/build">Build Your Own FSM</Link>
          </li>
          <li className='p-3 rounded hover:bg-blue-200'>
            <Link href='https://github.com/ralph-p/finite-automata' target={'_blank'}>Visit GitHub </Link>

          </li>
          </ul>
      </div>
      <div className="w-full max-w-5xl mb-32 grid lg:mb-0 lg:grid-cols-3 text-left" data-testid="cards">
        {FA_DEFINITION.map(({ title, body }) => <InfoCard key={`fa-def-${title}`} title={title} body={body} />)}
      </div>
    </main>
  )
}
