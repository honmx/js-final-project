import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { GetUsersParamsType, GetUsersResponseType } from "./types/GetUsersType";
import { RegisterParamsType, RegisterResponseType } from "./types/RegisterType";
import { GetUserParamsType, GetUserResponseType } from "./types/GetUserType";

export const api = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({ baseUrl: "https://reqres.in/api" }),
  endpoints: (builder) => ({
    getUsers: builder.query<GetUsersResponseType, GetUsersParamsType>({
      query: ({ page }) => ({
        url: `/users`,
        method: "GET",
        params: { page },
      }),
      keepUnusedDataFor: 0,
    }),
    getUser: builder.query<GetUserResponseType, GetUserParamsType>({
      query: ({ id }) => ({
        url: `/users/${id}`,
        method: "GET",
      }),
      keepUnusedDataFor: 0,
    }),
    register: builder.mutation<RegisterResponseType, RegisterParamsType>({
      query: ({ name, email, password, avatar }) => ({
        url: `/register`,
        method: "POST",
        body: {
          name,
          email,
          password,
          avatar,
        },
      }),
    }),
  }),
});

export const { useGetUsersQuery, useGetUserQuery, useRegisterMutation } = api;
