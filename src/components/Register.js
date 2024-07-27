import React, { useState } from 'react';
import { Box, Button, TextField, Typography, MenuItem } from '@mui/material';
import sendConfirmationEmail from '../utils/email';

const Register = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [role, setRole] = useState('cliente'); // 'administrador', 'cliente', 'aportante'
  const [acceptedTerms, setAcceptedTerms] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert('Las contraseñas no coinciden');
      return;
    }
    const formData = {
      email,
      password,
      role,
    };
    localStorage.setItem('formData', JSON.stringify(formData));
    const token = Math.random().toString(36).substr(2);
    sendConfirmationEmail(email, token);
    console.log('Datos guardados:', formData);
  };

  return (
    <Box display="flex" flexDirection="column" alignItems="center" justifyContent="center" height="100vh" bgcolor="#f0f2f5" p={3}>
      <img src="/logo.png" alt="Coopefacil Logo" style={{ marginBottom: '20px' }} />
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
            label="Confirmar Contraseña"
            variant="outlined"
            type="password"
            fullWidth
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
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
            <MenuItem value="administrador">Administrador de plataforma</MenuItem>
            <MenuItem value="cliente">Usuario cliente</MenuItem>
            <MenuItem value="aportante">Usuario aportante</MenuItem>
          </TextField>
        </Box>
        <Box mb={2}>
          <label>
            <input
              type="checkbox"
              checked={acceptedTerms}
              onChange={(e) => setAcceptedTerms(e.target.checked)}
              required
            />
            Acepto las condiciones de uso
          </label>
        </Box>
        <Button variant="contained" color="primary" type="submit" disabled={!acceptedTerms}>
          Registrarse
        </Button>
      </form>
    </Box>
  );
};

export default Register;
