// src/components/Dashboard.js
import React from 'react';
import { Box, Typography } from '@mui/material';
import { Link } from 'react-router-dom';

const Dashboard = () => {
  return (
    <Box>
      <Typography variant="h4" gutterBottom>
        Dashboard
      </Typography>
      <Box>
        <Link to="/receipts">Registro de Cobros</Link>
      </Box>
      <Box>
        <Link to="/expenses">Registro de Gastos</Link>
      </Box>
      <Box>
        <Link to="/payments">Registro de Pagos</Link>
      </Box>
    </Box>
  );
};

export default Dashboard;
