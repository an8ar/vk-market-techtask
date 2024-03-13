import React from 'react';

import { styled, IconButton, Box, Button } from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

import { Iconify } from '~/components/Iconify';
import { useAppSelector } from '~/store';

type IncrementerProps = {
  quantity: number;
  onIncrease: VoidFunction;
  onDecrease: VoidFunction;
};

export function ProductCartControl({ quantity, onIncrease, onDecrease }: IncrementerProps) {
  return (
    <Box>
      {quantity === 0 ? (
        <Button variant="contained" size="small" onClick={onIncrease}>
          <ShoppingCartIcon />
        </Button>
      ) : (
        <IncrementerStyle>
          <IconButton size="small" color="inherit" onClick={onDecrease} disabled={quantity <= 1}>
            <Iconify icon="eva:minus-fill" width={16} height={16} />
          </IconButton>
          {quantity}
          <IconButton size="small" color="inherit" onClick={onIncrease} disabled={quantity >= 10}>
            <Iconify icon="eva:plus-fill" width={16} height={16} />
          </IconButton>
        </IncrementerStyle>
      )}
    </Box>
  );
}

const IncrementerStyle = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  height: '100%',
  padding: theme.spacing(0.5, 0.75),
  borderRadius: theme.shape.borderRadius,
  border: `solid 1px #dbdad5`,
}));
