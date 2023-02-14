import { useEffect, useState } from 'react'
import Categories from './Categories'
import Pagination from './Pagination'
import ProductsCard from './ProductsCard'
import SearchBar from './SearchBar'
import SortPrice from './SortPrice'

const ProductsPage = ({ products, categories }) => {
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
  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber)
    window.scrollTo({ top: 100, behavior: 'smooth' })
  }


  const productsFilter = filter
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
      <div className='categories_and_sort'>
        <Categories categories={categories} />
        <SortPrice
          sortLowToHigh={sortLowToHigh}
          sortHighToLow={sortHighToLow}
          toggle={toggle}
        />
      </div>
      <ProductsCard products={productsFilter} />
      {/* { working on this */}
      <Pagination
        productsPerPage={productsPerPage}
        totalProducts={productsPriceSort.length}
        paginate={paginate}
      />
    </>
  )
}

export default ProductsPage