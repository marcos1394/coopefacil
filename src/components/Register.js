// src/components/Register.js
import React, { useState } from 'react';
import { Box, Button, MenuItem, TextField, Typography } from '@mui/material';

const Register = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('alumno'); // 'alumno', 'administrador', 'superusuario'
  const [additionalFields, setAdditionalFields] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = {
      email,
      password,
      role,
      ...additionalFields,
    };
    // Guardar los datos en una base de datos temporal (localStorage)
    localStorage.setItem('formData', JSON.stringify(formData));
    console.log('Datos guardados:', formData);
  };

  const handleAdditionalFieldChange = (field, value) => {
    setAdditionalFields({
      ...additionalFields,
      [field]: value,
    });
  };

  const renderAdditionalFields = () => {
    switch (role) {
      case 'alumno':
        return (
          <>
            <Box mb={2}>
              <TextField
                label="Nombre"
                variant="outlined"
                fullWidth
                onChange={(e) => handleAdditionalFieldChange('nombre', e.target.value)}
                required
              />
            </Box>
            <Box mb={2}>
              <TextField
                label="Apellido"
                variant="outlined"
                fullWidth
                onChange={(e) => handleAdditionalFieldChange('apellido', e.target.value)}
                required
              />
            </Box>
            <Box mb={2}>
              <TextField
                label="Grado"
                variant="outlined"
                fullWidth
                onChange={(e) => handleAdditionalFieldChange('grado', e.target.value)}
                required
              />
            </Box>
          </>
        );
      case 'administrador':
        return (
          <>
            <Box mb={2}>
              <TextField
                label="Nombre"
                variant="outlined"
                fullWidth
                onChange={(e) => handleAdditionalFieldChange('nombre', e.target.value)}
                required
              />
            </Box>
            <Box mb={2}>
              <TextField
                label="Apellido"
                variant="outlined"
                fullWidth
                onChange={(e) => handleAdditionalFieldChange('apellido', e.target.value)}
                required
              />
            </Box>
            <Box mb={2}>
              <TextField
                label="Nombre de la Escuela"
                variant="outlined"
                fullWidth
                onChange={(e) => handleAdditionalFieldChange('nombreEscuela', e.target.value)}
                required
              />
            </Box>
            <Box mb={2}>
              <TextField
                label="CUIT de la Escuela"
                variant="outlined"
                fullWidth
                onChange={(e) => handleAdditionalFieldChange('cuitEscuela', e.target.value)}
                required
              />
            </Box>
          </>
        );
      case 'superusuario':
        return (
          <>
            <Box mb={2}>
              <TextField
                label="Nombre"
                variant="outlined"
                fullWidth
                onChange={(e) => handleAdditionalFieldChange('nombre', e.target.value)}
                required
              />
            </Box>
            <Box mb={2}>
              <TextField
                label="Apellido"
                variant="outlined"
                fullWidth
                onChange={(e) => handleAdditionalFieldChange('apellido', e.target.value)}
                required
              />
            </Box>
            <Box mb={2}>
              <TextField
                label="Organización"
                variant="outlined"
                fullWidth
                onChange={(e) => handleAdditionalFieldChange('organizacion', e.target.value)}
                required
              />
            </Box>
          </>
        );
      default:
        return null;
    }
  };

  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      height="100vh"
      bgcolor="#f0f2f5"
    >
      <Typography variant="h4" gutterBottom>
        Registrarse
      </Typography>
      <form onSubmit={handleSubmit}>
        <Box mb={2}>
          <TextField
            label="Email"
            variant="outlined"
            fullWidth
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </Box>
        <Box mb={2}>
          <TextField
            label="Contraseña"
            variant="outlined"
            type="password"
            fullWidth
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </Box>
        <Box mb={2}>
          <TextField
            select
            label="Rol"
            variant="outlined"
            fullWidth
            value={role}
            onChange={(e) => setRole(e.target.value)}
          >
            <MenuItem value="alumno">Alumno</MenuItem>
            <MenuItem value="administrador">Administrador de Escuela</MenuItem>
            <MenuItem value="superusuario">Superusuario</MenuItem>
          </TextField>
        </Box>
        {renderAdditionalFields()}
        <Button variant="contained" color="primary" type="submit">
          Registrarse
        </Button>
      </form>
    </Box>
  );
};

export default Register;
