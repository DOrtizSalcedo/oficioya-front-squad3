// solicitudes/hooks/useSolicitudes.js
import { useEffect, useState } from 'react';
import { useAuth } from '../../auth/hooks/useAuth';
import { cambiarEstado, listarSolicitudes } from '../services/solicitudesService';

export function useSolicitudes() {
    const { token, logout } = useAuth();
    const [solicitudes, setSolicitudes] = useState([]);
    const [cargando, setCargando] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        listarSolicitudes(token)
            .then((datos) => setSolicitudes(datos))
            .catch((e) => {
                if (e.status === 401) {
                    logout();                   // token vencido: volver al login
                } else {
                    setError(e.message);
                }
            })
            .finally(() => setCargando(false));
    }, [token, logout]);

    async function ejecutarAccion(id, accion) {
        setError(null);
        try {
        await cambiarEstado(id, accion, token);
        const datos = await listarSolicitudes(token); // Vuelve a cargar la lista
        setSolicitudes(datos);
        } catch (e) {
        setError(e.message);
        }
    }

    return { solicitudes, cargando, error, ejecutarAccion };
}
