import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../auth/hooks/useAuth';
import { crearSolicitud } from '../services/solicitudesService';
import Boton from '../../core/design-system/Boton';
import MensajeError from '../../core/components/MensajeError';

function NuevaSolicitudForm({ trabajadorId }) {
    const [descripcion, setDescripcion] = useState('');
    const [error, setError] = useState(null);
    const { token } = useAuth();
    const navigate = useNavigate();

    async function manejarEnvio(evento) {
        evento.preventDefault();
        setError(null);
        try {
            await crearSolicitud({ trabajadorId: Number(trabajadorId), descripcion }, token);
            navigate('/solicitudes');
        } catch (e) {
            setError(e.message);
        }
    }

    return (
        <form onSubmit={manejarEnvio} style={{ display: 'grid', gap: 12, maxWidth: 480 }}>
            <label>
                Descripción
                <textarea value={descripcion} onChange={(e) => setDescripcion(e.target.value)} required />
            </label>
            <MensajeError error={error} />
            <Boton type="submit">Enviar solicitud</Boton>
        </form>
    );
}

export default NuevaSolicitudForm;