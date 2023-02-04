import { useRef, useState } from 'react'
import AddToCart from './AddToCart'

const Product = ({ product }) => {
  const [quantity, setQuantity] = useState(1)
  const productImg = useRef()

  const mouseOverImg = (e) => {
    productImg.current.src = e
  }

  const handleQuantity = (value) => {
    if (quantity === 1 && value === -1) {
      return null
    }
    setQuantity(quantity + value)
  }

  return (
    <>
      {product &&
        <>
          <div className='product'>
            <div className='product_main_img'>
              <img
                ref={productImg}
                src={product.thumbnail}
                alt={product.title} />
              <div className='product_thumbnails'>
                {product.images.map(image =>
                  <img
                    key={image.toString()}
                    src={image}
                    alt={product.title}
                    onMouseOver={() => mouseOverImg(image)}
                  />
                )}
              </div>
            </div >
            <div className='product_details'>
              <h3>{product.title}</h3>
              <p className='product_brand'>
                Brand:
                <span>
                  {product.brand}
                </span>
              </p>
              <p className='product_price'>
                ${product.price}
              </p>
              <p>{product.description}</p>
              <div className='product_quantity_add_to_cart'>
                <p>Quantity:</p>
                <div className='product_quantity'>
                  <div className='quantity'>
                    <button
                      onClick={() => handleQuantity(-1)}>&minus;
                    </button>
                    <input
                      type='text'
                      value={quantity}
                      name='quantity'
                      placeholder='1'
                      readOnly
                    />
                    <button
                      onClick={() => handleQuantity(+1)}>&#xff0b;
                    </button>
                  </div>
                  <span>{product.stock} available</span>
                </div>
                <AddToCart
                  className={'btn_product_cart'}
                  product={product}
                  quantity={quantity}>
                  <p>Add to cart</p>
                </AddToCart>
              </div>
            </div>
          </div >

          <div className='product_description'>
            <h4>Product description</h4>
            <div>
              <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>
            </div>
          </div>
        </>
      }
    </>
  )
}

export default Product