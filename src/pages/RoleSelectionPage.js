import React from 'react';
import { Box, Button, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const RoleSelectionPage = () => {
  const navigate = useNavigate();

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
      <Typography variant="h4" gutterBottom>
        Selecciona tu Rol
      </Typography>
      <Box mt={2} display="flex" flexDirection="column" alignItems="center">
        <Button
          variant="contained"
          color="primary"
          onClick={() => navigate('/register/client')}
          style={{ margin: '10px', width: '250px' }}
        >
          Cliente (Institución Educativa)
        </Button>
        <Button
          variant="outlined"
          color="primary"
          onClick={() => navigate('/register/supporter')}
          style={{ margin: '10px', width: '250px' }}
        >
          Usuario Aportante
        </Button>
      </Box>
    </Box>
  );
};

export default RoleSelectionPage;
