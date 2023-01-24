import { useEffect } from 'react'
import { useRef, useState } from 'react'
import productService from '../services/products'

const Product = ({ product }) => {
  const [quantity, setQuantity] = useState(1)
  const [cart, setCart] = useState([])
  const productImg = useRef()

  useEffect(() => {
    productService
      .getCart()
      .then(res => setCart(res))
  }, [])

  const mouseOverImg = (e) => {
    productImg.current.src = e
  }

  const plus = () => {
    setQuantity(quantity + 1)
  }

  const minus = () => {
    if (quantity >= 2) {
      setQuantity(quantity - 1)
    }
  }

  const addToCart = async () => {
    const item = {
      product: product.title,
      quantity,
      id: product.id
    }
    const findProduct = cart.find(product => product.id === item.id)
    const updateQuantity = { ...item, quantity: findProduct.quantity + quantity }

    if (findProduct) {
      const response = await productService.update(item.id, updateQuantity)
      const cartUpdated = cart.map(product =>
        product.id !== response.id ? product : response)
      return setCart(cartUpdated)
    }

    const response = await productService.post(item)
    setCart(cart.concat(response))
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
              <div>
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
                      onClick={minus}>&minus;
                    </button>
                    <input
                      type='text'
                      value={quantity}
                      readOnly
                    />
                    <button
                      onClick={plus}>&#xff0b;
                    </button>
                  </div>
                  <span>{product.stock} available</span>
                </div>
                <button
                  className='btn_add_to_cart'
                  onClick={addToCart}>
                  Add to cart
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