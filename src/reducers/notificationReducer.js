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

export const successMessage = (message) => {
  return dispatch => {
    dispatch(success(message))
  }
}

export const errorMessage = (message) => {
  return dispatch => {
    dispatch(error(message))
  }
}

export const removeMessage = (number) => {
  return dispatch => {
    setTimeout(() => {
      dispatch(remove())
    }, number)
  }
}


export default notificationSlice.reducer