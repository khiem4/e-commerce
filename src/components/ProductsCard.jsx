import { useEffect, useState } from 'react'
import { BsFillCartPlusFill } from 'react-icons/bs'
import { useSelector } from 'react-redux'
import { Link, useParams } from 'react-router-dom'
import AddToCart from './AddToCart'
import Pagination from './Pagination'
import SortPrice from './SortPrice'

const ProductsCard = ({ filter }) => {
  const products = useSelector(state => state.products)
  const id = useParams().id

  if (filter) {
    const productsFiltered = products.filter(product =>
      product.title.toLowerCase().includes(filter.toLowerCase()))

    return (
      <ProductsContainer products={productsFiltered} />
    )
  }
  if (id) {
    const productsInCategory = products.filter(product => product.category === id)

    return (
      <ProductsContainer products={productsInCategory} />
    )
  }

  return (
    <ProductsContainer products={products} />
  )
}

const ProductsContainer = ({ products }) => {
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

  return (
    <>
      <SortPrice product={products} />
      <div className='products_container'>
        <div className='row'>
          {currentProducts.map(product =>
            <div className='product_card' key={product.id} >
              <AddToCart
                className={'btn_hover_cart'}
                product={product}
                quantity={1}>
                <BsFillCartPlusFill size={20} />
              </AddToCart>
              <div>
                <Link to={`/products/${product.category}/${product.id}`}>
                  <img
                    src={product.thumbnail}
                    alt={product.title} />
                </Link>
              </div>
              <div className='products_info'>
                <p>{product.title}</p>
                <div>
                  <span>${Math.round(product.price - (product.price / 100 * product.discountPercentage))}</span>
                  <span>${product.price}</span>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
      <Pagination
        productsPerPage={productsPerPage}
        totalProducts={products.length}
        paginate={paginate} />
    </>
  )
}

export default ProductsCard