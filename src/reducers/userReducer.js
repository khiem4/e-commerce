import { createSlice } from '@reduxjs/toolkit'
import cartService from '../services/cart'
import userService from '../services/users'
import { errorMessage, successMessage } from './notificationReducer'

const userSlice = createSlice({
  name: 'user',
  initialState: null,
  reducers: {
    setUser(state, action) {
      return action.payload
    },
    logOut() {
      return null
    },
  },
})

export const { setUser, logOut } = userSlice.actions

export const userLogin = (obj) => async (dispatch) => {
  try {
    const response = await userService.login(obj)
    dispatch(setUser(response))
    cartService.setToken(response.token)

    localStorage.setItem('loggedUser', JSON.stringify(response))

    dispatch(successMessage('Login successful', 2000))
  } catch (error) {
    dispatch(errorMessage('Wrong password or id', 60000))
  }
}

export const userLogout = () => async (dispatch) => {
  localStorage.removeItem('loggedUser')
  dispatch(logOut())
}

export const isUserLogged = () => async (dispatch) => {
  const loggedUser = JSON.parse(localStorage.getItem('loggedUser'))

  if (loggedUser) {
    dispatch(setUser(loggedUser.username))
    cartService.setToken(loggedUser.token)
  }
}

export default userSlice.reducer
