import { createApi } from '@reduxjs/toolkit/query/react';
import { axiosBaseQuery } from '../axios-config/axios-config.ts';
import { API_BASE_URL } from '@/constants';
import { Login, LoginPayload } from '@/types';

export const loginApi = createApi({
  reducerPath: 'loginApi',
  baseQuery: axiosBaseQuery({ baseUrl: API_BASE_URL }),
  endpoints: (builder) => ({
    login: builder.mutation<Login, LoginPayload>({
      query: (payload) => ({
        url: 'login',
        method: 'POST',
        data: payload,
      }),
    }),
    me: builder.query<Login, void>({
      query: () => ({
        url: 'user/me',
      }),
    }),
  }),
});

export const { useLoginMutation, useLazyMeQuery } = loginApi;
