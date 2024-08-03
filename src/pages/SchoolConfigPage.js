import React, { useState } from 'react';
import { Box, Typography } from '@mui/material';
import YearSelector from '../components/YearSelector';
import DashboardPanel from '../components/DashboardPanel';

const SchoolConfigPage = () => {
  const [selectedYear, setSelectedYear] = useState('');

  return (
    <Box display="flex" flexDirection="column" alignItems="center" p={3}>
      <Typography variant="h4" gutterBottom>
        Configuración de la Escuela
      </Typography>
      <YearSelector selectedYear={selectedYear} setSelectedYear={setSelectedYear} />
      {selectedYear && <DashboardPanel />}
    </Box>
  );
};

export default SchoolConfigPage;
