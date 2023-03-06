import { createSlice } from '@reduxjs/toolkit'

const notificationSlice = createSlice({
  name: 'notification',
  initialState: {
    error: null,
    success: null,
  },
  reducers: {
    success(state, action) {
      state.success = action.payload
    },
    error(state, action) {
      state.error = action.payload
    },
    remove(state, action) {
      state.success = action.payload
      state.error = action.payload
    },
  },
})

export const { success, remove, error } = notificationSlice.actions

export const removeMessage = (timer) => (dispatch) => {
  setTimeout(() => {
    dispatch(remove(null))
  }, timer)
}

export const successMessage = (message, timer) => (dispatch) => {
  dispatch(success(message))
  dispatch(removeMessage(timer))
}

export const errorMessage = (message, timer) => (dispatch) => {
  dispatch(error(message))
  dispatch(removeMessage(timer))
}

export default notificationSlice.reducer
