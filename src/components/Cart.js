const Cart = () => {
  return (
    <div className='cart_container'>
      <h2>Shopping Cart</h2>
      <div className='cart'>
        <div className='cart_head'>
          <div>Product</div>
          <div>Quantity</div>
          <div>Price</div>
        </div>
        <div>
          <h3>Total price</h3>
          <button>Check Out</button>
        </div>
      </div>
    </div>
  )
}

export default Cart