import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'

const Product = ({ product }) => {
  const [count, setCount] = useState(1)
  const productImg = useRef()

  const mouseOver = (e) => {
    productImg.current.src = e
  }

  const plus = () => {
    setCount(count + 1)
  }

  const minus = () => {
    if (count >= 2) return setCount(count - 1)
  }

  return (
    <>
      {product &&
        <>
          <div className='product'>
            <div className='product_img'>
              <div className='product_main_img' >
                <img
                  ref={productImg}
                  src={product.thumbnail}
                  alt={product.title} />
              </div>
              <div className='product_thumbnails'>
                {product.images.map(image =>
                  <img
                    key={image.toString()}
                    src={image}
                    alt={product.title}
                    onMouseOver={() => mouseOver(image)}
                  />
                )}
              </div>
            </div >
            <div className='product_details'>
              <h3>{product.title}</h3>
              <p className='product_brand'>
                Brand:<span><Link > {product.brand}</Link></span>
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
                      onClick={minus}>&minus;
                    </button>
                    <input
                      type='text'
                      value={count}
                      readOnly />
                    <button
                      onClick={plus}>&#xff0b;
                    </button>
                  </div>
                  <span>{product.stock} available</span>
                </div>
                <button className='btn_add_to_cart'>Add to cart
                </button>
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