import cartReducer from './cartReducer';
import {configureStore} from '@reduxjs/toolkit';
import orderReducer from './orderReducer';
import shippingReducer from './shippingReducer';
import discountsReducer from './discountsReducer';
const store = configureStore({
  reducer: {
    cart: cartReducer,
    order: orderReducer,
    shipping: shippingReducer,
    discounts: discountsReducer,
  },
});

export default store;
