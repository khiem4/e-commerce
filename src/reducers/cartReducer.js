import { createSlice } from '@reduxjs/toolkit'
import cartService from '../services/cart'

const cartSlice = createSlice({
  name: 'cart',
  initialState: [],
  reducers: {
    setCart(state, action) {
      return action.payload
    },
    addProduct(state, action) {
      const product = action.payload
      return state.concat(product)
    },
    updateProduct(state, action) {
      const productUpdated = action.payload
      return state.map((product) => (product.title !== productUpdated.title
        ? product
        : productUpdated))
    },
    deleteProduct(state, action) {
      const id = action.payload
      return state.filter((product) => product.id !== id)
    },
  },
})

export const {
  setCart,
  addProduct,
  updateProduct,
  deleteProduct,
} = cartSlice.actions

export const getAllProductsInCart = () => async (dispatch) => {
  const response = await cartService.getCart()
  dispatch(setCart(response))
}

export const updateProductQuantity = (product) => async (dispatch) => {
  const response = await cartService.update(product)
  dispatch(updateProduct(response))
}

export const addProductToCart = (item) => async (dispatch, getState) => {
  const { cart } = getState()
  const productInCart = cart.find((product) => product.title === item.title)

  if (productInCart
      && productInCart.quantity === 1
      && item.quantity === -1) {
    return null
  }
  if (productInCart) {
    const productUpdated = {
      ...productInCart,
      quantity: productInCart.quantity + item.quantity,
      id: productInCart.id,
    }
    return dispatch(updateProductQuantity(productUpdated))
  }

  const response = await cartService.post(item)
  return dispatch(addProduct(response))
}

export const removeProduct = (id) => async (dispatch) => {
  await cartService.remove(id)
  dispatch(deleteProduct(id))
}

export default cartSlice.reducer
