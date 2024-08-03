import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { Box, Typography } from '@mui/material';

const YearSelector = ({ selectedYear, setSelectedYear }) => {
  const [date, setDate] = useState(new Date());

  const handleDateChange = (newDate) => {
    setDate(newDate);
    setSelectedYear(newDate.getFullYear());
  };

  return (
    <Box display="flex" flexDirection="column" alignItems="center" mb={3}>
      <Typography variant="h6" gutterBottom>
        Selección de Ejercicio de Trabajo
      </Typography>
      <DatePicker
        selected={date}
        onChange={handleDateChange}
        showYearPicker
        dateFormat="yyyy"
        className="form-control"
      />
    </Box>
  );
};

export default YearSelector;
