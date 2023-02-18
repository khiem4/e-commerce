import { createSlice } from '@reduxjs/toolkit';
import productService from '../services/products';

const productsSlice = createSlice({
  name: 'products',
  initialState: [],
  reducers: {
    initializeProducts(state, action) {
      return action.payload
    },
    sortPrice(state, action) {
      return action.payload
    }
  }
})

export const { initializeProducts, sortPrice } = productsSlice.actions

export const getAllProducts = () => {
  return async dispatch => {
    const response = await productService.getAll()
    dispatch(initializeProducts(response))
  }
}

export const sortProductsPrice = (string) => {
  return (dispatch, getState) => {
    const products = getState().products

    if (string === 'lowToHigh') {
      const sort = [...products].sort((a, b) => a.price - b.price)
      dispatch(sortPrice(sort))
    }
    if (string === 'highToLow') {
      const sort = [...products].sort((a, b) => b.price - a.price)
      dispatch(sortPrice(sort))
    }
  }
}

export default productsSlice.reducer