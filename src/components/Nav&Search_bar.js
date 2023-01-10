import { FaListUl, FaSearch, FaMobileAlt, FaLaptop } from 'react-icons/fa'
import { GiPaintedPottery, GiWatch } from 'react-icons/gi'
import { MdOutlineChair } from 'react-icons/md'
import { Link } from 'react-router-dom'

const NavSearchBar = () => {
  return (
    <div className='nav_search'>
      <div className="nav">
        <div className='menu'>
          <FaListUl size={25} />
          <span>Menu</span>
        </div>
        <div className='nav-list'>
          <div>
            <FaMobileAlt />
            <Link to="/smartphones">Smart Phones</Link>
          </div>
          <div>
            <GiPaintedPottery />
            <Link to="/decoration">Decoration</Link>
          </div>
          <div>
            <MdOutlineChair />
            <Link to="/furniture">Furniture</Link>
          </div>
          <div>
            <FaLaptop />
            <Link to="/laptop">Laptop</Link>
          </div>
          <div>
            <GiWatch />
            <Link to="/watches">Watches</Link>
          </div>
        </div>
      </div>

      <div className="search_bar">
        <form>
          <input
            type="text" name='search' placeholder='Search items...' />
        </form>
        <button>
          <FaSearch size={20} />
        </button>
      </div>
    </div>
  )
}

export default NavSearchBar