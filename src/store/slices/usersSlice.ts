import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { UserType } from "../../types/UserType";
import { api } from "../../services/api";
import { MyProfileUserType } from "../../types/ProfileUserType";

export type UserFilterType = "all" | "odd" | "even";

export type UsersStateType = {
  users: UserType[];
  page: number;
  total: number;
  total_pages: number;
  filter: UserFilterType;
  currentUser: MyProfileUserType;
};

const initialState: UsersStateType = {
  users: [],
  page: 1,
  total: 0,
  total_pages: 0,
  filter: "all",
  currentUser: {} as MyProfileUserType,
};

export const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    setPage: (state, action: PayloadAction<number>) => {
      state.page = action.payload;
    },
    setFilter: (state, action: PayloadAction<UsersStateType["filter"]>) => {
      state.filter = action.payload;
    },
    setUser: (state, action: PayloadAction<MyProfileUserType>) => {
      state.currentUser = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addMatcher(
      api.endpoints.getUsers.matchFulfilled,
      (state, action) => {
        state.users = action.payload.data;
        state.total = action.payload.total;
        state.total_pages = action.payload.total_pages;
      }
    );
  },
});

export const { setPage, setFilter, setUser } = usersSlice.actions;

export default usersSlice.reducer;
