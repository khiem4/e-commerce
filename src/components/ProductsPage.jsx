import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useLocation, useParams } from 'react-router-dom'
import { setSearch } from '../reducers/searchReducer'
import Pagination from './Pagination'
import ProductsCard from './ProductsCard'

function ProductsPage() {
  const dispatch = useDispatch()
  const products = useSelector((state) => state.products)
  const search = useSelector((state) => state.search)
  const { id } = useParams()
  const location = useLocation().pathname
  const [currentPage, setCurrentPage] = useState(1)
  const [productsPerPage] = useState(15)

  useEffect(() => {
    setCurrentPage(1)

    if (location !== '/search') {
      dispatch(setSearch(null))
    }
  }, [location, dispatch])

  const indexOfLastProduct = currentPage * productsPerPage
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage
  const currentProducts = products.slice(indexOfFirstProduct, indexOfLastProduct)
  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber)
    window.scrollTo({ top: 100, behavior: 'smooth' })
  }

  if (id) {
    const productsInCategory = products.filter((product) => product.category === id)

    return (
      <ProductsCard
        products={productsInCategory}
      />
    )
  }

  if (search) {
    const productsFiltered = products.filter(
      (product) => product.title.toLowerCase().includes(search.toLowerCase())
      || product.category.toLowerCase().includes(search.toLowerCase()),
    )

    return (
      <ProductsCard
        products={productsFiltered}
      />
    )
  }

  return (
    <>
      <ProductsCard
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

export default ProductsPage
