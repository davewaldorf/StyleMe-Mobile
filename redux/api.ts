import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { User } from '../types/User';

const BASE_URL = 'https://style-me-server.vercel.app';

export const api = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
  endpoints: (builder) => ({
    signUp: builder.mutation({
      query: (user: User) => ({
        url: '/register',
        method: 'POST',
        body: user,
      }),
    }),
    signIn: builder.mutation({
      query: (user: User) => ({
        url: '/login',
        method: 'POST',
        body: user,
      }),
    }),
    getProfile: builder.query({
      query: (userId: string) => `/profile/${userId}`,
    }),
    getLooks: builder.query({
      query: () => '/looks',
    }),
    addLook: builder.mutation({
      query: (look: any) => {
        const userId = localStorage.getItem('userId');
        return {
          url: `/looks/${userId}`,
          method: 'POST',
          body: look,
        };
      },
    }),
    uploadImage: builder.mutation({
      query: (image: any) => ({
        url: '/upload',
        method: 'POST',
        body: image,
      }),
    }),
    addToWardrobe: builder.mutation({
      query: (wardrobeItem: any) => {
        const userId = localStorage.getItem('userId');
        return {
          url: `/wardrobe/${userId}`,
          method: 'POST',
          body: wardrobeItem,
        };
      },
    }),
    getLikes: builder.query({
      query: () => {
        const userId = localStorage.getItem('userId');
        return `/looks/${userId}/likes`;
      },
    }),
    addLike: builder.mutation({
      query: (lookId: string) => {
        const userId = localStorage.getItem('userId');
        return {
          url: `/looks/${lookId}/${userId}`,
          method: 'PUT',
        };
      },
    }),
    logout: builder.mutation({
      query: () => {
        localStorage.removeItem('authenticated');
        localStorage.removeItem('userId');
        return {
          url: '/logout',
          method: 'GET',
        };
      },
    }),
  }),
});

export const {
  useSignUpMutation,
  useSignInMutation,
  useGetProfileQuery,
  useGetLooksQuery,
  useAddLookMutation,
  useUploadImageMutation,
  useAddToWardrobeMutation,
  useGetLikesQuery,
  useAddLikeMutation,
  useLogoutMutation,
} = api;
