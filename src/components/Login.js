import React, { useState } from 'react';
import { Box, Button, TextField, Typography, MenuItem, FormControl, InputLabel, Select } from '@mui/material';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('cliente');
  const [additionalInfo, setAdditionalInfo] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(`Email: ${email}, Password: ${password}, Role: ${role}, Additional Info: ${additionalInfo}`);
  };

  return (
    <Box display="flex" flexDirection="column" alignItems="center" justifyContent="center" height="100vh" bgcolor="#f0f2f5" p={3}>
      <Typography variant="h4" gutterBottom>
        Iniciar Sesión
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
          <FormControl fullWidth>
            <InputLabel>Rol</InputLabel>
            <Select
              name="role"
              value={role}
              onChange={(e) => setRole(e.target.value)}
              required
            >
              <MenuItem value="administrador">Administrador de plataforma</MenuItem>
              <MenuItem value="cliente">Usuario cliente</MenuItem>
              <MenuItem value="aportante">Usuario aportante</MenuItem>
            </Select>
          </FormControl>
        </Box>
        <Box mb={2}>
          {role === 'administrador' && (
            <TextField
              label="Información adicional (Administrador)"
              variant="outlined"
              fullWidth
              value={additionalInfo}
              onChange={(e) => setAdditionalInfo(e.target.value)}
              required
            />
          )}
          {role === 'cliente' && (
            <TextField
              label="Información adicional (Cliente)"
              variant="outlined"
              fullWidth
              value={additionalInfo}
              onChange={(e) => setAdditionalInfo(e.target.value)}
              required
            />
          )}
          {role === 'aportante' && (
            <TextField
              label="Información adicional (Aportante)"
              variant="outlined"
              fullWidth
              value={additionalInfo}
              onChange={(e) => setAdditionalInfo(e.target.value)}
              required
            />
          )}
        </Box>
        <Button variant="contained" color="primary" type="submit">
          Ingresar
        </Button>
      </form>
    </Box>
  );
};

export default Login;
