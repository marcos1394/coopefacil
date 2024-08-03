import React from 'react';
import { Box, Grid, Paper, Typography } from '@mui/material';

const DashboardPanel = () => {
  const options = [
    { title: "ACEPTACIÓN DE DATOS BIOMÉTRICOS", description: "Aceptación de Datos Biométricos" },
    { title: "ACEPTACIÓN DE DESIGNACIÓN", description: "Aceptación de Designación" },
    { title: "ADMINISTRACIÓN DE PUNTOS DE VENTA Y DOMICILIOS", description: "Administración de puntos de venta y domicilios" },
    { title: "ADMINISTRADOR DE RELACIONES DE CLAVE FISCAL", description: "Modificación del Perfil. Alta de servicios. Incorporación y Revocación de Relaciones" },
    { title: "APORTES EN LÍNEA", description: "Consulta de la situación personal en la seguridad social (previsional, obra social, riesgo del trabajo) respecto al destino de los aportes y las contribuciones sobre el salario" },
    { title: "ASPA - APLICACIÓN PARA SELECCIÓN DE PERSONAL AFIP", description: "Carga de Curriculum Vitae en AFIP" },
    { title: "AUTORIZACIÓN DE IMPRESIÓN DE COMPROBANTES", description: "Autorización de Impresión de Comprobantes" },
    { title: "BIENES PERSONALES WEB", description: "Presentación de la declaración jurada de bienes personales mediante servicio Web" },
    { title: "CARGA BILLETERA AFIP", description: "Carga de dinero en cuenta propia y de terceros para el cumplimiento de obligaciones" },
  ];

  return (
    <Box p={3}>
      <Grid container spacing={2}>
        {options.map((option, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Paper elevation={3} style={{ padding: '20px' }}>
              <Typography variant="h6">{option.title}</Typography>
              <Typography variant="body2">{option.description}</Typography>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default DashboardPanel;
