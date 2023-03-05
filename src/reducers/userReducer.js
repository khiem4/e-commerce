import { createSlice } from '@reduxjs/toolkit';
import cartService from '../services/cart';
import userService from '../services/users';
import { localCartToDb } from './cartReducer';
import { errorMessage, removeMessage, successMessage } from './notificationReducer';

const userSlice = createSlice({
  name: 'user',
  initialState: null,
  reducers: {
    setUser(state, action) {
      return action.payload
    },
    logOut(state, action) {
      return state = null
    }
  }
})

export const { setUser, logOut } = userSlice.actions

export const userLogin = (obj) => {
  return async dispatch => {
    try {
      const response = await userService.login(obj)
      dispatch(setUser(response))
      cartService.setToken(response.token)

      localStorage.setItem('loggedAppUser', JSON.stringify(response))

      dispatch(successMessage('Login successful', 2000))
    } catch (error) {
      dispatch(errorMessage('Wrong password or id ', 2000))
    }
  }
}

export const userLogout = () => {
  return async dispatch => {
    dispatch(logOut())
    localStorage.removeItem('loggedAppUser')
  }
}

export const isUserLogged = () => {
  return async dispatch => {
    const loggedUser = window.localStorage.getItem('loggedAppUser')
    if (loggedUser) {
      const user = JSON.parse(loggedUser)

      dispatch(setUser(user.username))
      cartService.setToken(user.token)
    }
  }
}

export default userSlice.reducer