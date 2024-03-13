import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { CartProduct, CartState, AddPayload, RemovePayload } from './types';
const initialState: CartState = {
  products: [],
  totalPrice: 0,
  totalQuantity: 0,
};

export const cartSlice = createSlice({
  name: 'cartSlice',
  initialState,
  reducers: {
    addProduct(state, action: PayloadAction<AddPayload>) {
      const index = state.products.findIndex((item) => item.id === action.payload.id);
      if (index === -1) {
        state.products.push({ ...action.payload });
      } else {
        state.products[index] = action.payload;
      }

      state.totalPrice = calculateTotalPrice(state.products);
      state.totalQuantity = calculateTotalQuantity(state.products);
    },
    incrementProductQuantity(state, action: PayloadAction<{ id: number }>) {
      const existingIndex = state.products.findIndex((item) => item.id === action.payload.id);
      if (existingIndex !== -1) {
        state.products[existingIndex].quantity += 1;
      }
      state.totalPrice = calculateTotalPrice(state.products);
      state.totalQuantity = calculateTotalQuantity(state.products);
    },
    decrementProductQuantity(state, action: PayloadAction<{ id: number }>) {
      const existingIndex = state.products.findIndex((item) => item.id === action.payload.id);
      if (existingIndex !== -1) {
        const newQuantity = state.products[existingIndex].quantity - 1;
        if (newQuantity > 0) {
          state.products[existingIndex].quantity = newQuantity;
        } else {
          state.products.splice(existingIndex, 1);
        }
      }
      state.totalPrice = calculateTotalPrice(state.products);
      state.totalQuantity = calculateTotalQuantity(state.products);
    },
    removeAll(state) {
      state.products = [];
      state.totalPrice = 0;
      state.totalQuantity = 0;
    },

    removeProduct(state, action: PayloadAction<RemovePayload>) {
      const items = state.products.filter((products) => products.id !== action.payload.id);
      state.products = items;

      state.totalPrice = calculateTotalPrice(state.products);
      state.totalQuantity = calculateTotalQuantity(state.products);
    },
  },
});

export const {
  addProduct,
  removeAll,
  removeProduct,
  incrementProductQuantity,
  decrementProductQuantity,
} = cartSlice.actions;

export const cartReducer = cartSlice.reducer;

function calculateTotalPrice(products: CartProduct[]) {
  return products.reduce(
    (cartTotal, cartProduct) => cartTotal + cartProduct.price * cartProduct.quantity,
    0,
  );
}
function calculateTotalQuantity(products: CartProduct[]) {
  return products.reduce((cartTotal, cartProduct) => cartTotal + cartProduct.quantity, 0);
}
