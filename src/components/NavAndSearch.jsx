/* eslint-disable react/jsx-no-constructed-context-values */
import { RxDropdownMenu } from 'react-icons/rx'
import { BsSearch } from 'react-icons/bs'
import { IconContext } from 'react-icons'
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { useState } from 'react'
import { setSearch } from '../reducers/searchReducer'

function NavAndSearch() {
  const dispatch = useDispatch()
  const products = useSelector((state) => state.products)
  const [filter, setFilter] = useState('')
  const navigate = useNavigate()

  const handleSearch = (e) => {
    e.preventDefault()
    dispatch(setSearch(filter))
    navigate('/search')
  }

  const categories = [...new Set(products.map((product) => product.category))]

  return (
    <div className="categories_and_search_bar">
      <div className="categories">
        <div>
          <span>Categories</span>
          <RxDropdownMenu size={20} />
        </div>
        <div className="drop_down_categories">
          <ul>
            {categories.map((category) => (
              <li key={category}>
                <Link to={`/products/${category}`}>
                  {category}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <IconContext.Provider value={{ className: 'search_icon' }}>
        <form className="search_bar">
          <input
            type="text"
            name="search"
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
            placeholder="Search products..."
          />
          <button
            type="button"
            onClick={handleSearch}
          >
            <BsSearch />
          </button>
        </form>
      </IconContext.Provider>
    </div>
  )
}
export default NavAndSearch
