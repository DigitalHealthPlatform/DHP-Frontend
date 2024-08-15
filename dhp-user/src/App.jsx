import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import React, { useState } from 'react';
import './App.css';
import LandingPage from './pages/landing-page';
import PasswordRecovery from './pages/password-recovery';
import SignUp from './pages/signup';
import Login from './pages/login';
import Appointments from './pages/appointments';
import AdminDashboard from './pages/admin-dashboard';

function App() {
 
  const [doctors, setDoctors] = useState([]);

  const router = createBrowserRouter([
    { path: "/", element: <LandingPage /> },
    { path: "login", element: <Login /> },
    { path: "signup", element: <SignUp /> },
    { path: "login/password-recovery", element: <PasswordRecovery /> },
    { path: "appointments", element: <Appointments doctors={doctors} /> },
    { path: "admin", element: <AdminDashboard doctors={doctors} setDoctors={setDoctors} /> },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
