import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAllProducts } from '../reducers/productsReducer'
import Categories from './Categories'
import ProductsCard from './ProductsCard'
import SearchBar from './SearchBar'
import SortPrice from './SortPrice'

const ProductsPage = () => {
  const dispatch = useDispatch()
  const products = useSelector(state => state.products)

  const [filter, setFilter] = useState('')

  useEffect(() => {
    dispatch(getAllProducts())
  }, [dispatch])

  const handleFilter = (word) => {
    setFilter(word)
  }

  return (
    <>
      <div className='categories_and_search_bar'>
        <Categories products={products} />
        <SearchBar handleFilter={handleFilter} />
      </div>
      <SortPrice products={products} />
      <ProductsCard products={products} filter={filter} />
    </>
  )
}

export default ProductsPage