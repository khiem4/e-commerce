import axios from 'axios'

const getAll = async () => {
  const response = await axios.get('https://dummyjson.com/products?limit=100')
  return response.data.products
}

const productService = {
  getAll,
}

export default productService
