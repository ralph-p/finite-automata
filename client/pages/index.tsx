import Image from 'next/image'
import { Inter } from 'next/font/google'
import { InfoCard } from '@/components/InfoCard'
import { FA_DEFINITION } from '@/constants/const'
import { Description } from '@/components/Description'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  
  return (
    <main
      className={`flex min-h-screen flex-col items-center px-10 pt-20 ${inter.className}`}
    >
      <Description />
      <div className="w-full max-w-5xl mb-32 grid lg:mb-0 lg:grid-cols-3 text-left" data-testid="cards">
        {FA_DEFINITION.map(({title, body}) => <InfoCard key={`fa-def-${title}`} title={title} body={body}/>)}
       </div>
    </main>
  )
}
