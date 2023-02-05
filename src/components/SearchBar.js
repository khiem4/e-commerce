import { BsSearch } from 'react-icons/bs'
import { IconContext } from "react-icons";

const SearchBar = ({ handleFilter }) => {
  return (
    <IconContext.Provider value={{ className: "search_icon" }}>
      <div className="search_bar">
        <input
          type="text"
          name='search'
          onChange={(e) => handleFilter(e.target.value)}
          placeholder='Search items...'
        />
        <BsSearch size={15} />
      </div>
    </IconContext.Provider>
  )
}

export default SearchBar