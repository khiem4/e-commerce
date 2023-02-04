import { useEffect, useState } from 'react'
import Pagination from './Pagination'
import Products from './Products'
import SearchBar from './SearchBar'

const ProductsList = ({ products }) => {
  const [productsPriceSort, setProductsPriceSort] = useState([])
  const [toggle, setToggle] = useState('')
  const [currentPage, setCurrentPage] = useState(1)
  const [productsPerPage] = useState(12)
  const [filter, setFilter] = useState('')

  useEffect(() => {
    setProductsPriceSort(products)
    setToggle('')
  }, [products])

  const indexOfLastProduct = currentPage * productsPerPage
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage
  const currentProducts = productsPriceSort.slice(indexOfFirstProduct, indexOfLastProduct)
  const paginate = pageNumber => setCurrentPage(pageNumber)

  const handleFilter = (value) => {
    setFilter(value)
  }

  const findProduct = filter
    ? productsPriceSort.filter(product =>
      product.title.toLowerCase().includes(filter.toLowerCase()))
    : currentProducts

  const filterLowToHigh = () => {
    const sort = [...products].sort((a, b) => a.price - b.price)
    setProductsPriceSort(sort)
    setToggle('low_to_high')
  }

  const filterHighToLow = () => {
    const sort = [...products].sort((a, b) => b.price - a.price)
    setProductsPriceSort(sort)
    setToggle('high_to_low')
  }

  return (
    <>
      <SearchBar handleFilter={handleFilter} />
      <div className='products_price_sort'>
        <button
          className={toggle === 'high_to_low' ? 'high_to_low' : ''}
          onClick={filterHighToLow}>Price: high to low
        </button>
        <button
          className={toggle === 'low_to_high' ? 'low_to_high' : ''}
          onClick={filterLowToHigh}>Price: low to high
        </button>
      </div>
      <Products products={findProduct} />
      {findProduct.length > 5 &&
        <Pagination
          productsPerPage={productsPerPage}
          totalProducts={productsPriceSort.length}
          paginate={paginate}
        />}
    </>
  )
}

export default ProductsList