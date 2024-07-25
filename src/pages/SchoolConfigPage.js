// src/pages/SchoolConfigPage.js
import React, { useState, useEffect } from 'react';
import SchoolConfig from '../components/SchoolConfig';

const SchoolConfigPage = () => {
  const [schoolData, setSchoolData] = useState(null);

  useEffect(() => {
    const storedData = localStorage.getItem('schoolData');
    if (storedData) {
      setSchoolData(JSON.parse(storedData));
    }
  }, []);

  const handleSave = (data) => {
    setSchoolData(data);
  };

  if (schoolData) {
    return (
      <div>
        <h1>Escuela Configurada</h1>
        {/* Aquí puedes mostrar la información de la escuela configurada */}
      </div>
    );
  }

  return <SchoolConfig onSave={handleSave} />;
};

export default SchoolConfigPage;
