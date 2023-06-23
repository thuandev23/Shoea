import {createSlice} from '@reduxjs/toolkit';

const shippingSlice = createSlice({
  name: 'shipping',
  initialState: {selectedShippingId: null},
  reducers: {
    setSelectedShippingId: (state, action) => {
      state.selectedShippingId = action.payload;
    },
  },
});

export const {setSelectedShippingId} = shippingSlice.actions;
export default shippingSlice.reducer;
