import { createSlice } from '@reduxjs/toolkit';
import cartService from '../services/cart';
import userService from '../services/users';
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
      const user = await userService.login(obj)
      dispatch(setUser(user.username))

      window.localStorage.setItem(
        'loggedAppUser', JSON.stringify(user)
      )
      cartService.setToken(user.token)

      dispatch(successMessage('Login successful'))
      dispatch(removeMessage())
    } catch (error) {
      dispatch(errorMessage('Wrong password or id '))
      dispatch(removeMessage())
    }
  }
}

export const userLogout = () => {
  return async dispatch => {
    dispatch(logOut())
  }
}

export const isUserLogged = () => {
  return async dispatch => {
    const UserLogged = window.localStorage.getItem('loggedAppUser')
    if (UserLogged) {
      const user = JSON.parse(UserLogged)

      dispatch(setUser(user.username))
      cartService.setToken(user.token)
    }
  }
}

export default userSlice.reducer