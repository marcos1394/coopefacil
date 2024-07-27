import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import { Box, Button } from '@mui/material'; // Importar Box y Button
import RegisterPage from './pages/RegisterPage';
import DashboardPage from './pages/DashboardPage';
import ReceiptsPage from './pages/ReceiptsPage';
import ExpensesPage from './pages/ExpensesPage';
import PaymentsPage from './pages/PaymentsPage';
import SchoolConfigPage from './pages/SchoolConfigPage';
import CooperativeDataPage from './pages/CooperativaDataPage';
import Chat from './components/Chat';
import theme from './theme';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router basename={process.env.PUBLIC_URL}>
        <Routes>
        <Route path="/" element={<HomePage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/dashboard" element={<DashboardPage />} />
            <Route path="/receipts" element={<ReceiptsPage />} />
            <Route path="/expenses" element={<ExpensesPage />} />
            <Route path="/payments" element={<PaymentsPage />} />
            <Route path="/school-config" element={<SchoolConfigPage />} />
            <Route path="/cooperative-data" element={<CooperativeDataPage />} />
          </Routes>
          <Chat />
          <Box display="flex" justifyContent="space-between" p={2} bgcolor="#f0f2f5">
            <Button variant="text" color="primary" href="mailto:consulta@coopefacil.com">
              Enviar Consulta/Reclamo
            </Button>
            <Button variant="text" color="primary" href="https://chat.coopefacil.com">
              Chat
            </Button>
          </Box>
      </Router>
    </ThemeProvider>
  );
};

export default App;

