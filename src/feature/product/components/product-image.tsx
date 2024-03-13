import React, { useMemo } from 'react';

import { styled, Badge, BadgeProps } from '@mui/material';

import { Image } from '~/components/image';
import { useAppSelector } from '~/store';

import { Product } from '../types';

type Props = {
  product: Product;
};

export function ProductImage({ product }: Props) {
  const cartProducts = useAppSelector((state) => state.cartSlice.products);

  const badgeNumber = useMemo(() => {
    const cartProduct = cartProducts.find((item) => item.id === product.id);
    return cartProduct?.quantity || 0;
  }, [cartProducts, product.id]);

  return (
    <BadgeStyle color="primary" badgeContent={badgeNumber}>
      <ImageStyle src={product.image} alt={product.title} />
    </BadgeStyle>
  );
}

const BadgeStyle = styled(Badge)<BadgeProps>(({ theme }) => ({
  '& .MuiBadge-badge': {
    right: 20,
    top: 2,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: theme.spacing(1),
    height: theme.spacing(4),
    width: theme.spacing(4),
    borderRadius: '50%',
  },
}));
const ImageStyle = styled(Image)(({ theme }) => ({
  height: 250.8,
  width: 200,
  marginRight: theme.spacing(2),
  flexShrink: 0,
}));
