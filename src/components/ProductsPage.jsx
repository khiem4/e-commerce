import { useState } from 'react'
import Categories from './Categories'
import ProductsCard from './ProductsCard'
import SearchBar from './SearchBar'
import SortPrice from './SortPrice'

const ProductsPage = () => {
  const [filter, setFilter] = useState('')

  return (
    <>
      <div className='categories_and_search_bar'>
        <Categories />
        <SearchBar setFilter={setFilter} />
      </div>
      <SortPrice />
      <ProductsCard filter={filter} />
    </>
  )
}

export default ProductsPage