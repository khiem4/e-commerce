import { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import CartContext from '../context/CartContext'

const Cart = () => {
  const navigate = useNavigate()
  const { cart, addToCart, handleRemove } = useContext(CartContext)

  const totalPrice = cart.reduce((acc, obj) => acc + obj.price, 0)

  if (cart.length === 0) {
    return (
      <>
        <h2 className='shopping_cart'>Shopping Cart</h2>
        <div className="cart_empty">
          <h2>No items in cart</h2>
        </div>
      </>
    )
  }

  return (
    <>
      <h2 className='shopping_cart'>Shopping Cart</h2>
      <div className='cart_container'>
        <div className='table_data_product'>
          <table>
            <thead>
              <tr>
                <th>Product</th>
                <th>Quantity</th>
                <th>Price</th>
                <th>Action</th>
              </tr>
            </thead>
            {cart.map((product, index) =>
              <tbody key={index}>
                <tr>
                  <td>
                    <img src={product.thumbnail} alt={product.title} />
                    {product.title}
                  </td>
                  <td>
                    <div className='cart_quantity'>
                      <button onClick={() => addToCart(product, -1)}>
                        &minus;
                      </button>
                      <span>x {product.quantity}</span>
                      <button onClick={() => addToCart(product, +1)}>
                        +
                      </button>
                    </div>
                  </td>
                  <td>${product.price}</td>
                  <td>
                    <button type='button' onClick={() => handleRemove(product.id)}>
                      <span style={{ color: 'red' }}>Delete</span>
                    </button>
                  </td>
                </tr>
              </tbody>
            )}
          </table>
        </div>
        <div className='check_out'>
          <p>
            Total: <span>${totalPrice}</span>
          </p>
          <button>Check Out</button>
          <button onClick={() => navigate('/products/all')}>
            Continue Shopping
          </button>
        </div>
      </div>
    </>
  )
}

export default Cart