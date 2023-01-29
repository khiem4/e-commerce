import { useState } from 'react'
import { useEffect } from 'react'
import productService from '../services/products'

const Cart = () => {
  const [products, setProducts] = useState([])

  useEffect(() => {
    productService
      .getCart()
      .then(res => setProducts(res))
  }, [])

  const handleRemove = async (id) => {
    await productService.remove(id)
    const updatedProducts = products.filter(product => product.id !== id)
    setProducts(updatedProducts)
  }

  const totalPrice = products.reduce((acc, obj) => acc + obj.price, 0)

  return (
    <>
      <h2 className='shopping_cart'>Shopping Cart</h2>
      <div className='cart_container'>
        <div className='table_checkout_products'>
          <table>
            <thead>
              <tr>
                <th>Product</th>
                <th>Quantity</th>
                <th>Price</th>
                <th>Action</th>
              </tr>
            </thead>
            {products.map(product =>
              <tbody className='table_data_product'>
                <tr>
                  <td>
                    <img src={product.thumbnail} alt="image" />{product.title}
                  </td>
                  <td>{product.quantity}</td>
                  <td>${product.price}</td>
                  <td>
                    <button type='button' onClick={() => handleRemove(product.id)}>
                      Delete
                    </button>
                  </td>
                </tr>
              </tbody>
            )}
          </table>
        </div>
        <div className='check_out'>
          <p>Total:  ${totalPrice}</p>
          <button>Check Out</button>
          <button>Continue Shopping</button>
        </div>
      </div>
    </>
  )
}

export default Cart