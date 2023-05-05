import {createSlice} from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: 'cart',
  initialState: {cart: []},
  reducers: {
    addToCart: (state, action) => {
      const itemInCart = state.cart.find(item => item.id === action.payload.id);
      if (itemInCart) {
        itemInCart.quantity++;
      } else {
        state.cart.push({...action.payload, quantity: 1});
      }
    },
    removeFromCart: (state, action) => {
      const removeFromCart = state.cart.filter(
        item => item.id !== action.payload.id,
      );
      state.cart = removeFromCart;
    },
    incrementQuantity: (state, action) => {
      const itemInCart = state.cart.find(item => item.id === action.payload.id);
      if (itemInCart) itemInCart.quantity++;
    },
    decrementQuantity: (state, action) => {
      const itemInCart = state.cart.find(item => item.id === action.payload.id);
      if (itemInCart && itemInCart.quantity == 1) {
        const removeFromCart = state.cart.filter(
          item => item.id !== action.payload.id,
        );
        state.cart = removeFromCart;
      } else itemInCart.quantity--;
    },
    clearCart: state => {
      state.cart = [];
    },
  },
});

export const {
  addToCart,
  removeFromCart,
  incrementQuantity,
  decrementQuantity,
  clearCart,
} = cartSlice.actions;
export default cartSlice.reducer;
