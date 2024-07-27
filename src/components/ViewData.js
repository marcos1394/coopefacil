import React from 'react';
import { Box, Typography } from '@mui/material';

const ViewData = () => {
  const formData = JSON.parse(localStorage.getItem('formData'));

  return (
    <Box display="flex" flexDirection="column" alignItems="center" justifyContent="center" height="100vh" bgcolor="#f0f2f5" p={3}>
      <Typography variant="h4" gutterBottom>
        Datos Guardados
      </Typography>
      <Box>
        <Typography variant="body1">
          <strong>Email:</strong> {formData?.email}
        </Typography>
        <Typography variant="body1">
          <strong>Rol:</strong> {formData?.role}
        </Typography>
        {formData && Object.keys(formData).map(key => (
          key !== 'email' && key !== 'role' && key !== 'password' && (
            <Typography key={key} variant="body1">
              <strong>{key}:</strong> {formData[key]}
            </Typography>
          )
        ))}
      </Box>
    </Box>
  );
};

export default ViewData;
