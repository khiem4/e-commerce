import { createSlice } from '@reduxjs/toolkit'

const notificationSlice = createSlice({
  name: 'notification',
  initialState: [],
  reducers: {
    notify(state, action) {
      return state.concat(action.payload)
    },
    remove(state, action) {
      return state.slice(1)
    }
  }
})

export const { notify, remove } = notificationSlice.actions

export const messageNotify = (message) => {
  return dispatch => {
    dispatch(notify(message))
  }
}

export const removeMessage = () => {
  return dispatch => {
    dispatch(remove())
  }
}


export default notificationSlice.reducer