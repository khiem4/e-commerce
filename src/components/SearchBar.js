import { FaSearch } from 'react-icons/fa'

const SearchBar = ({ handleFilter }) => {
  return (
    <div>
      <div className="search_bar">
        <form>
          <input
            type="text"
            name='search'
            onChange={(e) => handleFilter(e.target.value)}
            placeholder='Search items...' />
          <button type='button'>
            Search
          </button>
        </form>
      </div>
    </div>
  )

}

export default SearchBar