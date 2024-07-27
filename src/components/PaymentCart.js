import React, { useState } from 'react';
import { Box, Typography, Button, List, ListItem, ListItemText } from '@mui/material';

const PaymentCart = () => {
  const [cart, setCart] = useState([]);

  const handleAddToCart = (item) => {
    setCart([...cart, item]);
  };

  const handleRemoveFromCart = (index) => {
    const newCart = [...cart];
    newCart.splice(index, 1);
    setCart(newCart);
  };

  const handleCheckout = () => {
    console.log('Checkout', cart);
  };

  return (
    <Box p={3}>
      <Typography variant="h5">Carrito de Pagos</Typography>
      <List>
        {cart.map((item, index) => (
          <ListItem key={index}>
            <ListItemText primary={item} />
            <Button onClick={() => handleRemoveFromCart(index)} variant="contained" color="secondary">
              Eliminar
            </Button>
          </ListItem>
        ))}
      </List>
      <Button onClick={handleCheckout} variant="contained" color="primary">
        Realizar Pago
      </Button>
    </Box>
  );
};

export default PaymentCart;
