import { configureStore } from "@reduxjs/toolkit";
import bookSlice from "./features/books/bookSlice";
import { api } from "./api/apiSlice";
import userSlice from "./features/user/userSlice";


const store = configureStore({
  reducer: {
    book: bookSlice,
    user:userSlice,
    [api.reducerPath]: api.reducer
  },
  middleware:(getDefaultMiddleware)=> getDefaultMiddleware().concat(api.middleware),
});

//for typescript type
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export default store;