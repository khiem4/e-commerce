import { useEffect, useState } from 'react'
import { BsFillCartPlusFill } from 'react-icons/bs'
import { Link, useParams } from 'react-router-dom'
import AddToCart from './AddToCart'
import Pagination from './Pagination'

const ProductsCard = ({ products, filter }) => {
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

  const productsInCategory = products.filter(product => product.category === id)

  const productsFiltered = products.filter(product =>
    product.title.toLowerCase().includes(filter.toLowerCase()))

  if (filter) {
    return (
      <ProductsContainer products={productsFiltered} />
    )
  } else if (id) {
    return (
      <ProductsContainer products={productsInCategory} />
    )
  } else {
    return (
      <>
        <ProductsContainer products={currentProducts} />
        <Pagination
          productsPerPage={productsPerPage}
          totalProducts={products.length}
          paginate={paginate} />
      </>
    )
  }
}

const ProductsContainer = ({ products }) => {
  return (
    <div className='products_container'>
      <div className='row'>
        {products.map(product =>
          <div className='product_card' key={product.id} >
            <AddToCart
              className={'btn_hover_cart'}
              product={product}
              quantity={1}>
              <BsFillCartPlusFill size={20} />
            </AddToCart>
            <Link to={`/products/${product.category}/${product.id}`}>
              <img
                src={product.thumbnail}
                alt={product.title} />
            </Link>
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
  )
}

export default ProductsCard