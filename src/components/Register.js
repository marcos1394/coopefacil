import React, { useState } from 'react';
import { Box, Button, TextField, Typography, MenuItem, FormControl, InputLabel, Select, FormControlLabel, Checkbox } from '@mui/material';
import sendConfirmationEmail from '../utils/email';

const Register = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [role, setRole] = useState('cliente'); // 'administrador', 'cliente', 'aportante'
  const [acceptedTerms, setAcceptedTerms] = useState(false);
  const [additionalInfo, setAdditionalInfo] = useState('');

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
      additionalInfo,
      acceptedTerms,
    };
    localStorage.setItem('formData', JSON.stringify(formData));
    const token = Math.random().toString(36).substr(2);
    sendConfirmationEmail(email, token);
    console.log('Datos guardados:', formData);
  };

  return (
    <Box display="flex" flexDirection="column" alignItems="center" justifyContent="center" height="100vh" bgcolor="#f0f2f5" p={3}>
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
        <Box mb={2}>
          <FormControlLabel
            control={<Checkbox checked={acceptedTerms} onChange={(e) => setAcceptedTerms(e.target.checked)} />}
            label="Acepto las condiciones de uso"
            required
          />
        </Box>
        <Button variant="contained" color="primary" type="submit" disabled={!acceptedTerms}>
          Registrarse
        </Button>
      </form>
    </Box>
  );
};

export default Register;
