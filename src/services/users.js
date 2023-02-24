import axios from 'axios'

const create = async (credentials) => {
  const response = await axios.post('http://localhost:3001/api/users', credentials)
  return response.data
}

const login = async (credentials) => {
  const response = await axios.post('http://localhost:3001/api/login', credentials)
  return response.data
}

const userService = {
  create,
  login
}

export default userService