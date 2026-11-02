// solicitudes/components/SolicitudItem.jsx
function SolicitudItem({ solicitud }) {
    return (
        <li>
            <strong>Solicitud #{solicitud.id}</strong>
            <p>{solicitud.descripcion}</p>
            <p>Estado: {solicitud.estado}</p>
        </li>
    );
}

export default SolicitudItem;
