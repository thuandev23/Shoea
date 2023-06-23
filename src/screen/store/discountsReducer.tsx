import {createSlice} from '@reduxjs/toolkit';

const discountSlice = createSlice({
  name: 'discounts',
  initialState: {selectedDiscount: null},
  reducers: {
    setSelectedDiscounts: (state, action) => {
      state.selectedDiscount = action.payload;
    },
  },
});

export const {setSelectedDiscounts} = discountSlice.actions;
export default discountSlice.reducer;
