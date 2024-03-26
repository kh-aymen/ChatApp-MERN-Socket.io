import React from "react"
import { BsSend } from "react-icons/bs"
const MessageInput = () => {
  return (
    <form className="px-4 my-3">
      <div className="w-full relative">
        <input
          type="text"
          className="border text-sm rounded-lg block w-full p-2.5 pr-10 bg-gray-700 border-gray-700 text-white"
          placeholder="Send a message"
        />
        <button
          type="submit"
          className="absolute inset-y-0 end-0 flex items-center right-3"
        >
          <BsSend />
        </button>
      </div>
    </form>
  )
}

export default MessageInput
