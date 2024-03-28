import { FaSortAlphaDown, FaSortAlphaDownAlt } from "react-icons/fa"

const SearchInput = ({ search, setSearch, toggleSortOrder, sortOrder }) => {
  return (
    <div className="flex items-center gap-2">
      <input
        type="text"
        placeholder="Search…"
        className="input input-bordered rounded-full"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      {sortOrder === "asc" ? (
        <button type="submit" className="btn btn-circle bg-sky-500 text-white">
          <FaSortAlphaDown fontSize={25} onClick={toggleSortOrder} />
        </button>
      ) : (
        <button type="submit" className="btn btn-circle bg-sky-500 text-white">
          <FaSortAlphaDownAlt fontSize={25} onClick={toggleSortOrder} />
        </button>
      )}
    </div>
  )
}

export default SearchInput
