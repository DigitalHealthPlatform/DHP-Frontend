import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import LandingPage from './pages/landing-page'
import PasswordRecovery from './pages/password-recovery'
import SignUp from './pages/signup'
import Login from './pages/login'
import Appointments from './pages/appointments'

function App() {
  const router = createBrowserRouter([
    { path: "/", element: <LandingPage /> },
    { path: "login", element: <Login /> },
    { path: "signup", element: <SignUp /> },
    { path: "login/password-recovery", element: <PasswordRecovery /> },
    { path: "appointments", element: <Appointments /> },

    // {
    //   element: <AuthLayout />,
    //   children: [
    //     {
    //       path: "login",
    //       element: <Login />,
    //     },
    //     {
    //       path: "signup",
    //       element: <SignUp />,
    //     },
    //     {
    //       path: "password-recovery",
    //       element: <PasswordRecovery />,
    //     },
    //   ],
    // },

    

    
   
  ]);



  return <RouterProvider router={router} />;

}

export default App
