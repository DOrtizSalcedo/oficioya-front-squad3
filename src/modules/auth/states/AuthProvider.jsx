// auth/states/AuthProvider.jsx
import { useCallback, useState } from 'react';
import { AuthContext } from './AuthContext';
import * as authService from '../services/authService';

export function AuthProvider({ children }) {
    // El token vive solo en memoria: si se recarga la página, hay que iniciar sesión de nuevo
    const [token, setToken] = useState(null);
    const [usuario, setUsuario] = useState(null);

    function decodificarPayload(token) {
        const base64 = token.split('.')[1].replace(/-/g, '+').replace(/_/g, '/');
        return JSON.parse(atob(base64));
    }

    async function login(correo, password) {
        const respuesta = await authService.login(correo, password);
        const nuevoToken = respuesta.accesoToken;
        const payload = decodificarPayload(nuevoToken);
        setToken(nuevoToken);
        setUsuario({ correo: payload.sub, rol: payload.role });
    }

    const logout = useCallback(() => {
        setToken(null);
        setUsuario(null);
    }, []);

    return (
        <AuthContext.Provider value={{ token, usuario, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
}