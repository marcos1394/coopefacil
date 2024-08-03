import React, { useState, useEffect } from 'react';
import { Box, Button, TextField, Typography, MenuItem, FormControl, InputLabel, Select } from '@mui/material';
import { useLocation, useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('');

  useEffect(() => {
    // Obtener el rol desde la ubicación de la navegación o algún almacenamiento local
    const storedRole = location.state?.role || localStorage.getItem('userRole') || 'cliente';
    setRole(storedRole);
  }, [location]);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(`Email: ${email}, Password: ${password}, Role: ${role}`);
    // Aquí iría la lógica para el manejo del inicio de sesión
    // Navegar a la página de inicio del dashboard después de un inicio de sesión exitoso
    navigate('/dashboard');
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
              inputProps={{ readOnly: true }}
              style={{ color: 'rgba(0, 0, 0, 0.6)' }} // Hacer que el campo sea más tenue
            >
              <MenuItem value="administrador">Administrador de plataforma</MenuItem>
              <MenuItem value="cliente">Usuario cliente</MenuItem>
              <MenuItem value="aportante">Usuario aportante</MenuItem>
            </Select>
          </FormControl>
        </Box>
        <Button variant="contained" color="primary" type="submit">
          Ingresar
        </Button>
      </form>
    </Box>
  );
};

export default Login;
