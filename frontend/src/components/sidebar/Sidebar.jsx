import Conversations from "./Conversations.jsx"
import LogoutButton from "./LogoutButton.jsx"
import SearchInput from "./SearchInput.jsx"

const Sidebar = () => {
  return (
    <div className="border-r border-slate-500 p-4 flex flex-col">
      <SearchInput />
      <div className="divider px-3"/>
      <Conversations />
      <LogoutButton />
    </div>
  )
}
export default Sidebar
