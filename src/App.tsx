import { Box, Container, styled } from '@mui/material';
import { ProducstsList } from './feature/product';
import { CartCheckout } from './feature/cart';
function App() {
  return (
    <>
      <ContainerStyle>
        <ProducstsList />
        <CartCheckout />
      </ContainerStyle>
    </>
  );
}

const ContainerStyle = styled(Container)(({ theme }) => ({
  marginTop: theme.spacing(5),
  display: 'flex',
  flexWrap: 'wrap',
  position: 'relative',
}));

export default App;
