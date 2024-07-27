import React, { useState } from 'react';
import { Box, Button, TextField, Typography, MenuItem, FormControl, InputLabel, Select } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const CooperativeData = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    exerciseYear: '2024',
    entityType: '',
    entityName: '',
    entityNumber: '',
    deNumber: '',
    cooperativeName: '',
    address: '',
    addressNumber: '',
    cuit: '',
    province: '',
    locality: '',
    phone: '',
    cooperativeEmail: '',
    schoolEmail: '',
    logo: null,
    authorities: [],
    sections: [],
    shifts: [],
    courses: []
  });

  const [authority, setAuthority] = useState({
    position: '',
    firstName: '',
    lastName: '',
    from: '',
    until: '',
    email: '',
    phone: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleAuthorityChange = (e) => {
    const { name, value } = e.target;
    setAuthority({ ...authority, [name]: value });
  };

  const handleAddAuthority = () => {
    setFormData({ ...formData, authorities: [...formData.authorities, authority] });
    setAuthority({
      position: '',
      firstName: '',
      lastName: '',
      from: '',
      until: '',
      email: '',
      phone: ''
    });
  };

  const handleAddSection = (section) => {
    setFormData({ ...formData, sections: [...formData.sections, section] });
  };

  const handleFileChange = (e) => {
    setFormData({ ...formData, logo: e.target.files[0] });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const currentDate = new Date();
    formData.registrationDate = currentDate.toISOString();
    formData.validUntil = new Date(currentDate.setDate(currentDate.getDate() + 120)).toISOString();
    localStorage.setItem('cooperativeData', JSON.stringify(formData));
    navigate('/dashboard');
  };

  return (
    <Box display="flex" flexDirection="column" alignItems="center" justifyContent="center" p={3}>
      <Typography variant="h4" gutterBottom>
        Datos Generales de la Cooperadora
      </Typography>
      <form onSubmit={handleSubmit}>
        <Box mb={2}>
          <FormControl fullWidth>
            <InputLabel>Año del Ejercicio Económico</InputLabel>
            <Select
              name="exerciseYear"
              value={formData.exerciseYear}
              onChange={handleInputChange}
            >
              <MenuItem value="2024">2024</MenuItem>
              {/* Agregar más años si es necesario */}
            </Select>
          </FormControl>
        </Box>
        <Box mb={2}>
          <FormControl fullWidth>
            <InputLabel>Tipo de Entidad</InputLabel>
            <Select
              name="entityType"
              value={formData.entityType}
              onChange={handleInputChange}
            >
              <MenuItem value="Primaria">Primaria</MenuItem>
              <MenuItem value="Media">Media</MenuItem>
              <MenuItem value="Jardín">Jardín</MenuItem>
              <MenuItem value="Normal">Normal</MenuItem>
              <MenuItem value="Técnica">Técnica</MenuItem>
              <MenuItem value="Cens">Cens</MenuItem>
              <MenuItem value="Asociación">Asociación</MenuItem>
              <MenuItem value="Fundación">Fundación</MenuItem>
              <MenuItem value="Club">Club</MenuItem>
              <MenuItem value="Otros">Otros</MenuItem>
            </Select>
          </FormControl>
        </Box>
        <Box mb={2}>
          <TextField
            name="entityName"
            label="Nombre de la Entidad"
            variant="outlined"
            fullWidth
            value={formData.entityName}
            onChange={handleInputChange}
            required
          />
        </Box>
        <Box mb={2}>
          <TextField
            name="entityNumber"
            label="N°"
            variant="outlined"
            fullWidth
            value={formData.entityNumber}
            onChange={handleInputChange}
          />
        </Box>
        <Box mb={2}>
          <TextField
            name="deNumber"
            label="D.E."
            variant="outlined"
            fullWidth
            value={formData.deNumber}
            onChange={handleInputChange}
          />
        </Box>
        <Box mb={2}>
          <TextField
            name="cooperativeName"
            label="Nombre de la Cooperadora"
            variant="outlined"
            fullWidth
            value={formData.cooperativeName}
            onChange={handleInputChange}
            required
          />
        </Box>
        <Box mb={2}>
          <TextField
            name="address"
            label="Dirección"
            variant="outlined"
            fullWidth
            value={formData.address}
            onChange={handleInputChange}
            required
          />
        </Box>
        <Box mb={2}>
          <TextField
            name="addressNumber"
            label="N°"
            variant="outlined"
            fullWidth
            value={formData.addressNumber}
            onChange={handleInputChange}
          />
        </Box>
        <Box mb={2}>
          <TextField
            name="cuit"
            label="CUIT"
            variant="outlined"
            fullWidth
            value={formData.cuit}
            onChange={handleInputChange}
            required
          />
        </Box>
        <Box mb={2}>
          <TextField
            name="province"
            label="Provincia"
            variant="outlined"
            fullWidth
            value={formData.province}
            onChange={handleInputChange}
          />
        </Box>
        <Box mb={2}>
          <TextField
            name="locality"
            label="Localidad"
            variant="outlined"
            fullWidth
            value={formData.locality}
            onChange={handleInputChange}
          />
        </Box>
        <Box mb={2}>
          <TextField
            name="phone"
            label="Teléfono"
            variant="outlined"
            fullWidth
            value={formData.phone}
            onChange={handleInputChange}
          />
        </Box>
        <Box mb={2}>
          <TextField
            name="cooperativeEmail"
            label="Mail de la Cooperadora"
            variant="outlined"
            fullWidth
            value={formData.cooperativeEmail}
            onChange={handleInputChange}
            required
          />
        </Box>
        <Box mb={2}>
          <TextField
            name="schoolEmail"
            label="Mail de la Escuela"
            variant="outlined"
            fullWidth
            value={formData.schoolEmail}
            onChange={handleInputChange}
            required
          />
        </Box>
        <Box mb={2}>
          <TextField
            name="registrationDate"
            label="Fecha de Alta en Coopefacil"
            variant="outlined"
            fullWidth
            value={new Date().toISOString().split('T')[0]}
            disabled
          />
        </Box>
        <Box mb={2}>
          <TextField
            name="validUntil"
            label="Vigencia"
            variant="outlined"
            fullWidth
            value={new Date(new Date().setDate(new Date().getDate() + 120)).toISOString().split('T')[0]}
            disabled
          />
        </Box>
        <Box mb={2}>
          <Button variant="contained" component="label">
            Subir Logotipo de la Escuela
            <input type="file" hidden onChange={handleFileChange} />
          </Button>
        </Box>

        <Box mb={2}>
          <Typography variant="h5">Autoridades</Typography>
          <FormControl fullWidth>
            <InputLabel>Cargo</InputLabel>
            <Select
              name="position"
              value={authority.position}
              onChange={handleAuthorityChange}
            >
              <MenuItem value="Presidente">Presidente</MenuItem>
              <MenuItem value="Secretario">Secretario</MenuItem>
              <MenuItem value="Tesorero">Tesorero</MenuItem>
              <MenuItem value="Vocal">Vocal</MenuItem>
              <MenuItem value="Revisores de Cuentas">Revisores de Cuentas</MenuItem>
            </Select>
          </FormControl>
          <TextField
            name="firstName"
            label="Nombre"
            variant="outlined"
            fullWidth
            value={authority.firstName}
            onChange={handleAuthorityChange}
          />
          <TextField
            name="lastName"
            label="Apellido"
            variant="outlined"
            fullWidth
            value={authority.lastName}
            onChange={handleAuthorityChange}
          />
          <TextField
            name="from"
            label="Desde"
            type="date"
            variant="outlined"
            fullWidth
            value={authority.from}
            onChange={handleAuthorityChange}
          />
          <TextField
            name="until"
            label="Hasta"
            type="date"
            variant="outlined"
            fullWidth
            value={authority.until}
            onChange={handleAuthorityChange}
          />
          <TextField
            name="email"
            label="Email"
            variant="outlined"
            fullWidth
            value={authority.email}
            onChange={handleAuthorityChange}
          />
          <TextField
            name="phone"
            label="Celular"
            variant="outlined"
            fullWidth
            value={authority.phone}
            onChange={handleAuthorityChange}
          />
          <Button variant="contained" color="primary" onClick={handleAddAuthority}>
            Agregar Autoridad
          </Button>
          <Box mt={2}>
            {formData.authorities.sort((a, b) => new Date(b.from) - new Date(a.from)).map((auth, index) => (
              <Box key={index} p={2} bgcolor="#f0f2f5" mb={2} borderRadius="8px">
                <Typography variant="body1"><strong>Cargo:</strong> {auth.position}</Typography>
                <Typography variant="body1"><strong>Nombre:</strong> {auth.firstName} {auth.lastName}</Typography>
                <Typography variant="body1"><strong>Desde:</strong> {auth.from}</Typography>
                <Typography variant="body1"><strong>Hasta:</strong> {auth.until}</Typography>
                <Typography variant="body1"><strong>Email:</strong> {auth.email}</Typography>
                <Typography variant="body1"><strong>Celular:</strong> {auth.phone}</Typography>
              </Box>
            ))}
          </Box>
        </Box>

        <Button variant="contained" color="primary" type="submit">
          Guardar
        </Button>
      </form>
    </Box>
  );
};

export default CooperativeData;
