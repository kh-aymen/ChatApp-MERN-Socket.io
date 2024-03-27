import useGetConversations from "../../hooks/useGetConversations.js"
import { getRandomEmoji } from "../../utils/emojis.js"
import Conversation from "./Conversation"

const Conversations = () => {
  const { conversations, loading } = useGetConversations()
 
  return (
    <div className="py-2 flex flex-col overflow-auto">
      {conversations.map((conversation, index) => (
        <Conversation
          key={conversation._id}
          conversation={conversation}
          emoji={getRandomEmoji()}
          lastIndex={index === conversations.length - 1}
        />
      ))}

      {loading ? (
        <span className="loading loading-spinner mx-auto"></span>
      ) : null}
    </div>
  )
}
export default Conversations
