import React, { useState, useEffect } from 'react';
import { Box, Typography, Button } from '@mui/material';
import { useLocation } from 'react-router-dom';

const Confirmation = () => {
  const [confirmed, setConfirmed] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const token = params.get('token');
    if (token) {
      setConfirmed(true);
      // Lógica para confirmar al usuario en el backend
    }
  }, [location]);

  return (
    <Box display="flex" flexDirection="column" alignItems="center" justifyContent="center" height="100vh" bgcolor="#f0f2f5" p={3}>
      {confirmed ? (
        <>
          <Typography variant="h4" gutterBottom>
            Registro Confirmado
          </Typography>
          <Typography variant="body1" gutterBottom>
            Tu registro ha sido confirmado exitosamente. Por favor, acepta las condiciones de uso para continuar.
          </Typography>
          <Button variant="contained" color="primary" href="/login">
            Iniciar Sesión
          </Button>
        </>
      ) : (
        <>
          <Typography variant="h4" gutterBottom>
            Confirmación de Registro
          </Typography>
          <Typography variant="body1" gutterBottom>
            Estamos verificando tu registro...
          </Typography>
        </>
      )}
    </Box>
  );
};

export default Confirmation;
