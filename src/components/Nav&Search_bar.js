import { useState } from 'react'
import { FaListUl, FaSearch, FaMobileAlt, FaLaptop } from 'react-icons/fa'
import { GiPaintedPottery, GiWatch } from 'react-icons/gi'
import { MdOutlineChair } from 'react-icons/md'
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
        <FaListUl size={25} />
        <span>Category</span>
        <div className='nav-list'>
          <div>
            <FaMobileAlt />
            <a href="#">Smart Phones</a>
          </div>
          <div>
            <GiPaintedPottery />
            <a href="#">Home Decoration</a>
          </div>
          <div>
            <MdOutlineChair />
            <a href="#">Furniture</a></div>
          <div>
            <FaLaptop />
            <a href="#">Laptops</a></div>
          <div>
            <GiWatch />
            <a href="#">Watches</a></div>
        </div>
      </div>
      <form className='search'>
        <input type="text" name='search' placeholder='Search items...' />
        <button><FaSearch size={20} /></button>
      </form>
    </div>
  )
}

export default NavSearchBar