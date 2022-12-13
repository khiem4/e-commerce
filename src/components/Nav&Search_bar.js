import { useState } from 'react'
import { FaListUl, FaSearch } from 'react-icons/fa'
import './Nav&Search_bar.css'

const NavSearchBar = () => {
  // const [filterProduct, setFilterProduct] = useState('')

  // const search = (event) => {
  //   event.preventDefault()
  //   setFilterProduct(event.target.value)
  // }

  // const filter = filterProduct
  //   ? products.filter(item =>
  //     item.title.toLowerCase().includes(filterProduct.toLowerCase()))
  //   : products

  return (
    <div className='nav-search'>
      <div className="nav">
        <FaListUl size={30} />
        <p>Category</p>
      </div>
      <form className='search'>
        <input type="text" name='search' placeholder='Search items...' />
        <button><FaSearch size={20} /></button>
      </form>
    </div>
  )
}

export default NavSearchBar