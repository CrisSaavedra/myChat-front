import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter, Route, Routes } from "react-router";
import App from './App.tsx'
import ProtectedRoute from './components/protectedRoutes.tsx';
import LoginPage from './pages/login/login.tsx';


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App></App>} >
          <Route index element={<ProtectedRoute><h3>Protected</h3></ProtectedRoute>} />
          <Route path='/login' element={<LoginPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
