import {PayloadAction, createSlice} from '@reduxjs/toolkit';

interface CartItem {
  id: number;
  quantity: number;
}
const cartSlice = createSlice({
  name: 'cart',
  initialState: {cart: [] as CartItem[]},
  reducers: {
    addToCart: (state, action: PayloadAction<{id: number}>) => {
      const itemInCart = state.cart.find(item => item.id === action.payload.id);
      if (itemInCart) {
        itemInCart.quantity++;
      } else {
        state.cart.push({...action.payload, quantity: 1});
      }
    },
    removeFromCart: (state, action: PayloadAction<{id: number}>) => {
      const removeFromCart = state.cart.filter(
        item => item.id !== action.payload.id,
      );
      state.cart = removeFromCart;
    },
    incrementQuantity: (state, action: PayloadAction<{id: number}>) => {
      const itemInCart = state.cart.find(item => item.id === action.payload.id);
      if (itemInCart) itemInCart.quantity++;
    },
    decrementQuantity: (state, action: PayloadAction<{id: number}>) => {
      const itemInCart = state.cart.find(item => item.id === action.payload.id);
      if (itemInCart && itemInCart.quantity == 1) {
        const removeFromCart = state.cart.filter(
          item => item.id !== action.payload.id,
        );
        state.cart = removeFromCart;
      } else if (itemInCart) itemInCart.quantity--;
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
