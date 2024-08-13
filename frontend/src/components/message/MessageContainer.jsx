import React from 'react'
import Messages from './Messages'
import MessageInput from './MessageInput'
import NoChatsSelected from './NoChatsSelected'

const MessageContainer = () => {
  const nochatSelected = false
  return (
    <div className='md:min-w-[450px] flex flex-col md:h-[525px]'>
      {nochatSelected 
        ? 
        <NoChatsSelected/>
        :
        <>
            <div className="bg-slate-500 px-4 py-2 mb-2">
                <span className="label-text">To:</span>{" "}
                <span className="text-gray-900 font-bold">
                    Aniket Karpe
                </span>
            </div>

            {/* messages */}
            <Messages />
            {/* messageInput */}
            <MessageInput />
            
        </>}
    </div>
  )
}

export default MessageContainer