import React, { useState } from 'react';
import { Box, Button, Typography, Checkbox, FormControlLabel } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const Welcome = () => {
  const [accepted, setAccepted] = useState(false);
  const navigate = useNavigate();

  const handleAccept = () => {
    const currentDate = new Date();
    localStorage.setItem('acceptanceDate', currentDate.toISOString());
    navigate('/home');
  };

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
      <img src="/logo.png" alt="Coopefacil Logo" style={{ marginBottom: '20px' }} />
      <Typography variant="h4" gutterBottom>
        Bienvenido a Coopefacil
      </Typography>
      <Typography variant="h6" gutterBottom>
        Por favor, lee y acepta las condiciones de uso para continuar.
      </Typography>
      <Box mt={2}>
        <FormControlLabel
          control={<Checkbox checked={accepted} onChange={(e) => setAccepted(e.target.checked)} />}
          label="Acepto las condiciones de uso"
        />
      </Box>
      <Button variant="contained" color="primary" onClick={handleAccept} disabled={!accepted}>
        Aceptar y Continuar
      </Button>
    </Box>
  );
};

export default Welcome;
