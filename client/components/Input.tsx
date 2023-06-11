import React from 'react'

type InputProps = {
    inputRef: React.RefObject<HTMLInputElement>;
    inputLabel: string;
    inputPlaceholder?: string;
    onChange?: () => void;
}

export const Input = ({inputRef, inputLabel, onChange, inputPlaceholder}: InputProps) => {
  return (
      <div className='flex max-w-md'>
          <label className='block mb-2 text-sm font-medium text-gray-900 dark:text-white' htmlFor={`input-${inputLabel}`}>{inputLabel}</label>
          <input 
            type="text" 
            id={`input-${inputLabel}`}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
            placeholder={inputPlaceholder|| "1010" }
            required 
            ref={inputRef}
            onChange={onChange}
        />
      </div>
  )
}