import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import { api } from "../services/api";
import usersSlice from "./slices/usersSlice";

export const store = configureStore({
  reducer: {
    users: usersSlice,
    [api.reducerPath]: api.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware),
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
