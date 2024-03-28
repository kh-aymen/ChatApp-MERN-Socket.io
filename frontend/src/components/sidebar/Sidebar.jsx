import React, { useState } from "react"
import useGetConversations from "../../hooks/useGetConversations.js"
import Conversations from "./Conversations.jsx"
import LogoutButton from "./LogoutButton.jsx"
import SearchInput from "./SearchInput.jsx"
import useConversation from "../../zustand/useConversation.js"

const Sidebar = () => {
  const [search, setSearch] = useState("")
  const [sortOrder, setSortOrder] = useState("asc")
  const { conversations, loading } = useGetConversations()
  const { setSelectedConversation } = useConversation()

  let filteredConversations = conversations

  if (search) {
    filteredConversations = conversations.filter((conversation) =>
      conversation.fullName.toLowerCase().includes(search.toLowerCase())
    )
  }

  const sortedConversations = filteredConversations.sort((a, b) => {
    const fullNameA = a.fullName.toLowerCase()
    const fullNameB = b.fullName.toLowerCase()

    return sortOrder === "asc"
      ? fullNameA.localeCompare(fullNameB)
      : fullNameB.localeCompare(fullNameA)
  })

  const toggleSortOrder = () => {
    setSortOrder(sortOrder === "asc" ? "desc" : "asc")
  }

  return (
    <div className="border-r border-slate-500 p-4 flex flex-col">
      <SearchInput
        search={search}
        setSearch={setSearch}
        toggleSortOrder={toggleSortOrder}
        sortOrder={sortOrder}
      />
      <div className="divider px-3" />
      <Conversations
        conversations={sortedConversations}
        loading={loading}
        setSelectedConversation={setSelectedConversation}
      />
      <LogoutButton />
    </div>
  )
}

export default Sidebar
