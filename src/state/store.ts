import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cart/cartSlice";
import filterReducer from "./filter/filterSlice";
import searchReducer from "./search/searchSlice";

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    filter: filterReducer,
    search: searchReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
