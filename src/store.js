import { configureStore } from "@reduxjs/toolkit";
const createDebugger = require('redux-flipper').default;


import usersReducer from './slices/user_slice';
import contactReducer from './slices/contact_slice'
import booksReducer from './slices/books.slice'
import cartsReducer from './slices/cart.slice'

const reducer = {
  books: booksReducer,
  users: usersReducer,
  contacts: contactReducer,
  carts: cartsReducer
};

const store = configureStore({ 
  reducer,  middleware: (getDefaultMiddleware) =>
  getDefaultMiddleware()
    .concat(createDebugger()),
  devTools: true });
// The store now has redux-thunk added and the Redux DevTools Extension is turned on

export default store;
