import React from 'react';
import { Link } from 'react-router-dom';
import { Box, Button, Typography } from '@mui/material';

const Welcome = () => {
  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      height="100vh"
      bgcolor="#f0f2f5"
      p={3}
    >
      <Typography variant="h3" gutterBottom>
        Bienvenido a Coopefacil
      </Typography>
      <Typography variant="h6" gutterBottom>
        Por favor, inicia sesión o regístrate para continuar.
      </Typography>
      <Box mt={2}>
        <Button variant="contained" color="primary" component={Link} to="/login">
          Iniciar Sesión
        </Button>
      </Box>
      <Box mt={2}>
        <Button variant="outlined" color="primary" component={Link} to="/register">
          Registrarse
        </Button>
      </Box>
    </Box>
  );
};

export default Welcome;
