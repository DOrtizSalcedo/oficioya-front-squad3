// core/components/RutaProtegida.jsx
import { Navigate, Outlet } from 'react-router-dom';
import { useAuth } from '../../auth/hooks/useAuth';
import Navbar from './Navbar';

// Si no hay sesión, redirige al login. Ojo: esto solo mejora la experiencia;
// la seguridad real la sigue aplicando el backend en cada petición.
function RutaProtegida() {
    const { token } = useAuth();

    if (!token) {
        return <Navigate to="/login" replace />;
    }

    return (
        <>
            <Navbar />
            <main style={{ padding: 16 }}>
                <Outlet />
            </main>
        </>
    );
}

export default RutaProtegida;