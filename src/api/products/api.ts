import { createApi } from '@reduxjs/toolkit/query/react';

import { baseQuery } from '..';
import { GetProductsResponse, GetProductsRequest } from './type';

export const PRODUCTS_API_REDUCER_KEY = 'productsApi';

const productsApi = createApi({
  baseQuery: baseQuery,
  reducerPath: PRODUCTS_API_REDUCER_KEY,
  endpoints: (builder) => ({
    getProducts: builder.query<GetProductsResponse, GetProductsRequest>({
      query: () => `/products`,
    }),
  }),
});
export default productsApi;
