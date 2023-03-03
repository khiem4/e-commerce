import { createSlice } from '@reduxjs/toolkit'

const notificationSlice = createSlice({
  name: 'notification',
  initialState: {
    error: null,
    success: null
  },
  reducers: {
    success(state, action) {
      state.success = action.payload
    },
    error(state, action) {
      state.error = action.payload
    },
    remove(state, action) {
      state.error = null
      state.success = null
    }
  }
})

export const { success, remove, error } = notificationSlice.actions

export const successMessage = (message, timer) => {
  return dispatch => {
    dispatch(success(message))
    dispatch(removeMessage, timer)
  }
}

export const errorMessage = (message, timer) => {
  return dispatch => {
    dispatch(error(message))
    dispatch(removeMessage, timer)
  }
}

export const removeMessage = (timer) => {
  return dispatch => {
    setTimeout(() => {
      dispatch(remove())
    }, timer)
  }
}


export default notificationSlice.reducer