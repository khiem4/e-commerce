import { BsSearch } from 'react-icons/bs'
import { IconContext } from "react-icons";

const SearchBar = ({ setFilter }) => {
  return (
    <IconContext.Provider value={{ className: "search_icon" }}>
      <div className="search_bar">
        <input
          type="text"
          name='search'
          onChange={(e) => setFilter(e.target.value)}
          placeholder='Search products...'
        />
        <BsSearch size={20} />
      </div>
    </IconContext.Provider>
  )
}

export default SearchBar