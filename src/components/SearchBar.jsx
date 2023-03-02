import { BsSearch } from 'react-icons/bs'
import { IconContext } from "react-icons";
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setSearch } from '../reducers/searchReducer';

const SearchBar = () => {
  const [filter, setFilter] = useState('')
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const handleSearch = (e) => {
    e.preventDefault()
    dispatch(setSearch(filter))
    navigate(`/search`)
  }

  return (
    <>
      <IconContext.Provider value={{ className: "search_icon" }}>
        <form className="search_bar">
          <input
            type="text"
            name='search'
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
            placeholder='Search products...'
          />
          <button onClick={handleSearch}>
            <BsSearch />
          </button>
        </form>
      </IconContext.Provider>
    </>
  )
}

export default SearchBar