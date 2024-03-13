import { fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import queryString from 'query-string';

export const baseQuery = fetchBaseQuery({
  baseUrl: 'https://fakestoreapi.com',
  paramsSerializer: (params) => queryString.stringify(params),
});
