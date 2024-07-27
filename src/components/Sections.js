import React, { useState } from 'react';
import { Box, Button, TextField, Typography } from '@mui/material';

const Sections = ({ onAddSection }) => {
  const [section, setSection] = useState('');

  const handleAddSection = () => {
    onAddSection(section);
    setSection('');
  };

  return (
    <Box display="flex" flexDirection="column" alignItems="center" justifyContent="center" p={3}>
      <Typography variant="h5" gutterBottom>
        Agregar Sección
      </Typography>
      <TextField
        label="Nombre de la Sección"
        variant="outlined"
        fullWidth
        value={section}
        onChange={(e) => setSection(e.target.value)}
      />
      <Button variant="contained" color="primary" onClick={handleAddSection}>
        Agregar Sección
      </Button>
    </Box>
  );
};

export default Sections;
