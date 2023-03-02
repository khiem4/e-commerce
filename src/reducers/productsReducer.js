import { createSlice } from '@reduxjs/toolkit';
import productService from '../services/products';

const productsSlice = createSlice({
  name: 'products',
  initialState: [],
  reducers: {
    initializeProducts(state, action) {
      return action.payload
    }
  }
})

export const { initializeProducts } = productsSlice.actions

export const getAllProducts = () => {
  return async dispatch => {
    const response = await productService.getAll()
    dispatch(initializeProducts(response))
  }
}


export default productsSlice.reducer