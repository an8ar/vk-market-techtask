import React, { useMemo } from 'react';
import GradeIcon from '@mui/icons-material/Grade';
import { Box, Typography, Button } from '@mui/material';
import { Image } from '~/components/image';
import { Product } from '../types';
import DeleteIcon from '@mui/icons-material/Delete';
import { useAppDispatch, useAppSelector } from '~/store';
import {
  incrementProductQuantity,
  addProduct,
  decrementProductQuantity,
  removeProduct,
} from '~/feature/cart';
import { ProductCartControl } from './product-cart-control';
import { ProductImage } from './product-image';

interface Props {
  product: Product;
}

export function ProductCard({ product }: Props) {
  const { id, title, description, image, rating, category, price } = product;

  const { products } = useAppSelector((store) => store.cartSlice);

  const cartProduct = products.find((item) => item.id === product.id);

  const dispatch = useAppDispatch();

  const onIncrease = () => {
    if (!cartProduct) {
      dispatch(addProduct({ id, price, title, quantity: 1 }));
    } else {
      dispatch(incrementProductQuantity({ id }));
    }
  };
  const onDecrease = () => {
    if (cartProduct) {
      dispatch(decrementProductQuantity({ id }));
    }
  };

  const onRemove = () => {
    dispatch(removeProduct({ id }));
  };

  return (
    <Box sx={{ display: 'flex', gap: 4 }}>
      <Box>
        <ProductImage product={product} />
      </Box>
      <Box>
        <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
          <Typography variant="caption" color={'GrayText'}>
            {category}
          </Typography>
          <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <GradeIcon sx={{ height: 16, color: 'gold' }} />
            <Typography variant="caption" color={'InfoText'}>
              {rating.rate}
              {`(${rating.count})`}
            </Typography>
          </Box>
        </Box>
        <Typography variant="h5">{title}</Typography>
        <Typography variant="caption" sx={{ color: 'CaptionText' }}>
          {description}
        </Typography>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', marginTop: 2 }}>
          <Typography variant="body1"> {`${price} $`}</Typography>
          <Box sx={{ display: 'flex', gap: 2, alignItems: 'center' }}>
            <ProductCartControl
              onDecrease={onDecrease}
              onIncrease={onIncrease}
              quantity={cartProduct ? cartProduct.quantity : 0}
            />
            {(cartProduct?.quantity as number) > 0 && (
              <Button variant="text" size="small" onClick={onRemove}>
                <DeleteIcon />
              </Button>
            )}
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
