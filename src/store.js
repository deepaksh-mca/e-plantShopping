import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './CartSlice';

const calculateTotalQuantity = () => {
 return CartItems ? CartItems.reduce((total, item) => total + item.quantity, 0) : 0;
  };
  
 const store = configureStore({
    reducer: {
        cart: cartReducer,
    },
});
export default store
