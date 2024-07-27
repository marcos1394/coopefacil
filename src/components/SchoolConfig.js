import React, { useState } from 'react';
import { Box, Button, TextField, Typography } from '@mui/material';

const SchoolConfig = ({ onSave }) => {
  const [schoolName, setSchoolName] = useState('');
  const [schoolCUIT, setSchoolCUIT] = useState('');
  const [grades, setGrades] = useState([{ grade: '', sections: [''] }]);
  const [cycleYear, setCycleYear] = useState('');
  const [fees, setFees] = useState({});

  const handleAddGrade = () => {
    setGrades([...grades, { grade: '', sections: [''] }]);
  };

  const handleGradeChange = (index, value) => {
    const newGrades = [...grades];
    newGrades[index].grade = value;
    setGrades(newGrades);
  };

  const handleAddSection = (gradeIndex) => {
    const newGrades = [...grades];
    newGrades[gradeIndex].sections.push('');
    setGrades(newGrades);
  };

  const handleSectionChange = (gradeIndex, sectionIndex, value) => {
    const newGrades = [...grades];
    newGrades[gradeIndex].sections[sectionIndex] = value;
    setGrades(newGrades);
  };

  const handleFeeChange = (grade, value) => {
    setFees({ ...fees, [grade]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const schoolData = {
      schoolName,
      schoolCUIT,
      grades,
      cycleYear,
      fees,
    };
    localStorage.setItem('schoolData', JSON.stringify(schoolData));
    onSave(schoolData);
  };

  return (
    <Box display="flex" flexDirection="column" alignItems="center" justifyContent="center" p={3}>
      <Typography variant="h4" gutterBottom>
        Configurar Escuela
      </Typography>
      <form onSubmit={handleSubmit}>
        <Box mb={2}>
          <TextField
            label="Nombre de la Escuela"
            variant="outlined"
            fullWidth
            value={schoolName}
            onChange={(e) => setSchoolName(e.target.value)}
            required
          />
        </Box>
        <Box mb={2}>
          <TextField
            label="CUIT de la Escuela"
            variant="outlined"
            fullWidth
            value={schoolCUIT}
            onChange={(e) => setSchoolCUIT(e.target.value)}
            required
          />
        </Box>
        <Box mb={2}>
          <TextField
            label="Año del Ciclo Escolar"
            variant="outlined"
            fullWidth
            value={cycleYear}
            onChange={(e) => setCycleYear(e.target.value)}
            required
          />
        </Box>
        {grades.map((grade, gradeIndex) => (
          <Box key={gradeIndex} mb={2}>
            <TextField
              label="Grado"
              variant="outlined"
              fullWidth
              value={grade.grade}
              onChange={(e) => handleGradeChange(gradeIndex, e.target.value)}
              required
            />
            {grade.sections.map((section, sectionIndex) => (
              <Box key={sectionIndex} mb={1} ml={2}>
                <TextField
                  label={`Sección ${sectionIndex + 1}`}
                  variant="outlined"
                  fullWidth
                  value={section}
                  onChange={(e) => handleSectionChange(gradeIndex, sectionIndex, e.target.value)}
                  required
                />
              </Box>
            ))}
            <Button onClick={() => handleAddSection(gradeIndex)}>Agregar Sección</Button>
          </Box>
        ))}
        <Button onClick={handleAddGrade}>Agregar Grado</Button>
        <Box mt={4}>
          <Typography variant="h6">Precios de Cuotas</Typography>
          {grades.map((grade, index) => (
            <Box key={index} mb={2}>
              <TextField
                label={`Cuota para ${grade.grade}`}
                variant="outlined"
                fullWidth
                value={fees[grade.grade] || ''}
                onChange={(e) => handleFeeChange(grade.grade, e.target.value)}
                required
              />
            </Box>
          ))}
        </Box>
        <Button variant="contained" color="primary" type="submit">
          Guardar Configuración
        </Button>
      </form>
    </Box>
  );
};

export default SchoolConfig;
