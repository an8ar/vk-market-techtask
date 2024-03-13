import React from 'react';
import productsApi from '~/api/products/api';
import { ProductCard } from './product-card';
import { Stack, CircularProgress, styled, Divider } from '@mui/material';

export function ProducstsList() {
  const { data, isLoading } = productsApi.endpoints.getProducts.useQuery();
  console.log(data);

  return (
    <ProductBoxStyle spacing={2} divider={<Divider orientation="horizontal" flexItem />}>
      {isLoading ? (
        <CircularProgress />
      ) : (
        data?.map((product) => <ProductCard product={product} key={product.id} />)
      )}
    </ProductBoxStyle>
  );
}

const ProductBoxStyle = styled(Stack)(({ theme }) => ({
  flex: 3,
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  gap: theme.spacing(2),
  padding: theme.spacing(2),
}));
