import { TiMessages } from "react-icons/ti";

import React from 'react'

const NoChatsSelected = () => {
  return (
    <div className='flex items-center justify-center w-full h-full'>
        <div className="px-4 text-center sm:text-lg md:text-xl text-gray-200 font-semibold flex flex-col items-center gap-2">
            <p>welcome Aniket</p>
            <p>Please select a chat to Continue!!</p>
            <TiMessages className='text-3xl md:text-6xl text-center' />
        </div>
    </div>
  )
}

export default NoChatsSelected