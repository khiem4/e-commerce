import axios from 'axios'

const baseUrl = '/api/cart'

let token = null

const setToken = (newToken) => {
  token = `Bearer ${newToken}`
}

const getCart = async () => {
  const response = await axios.get(baseUrl)
  return response.data
}

const post = async (obj) => {
  const config = {
    headers: { authorization: token },
  }

  const response = await axios.post(baseUrl, obj, config)
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
  remove,
  setToken,
}

export default cartService
