import axios from 'axios'

const create = async (credentials) => {
  const response = await axios.post('/api/user', credentials)
  return response.data
}

const login = async (credentials) => {
  const response = await axios.post('/api/login', credentials)
  return response.data
}

const userService = {
  create,
  login,
}

export default userService
