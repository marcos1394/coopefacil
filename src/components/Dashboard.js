import React from 'react';
import { Box, Typography, Grid, Card, CardContent, Button } from '@mui/material';
import { Link } from 'react-router-dom';

const Dashboard = () => {
  return (
    <Box p={3}>
      <Typography variant="h4" gutterBottom>
        Panel de Administración
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6} md={4}>
          <Card>
            <CardContent>
              <Typography variant="h6">Registro de Cobros</Typography>
              <Typography variant="body2">Registro de Cobros y Emisión de Comprobantes para Socios</Typography>
              <Button component={Link} to="/receipts" variant="contained" color="primary">
                Acceder
              </Button>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Card>
            <CardContent>
              <Typography variant="h6">Registro de Gastos</Typography>
              <Typography variant="body2">Registro de Gastos</Typography>
              <Button component={Link} to="/expenses" variant="contained" color="primary">
                Acceder
              </Button>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Card>
            <CardContent>
              <Typography variant="h6">Registro de Pagos</Typography>
              <Typography variant="body2">Registro de Pagos</Typography>
              <Button component={Link} to="/payments" variant="contained" color="primary">
                Acceder
              </Button>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Card>
            <CardContent>
              <Typography variant="h6">Carrito de Pagos</Typography>
              <Typography variant="body2">Gestión del carrito de pagos</Typography>
              <Button component={Link} to="/payment-cart" variant="contained" color="primary">
                Acceder
              </Button>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Dashboard;
