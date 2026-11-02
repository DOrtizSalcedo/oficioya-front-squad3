// Versión inicial del front
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { AuthProvider } from './modules/auth/states/AuthProvider';
import LoginPage from './modules/auth/components/LoginPage';
import RutaProtegida from './modules/core/components/RutaProtegida';
import TrabajadorDetallePage from './modules/trabajadores/components/TrabajadorDetallePage';
import SolicitudesPage from './modules/solicitudes/components/SolicitudesPage';
import TrabajadoresPage from "./modules/trabajadores/components/TrabajadoresPage.jsx";

function App() {
  return (
      <AuthProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/login" element={<LoginPage />} />
            <Route element={<RutaProtegida />}>
              <Route path="/trabajadores" element={<TrabajadoresPage />} />
              <Route path="/trabajadores/:id" element={<TrabajadorDetallePage />} />
              <Route path="/solicitudes" element={<SolicitudesPage />} />
            </Route>
            <Route path="*" element={<Navigate to="/trabajadores" replace />} />
          </Routes>
        </BrowserRouter>
      </AuthProvider>
  );
}

export default App;