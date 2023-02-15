import { useEffect, useState } from 'react'
import { BsFillCartPlusFill } from 'react-icons/bs'
import { Link, useParams } from 'react-router-dom'
import AddToCart from './AddToCart'
import Pagination from './Pagination'

const ProductsCard = ({ products, filter }) => {
  const id = useParams().id
  const [currentPage, setCurrentPage] = useState(1)
  const [productsPerPage] = useState(12)

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

  const productsCategory = products.filter(product => product.category === id)

  const productsFilter = products.filter(product =>
    product.title.toLowerCase().includes(filter.toLowerCase()))

  if (filter) {
    return (
      <ProductsContainer products={productsFilter} className={'row'} />
    )
  }

  if (id) {
    return (
      <ProductsContainer products={productsCategory} className={'row'} />
    )
  }

  return (
    <>
      <ProductsContainer products={currentProducts} className={'row'} />
      <Pagination
        productsPerPage={productsPerPage}
        totalProducts={products.length}
        paginate={paginate} />
    </>
  )
}

const ProductsContainer = ({ products, className }) => {
  return (
    <div className='products_container'>
      <div className={className}>
        {products.map(product =>
          <div
            className='product_card'
            key={product.id} >
            <AddToCart
              className={'btn_hover_cart'}
              product={product}
              quantity={1}>
              <BsFillCartPlusFill size={20} />
            </AddToCart>
            <img
              src={product.thumbnail}
              alt={product.title} />
            <div className='product_info'>
              <Link
                to={`/products/${product.category}/${product.id}`}>
                {product.title}
              </Link>
              <p>${product.price}</p>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default ProductsCard