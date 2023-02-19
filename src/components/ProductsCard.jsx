import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import Pagination from './Pagination'
import ProductsContainer from './ProductsContainer'

const ProductsCard = ({ filter }) => {
  const products = useSelector(state => state.products)
  const id = useParams().id
  const [currentPage, setCurrentPage] = useState(1)
  const [productsPerPage] = useState(15)

  useEffect(() => {
    setCurrentPage(1)
  }, [])

  const indexOfLastProduct = currentPage * productsPerPage
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage
  const currentProducts = products.slice(indexOfFirstProduct, indexOfLastProduct)
  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber)
    window.scrollTo({ top: 100, behavior: 'smooth' })
  }

  if (filter) {
    const productsFiltered = products.filter(product =>
      product.title.toLowerCase().includes(filter.toLowerCase()))

    return (
      <ProductsContainer
        products={productsFiltered}
      />
    )
  }
  if (id) {
    const productsInCategory = products.filter(product =>
      product.category === id)

    return (
      <ProductsContainer
        products={productsInCategory}
      />
    )
  }

  return (
    <>
      <ProductsContainer
        products={currentProducts}
      />
      <Pagination
        productsPerPage={productsPerPage}
        totalProducts={products.length}
        paginate={paginate}
      />
    </>
  )
}

export default ProductsCard