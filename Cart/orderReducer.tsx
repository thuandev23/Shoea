import {createSlice} from '@reduxjs/toolkit';

const orderSlice = createSlice({
  name: 'order',
  initialState: {orderedProducts: []},
  reducers: {
    setOrderedProducts: (state, action) => {
      state.orderedProducts = [...state.orderedProducts, ...action.payload];
    },
  },
});

export const {setOrderedProducts} = orderSlice.actions;
export default orderSlice.reducer;
