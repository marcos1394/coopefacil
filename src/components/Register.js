import React, { useState } from 'react';
import { Box, Button, TextField, Typography, MenuItem, FormControl, InputLabel, Select, FormControlLabel, Checkbox, Grid } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import sendConfirmationEmail from '../utils/email';

const Register = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [role, setRole] = useState('cliente'); // 'administrador', 'cliente', 'aportante'
  const [acceptedTerms, setAcceptedTerms] = useState(false);
  const [additionalInfo, setAdditionalInfo] = useState({});
  const [schoolInfo, setSchoolInfo] = useState({});

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (role === 'cliente') {
      setSchoolInfo({ ...schoolInfo, [name]: value });
    } else {
      setAdditionalInfo({ ...additionalInfo, [name]: value });
    }
  };

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
      schoolInfo,
      acceptedTerms,
      acceptanceDate: new Date().toISOString(),
    };
    localStorage.setItem('formData', JSON.stringify(formData));
    const token = Math.random().toString(36).substr(2);
    sendConfirmationEmail(email, token);
    alert('Se ha enviado un correo de confirmación. Por favor, revisa tu email.');
    navigate('/confirmation');
  };

  return (
    <Box display="flex" flexDirection="column" alignItems="center" justifyContent="center" height="100vh" bgcolor="#f0f2f5" p={3}>
      <Typography variant="h4" gutterBottom>
        Registrarse
      </Typography>
      <form onSubmit={handleSubmit}>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <TextField
              label="Email"
              variant="outlined"
              fullWidth
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              label="Contraseña"
              variant="outlined"
              type="password"
              fullWidth
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              label="Confirmar Contraseña"
              variant="outlined"
              type="password"
              fullWidth
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <FormControl fullWidth>
              <InputLabel>Rol</InputLabel>
              <Select
                name="role"
                value={role}
                onChange={(e) => setRole(e.target.value)}
                required
              >
                <MenuItem value="administrador">Administrador de plataforma</MenuItem>
                <MenuItem value="cliente">Cliente (Institución Educativa)</MenuItem>
                <MenuItem value="aportante">Usuario aportante</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          {role === 'administrador' && (
            <>
              <Grid item xs={12} sm={6}>
                <TextField
                  label="Código de Verificación"
                  variant="outlined"
                  fullWidth
                  name="verificationCode"
                  value={additionalInfo.verificationCode || ''}
                  onChange={handleInputChange}
                  required
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  label="Número de Teléfono"
                  variant="outlined"
                  fullWidth
                  name="phoneNumber"
                  value={additionalInfo.phoneNumber || ''}
                  onChange={handleInputChange}
                  required
                />
              </Grid>
            </>
          )}
          {role === 'cliente' && (
            <>
              <Grid item xs={12} sm={6}>
                <TextField
                  label="Nombre de la Institución"
                  variant="outlined"
                  fullWidth
                  name="schoolName"
                  value={schoolInfo.schoolName || ''}
                  onChange={handleInputChange}
                  required
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  label="CUIT"
                  variant="outlined"
                  fullWidth
                  name="cuit"
                  value={schoolInfo.cuit || ''}
                  onChange={handleInputChange}
                  required
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  label="Dirección"
                  variant="outlined"
                  fullWidth
                  name="address"
                  value={schoolInfo.address || ''}
                  onChange={handleInputChange}
                  required
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  label="Número de Teléfono"
                  variant="outlined"
                  fullWidth
                  name="phoneNumber"
                  value={schoolInfo.phoneNumber || ''}
                  onChange={handleInputChange}
                  required
                />
              </Grid>
            </>
          )}
          {role === 'aportante' && (
            <>
              <Grid item xs={12} sm={6}>
                <TextField
                  label="Entidad"
                  variant="outlined"
                  fullWidth
                  name="entity"
                  value={additionalInfo.entity || ''}
                  onChange={handleInputChange}
                  required
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  label="Nombre y Apellidos de los Hijos"
                  variant="outlined"
                  fullWidth
                  name="childrenNames"
                  value={additionalInfo.childrenNames || ''}
                  onChange={handleInputChange}
                  required
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  label="Grados y Turnos de los Hijos"
                  variant="outlined"
                  fullWidth
                  name="gradesAndShifts"
                  value={additionalInfo.gradesAndShifts || ''}
                  onChange={handleInputChange}
                  required
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  label="Número de Teléfono"
                  variant="outlined"
                  fullWidth
                  name="phoneNumber"
                  value={additionalInfo.phoneNumber || ''}
                  onChange={handleInputChange}
                  required
                />
              </Grid>
            </>
          )}
          <Grid item xs={12}>
            <FormControlLabel
              control={<Checkbox checked={acceptedTerms} onChange={(e) => setAcceptedTerms(e.target.checked)} />}
              label="Acepto las condiciones de uso"
              required
            />
          </Grid>
          <Grid item xs={12}>
            <Button variant="contained" color="primary" type="submit" disabled={!acceptedTerms} fullWidth>
              Registrarse
            </Button>
          </Grid>
        </Grid>
      </form>
    </Box>
  );
};

export default Register;
