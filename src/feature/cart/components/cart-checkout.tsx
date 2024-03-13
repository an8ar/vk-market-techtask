import { Box, Button, Stack, Typography, styled } from '@mui/material';
import React from 'react';
import { useAppDispatch, useAppSelector } from '~/store';
import { removeAll } from '../cart-slice';

export function CartCheckout() {
  const { totalPrice, totalQuantity, products } = useAppSelector((state) => state.cartSlice);
  const dispatch = useAppDispatch();

  const handleDeleteAll = () => {
    dispatch(removeAll());
  };
  return (
    <BoxStyle>
      <Stack spacing={2}>
        <Typography>Итого: {`${totalPrice.toFixed(2)} руб.`}</Typography>
        <Typography variant="body2">Колличество всех товаров: {totalQuantity}</Typography>

        <Box sx={{ display: 'flex', justifyContent: 'space-around' }}>
          <Button>Checkout</Button>

          {products.length > 0 && (
            <Button variant="contained" color="error" size="small" onClick={handleDeleteAll}>
              Очистить все
            </Button>
          )}
        </Box>
      </Stack>
    </BoxStyle>
  );
}

const BoxStyle = styled(Box)(({ theme }) => ({
  flex: 1,
  padding: theme.spacing(2),
  height: '100%',
  border: `solid 1px black`,
  backgroundColor: theme.palette.background.paper,
  borderRadius: theme.spacing(2),
  position: 'sticky',
  top: `${theme.spacing(4)}`,
  alignSelf: 'flex-start',
}));
