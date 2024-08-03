import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { Box, Button } from '@mui/material'; // Importar Box y Button
import HomePage from './pages/HomePage';
import Chat from './components/Chat'; // Importar el componente de chat
import LoginPage from './pages/LoginPage';
import DashboardPage from './pages/DashboardPage';
import ReceiptsPage from './pages/ReceiptsPage';
import ExpensesPage from './pages/ExpensesPage';
import PaymentsPage from './pages/PaymentsPage';
import SchoolConfigPage from './pages/SchoolConfigPage';
import ViewData from './components/ViewData';
import Confirmation from './components/Confirmation';
import PaymentCart from './components/PaymentCart';
import CooperativeData from './components/CooperativaData';
import CooperativeDataPage from './pages/CooperativeDataPage';
import RoleSelectionPage from './pages/RoleSelectionPage';
import RegisterClientPage from './pages/RegisterClientPage';
import RegisterSupporterPage from './pages/RegisterSupporterPage';
import theme from './theme';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router basename={process.env.PUBLIC_URL}>
      <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RoleSelectionPage />} />
            <Route path="/register/client" element={<RegisterClientPage />} />
            <Route path="/register/supporter" element={<RegisterSupporterPage />} />
            <Route path="/dashboard" element={<DashboardPage />} />
            <Route path="/receipts" element={<ReceiptsPage />} />
            <Route path="/expenses" element={<ExpensesPage />} />
            <Route path="/payments" element={<PaymentsPage />} />
            <Route path="/school-config" element={<SchoolConfigPage />} />
            <Route path="/viewdata" element={<ViewData />} />
            <Route path="/confirmation" element={<Confirmation />} />
            <Route path="/payment-cart" element={<PaymentCart />} />
            <Route path="/cooperative-data" element={<CooperativeData />} />
          </Routes>
          <Chat/>
          <Box display="flex" justifyContent="space-between" p={2} bgcolor="#f0f2f5">
            <Button variant="text" color="primary" href="mailto:consulta@coopefacil.com">
              Enviar Consulta/Reclamo
            </Button>
            <Button variant="text" color="primary" href="https://chat.coopefacil.com">
              
            </Button>
          </Box>
      </Router>
    </ThemeProvider>
  );
};

export default App;