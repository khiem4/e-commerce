import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { removeProduct, updateProductQuantity } from '../reducers/cartReducer'

const Cart = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const cart = useSelector(state => state.cart)

  const totalPrice = cart.reduce((acc, obj) =>
    acc + (obj.price * obj.quantity), 0)

  const handleRemove = async (id) => {
    dispatch(removeProduct(id))
  }

  const handleQuantity = (product, quantity) => {
    if (product.quantity === 1 && quantity === -1) {
      return null
    }

    const updateProduct = { ...product, quantity: product.quantity + quantity }
    dispatch(updateProductQuantity(updateProduct))
  }

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
                      <button onClick={() => handleQuantity(product, -1)}>
                        &minus;
                      </button>
                      <span>x {product.quantity}</span>
                      <button onClick={() => handleQuantity(product, +1)}>
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