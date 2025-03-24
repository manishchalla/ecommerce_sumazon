import { fetchBaseQuery, createApi } from '@reduxjs/toolkit/query/react';
import { BASE_URL } from '../constants';
import { logout } from './authSlice';

// Create baseQuery function using fetchBaseQuery
const baseQuery = fetchBaseQuery({
  baseUrl: BASE_URL,
});

// Define a wrapper function to add authentication handling
async function baseQueryWithAuth(args, api, extra) {
  // Call baseQuery to perform the actual HTTP request
  const result = await baseQuery(args, api, extra);
  
  // Dispatch the logout action on 401 Unauthorized error
  if (result.error && result.error.status === 401) {
    api.dispatch(logout());
  }
  
  return result;
}

// Create the API using createApi
export const apiSlice = createApi({
  baseQuery: baseQueryWithAuth, // Use the customized baseQuery
  tagTypes: ['Product', 'Order', 'User'],
  endpoints: (builder) => ({}),
});
