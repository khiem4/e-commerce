import { createSlice } from '@reduxjs/toolkit'
import productService from '../services/products'

const cartSlice = createSlice({
  name: 'cart',
  initialState: [],
  reducers: {
    initializeCart(state, action) {
      return action.payload
    },
    addProduct(state, action) {
      const product = action.payload
      return state.concat(product)
    },
    updateProduct(state, action) {
      const productUpdated = action.payload
      return state.map(product =>
        product.title !== productUpdated.title ? product : productUpdated)
    },
    deleteProduct(state, action) {
      const id = action.payload
      return state.filter(product => product.id !== id)
    },
  }
})

export const {
  initializeCart,
  addProduct,
  updateProduct,
  deleteProduct } = cartSlice.actions

export const getAllProductsInCart = () => {
  return async dispatch => {
    const products = await productService.getCart()
    dispatch(initializeCart(products))
  }
}

export const addProductToCart = (product) => {
  return async dispatch => {
    const response = await productService.post(product)
    dispatch(addProduct(response))
  }
}

export const updateProductQuantity = (product) => {
  return async dispatch => {
    const response = await productService.update(product)
    dispatch(updateProduct(response))
  }
}

export const removeProduct = (id) => {
  return async dispatch => {
    await productService.remove(id)
    dispatch(deleteProduct(id))
  }
}

export default cartSlice.reducer