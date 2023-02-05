import { useEffect, useState } from 'react'
import Categories from './Categories'
import Pagination from './Pagination'
import Products from './Products'
import SearchBar from './SearchBar'
import SortPrice from './SortPrice'

const ProductsPage = ({ products, productCategories }) => {
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

  const findProduct = filter
    ? productsPriceSort.filter(product =>
      product.title.toLowerCase().includes(filter.toLowerCase()))
    : currentProducts

  const sortLowToHigh = () => {
    const sort = [...products].sort((a, b) => a.price - b.price)
    setProductsPriceSort(sort)
    setToggle('low_to_high')
  }

  const sortHighToLow = () => {
    const sort = [...products].sort((a, b) => b.price - a.price)
    setProductsPriceSort(sort)
    setToggle('high_to_low')
  }

  const handleFilter = (word) => {
    setFilter(word)
  }

  return (
    <>
      <SearchBar handleFilter={handleFilter} />
      <Categories productCategories={productCategories} />
      <SortPrice
        sortLowToHigh={sortLowToHigh}
        sortHighToLow={sortHighToLow}
        toggle={toggle}
      />
      <Products products={findProduct} />
      {
        findProduct.length > 5 &&
        <Pagination
          productsPerPage={productsPerPage}
          totalProducts={productsPriceSort.length}
          paginate={paginate}
        />
      }
    </>
  )
}

export default ProductsPage