import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Dashboard from '../components/Dashboard';

const DashboardPage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const schoolData = localStorage.getItem('schoolData');
    if (!schoolData) {
      navigate('/school-config');
    }
  }, [navigate]);

  return <Dashboard />;
};

export default DashboardPage;
