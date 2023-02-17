import axios from 'axios'
const baseUrl = 'http://localhost:3001/api/cart'

const getCart = async () => {
  const response = await axios.get(baseUrl)
  return response.data
}

const post = async (obj) => {
  const response = await axios.post(baseUrl, obj)
  return response.data
}

const update = async (obj) => {
  const response = await axios.put(baseUrl, obj)
  return response.data
}

const remove = async (id) => {
  const response = await axios.delete(`${baseUrl}/${id}`)
  return response.data
}

const cartService = {
  post,
  getCart,
  update,
  remove
}

export default cartService
