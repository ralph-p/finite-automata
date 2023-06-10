import React from 'react'

type Props = {
  title: string;
  body: React.ReactNode;
}

export const InfoCard = ({ title, body }: Props) => {
  return (
    <div
      className="group rounded-lg border border-transparent px-5 py-4 transition-colors"
    >
      <h2 className={`mb-3 text-2xl font-semibold`}>
       {title}
      </h2>
      <div className={`m-0 max-w-[30ch] text-sm opacity-50`}>
        {body}
      </div>
    </div>
  )
}