// import { useState, useEffect, createContext } from 'react';
// import productService from '../services/products';

//                      CHANGE TO REDUX

// const CartContext = createContext()

// export const CartContextProvider = (props) => {
//   const [cart, setCart] = useState([])

//   useEffect(() => {
//     productService
//       .getCart()
//       .then(res => setCart(res))
//       .catch(err => console.log(err))
//   }, [])

//   async function addToCart(product, quantity) {
//     const item = {
//       title: product.title,
//       thumbnail: product.thumbnail,
//       price: product.price,
//       quantity,
//     }

//     const foundProductInCart = cart.find(product =>
//       product.title === item.title)

//     if (foundProductInCart) {
//       if (foundProductInCart.quantity === 1 && quantity === -1) {
//         return null
//       }

//       const updateQuantity = {
//         ...item,
//         quantity: foundProductInCart.quantity + quantity,
//         id: foundProductInCart.id
//       }

//       const response = await productService.update(updateQuantity)
//       const cartUpdated = cart.map(product =>
//         product.title !== response.title ? product : response)
//       return setCart(cartUpdated)
//     }
//     const response = await productService.post(item)
//     return setCart(cart.concat(response))
//   }

//   const handleRemove = async (id) => {
//     await productService.remove(id)
//     const cartUpdated = cart.filter(product => product.id !== id)
//     setCart(cartUpdated)
//   }

//   const value = {
//     cart,
//     setCart,
//     addToCart,
//     handleRemove
//   }

//   return (
//     <CartContext.Provider value={value}>
//       {props.children}
//     </CartContext.Provider>
//   )
// }

// export default CartContext