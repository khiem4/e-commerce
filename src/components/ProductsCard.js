import { BsFillCartPlusFill } from 'react-icons/bs'
import { Link } from 'react-router-dom'
import AddToCart from './AddToCart'

const ProductsCard = ({ products, relatedProducts }) => {
  if (relatedProducts) {
    return (
      <ProductsContainer products={relatedProducts} className={'row_related'} />
    )
  }

  if (products) {
    return (
      <ProductsContainer products={products} className={'row'} />
    )
  }
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
              alt={product.title}
            />
            <div className='product_info'>
              <Link
                to={`/products/${product.id}`}>
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