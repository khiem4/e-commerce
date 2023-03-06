import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { configureStore } from '@reduxjs/toolkit'
import { Provider } from 'react-redux'
import App from './App'
import './index.css'
import notificationReducer from './reducers/notificationReducer'
import cartReducer from './reducers/cartReducer'
import productsReducer from './reducers/productsReducer'
import userReducer from './reducers/userReducer'
import searchReducer from './reducers/searchReducer'

const store = configureStore({
  reducer: {
    products: productsReducer,
    cart: cartReducer,
    notification: notificationReducer,
    user: userReducer,
    search: searchReducer,
  },
})

// eslint-disable-next-line no-console
console.log(store.getState())

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
