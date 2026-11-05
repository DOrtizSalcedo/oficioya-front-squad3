import Boton from '../../core/design-system/Boton';

function SolicitudItem({ solicitud, rol, onAccion }) {
  const pendiente = solicitud.estado === 'PENDIENTE';
  const aceptada = solicitud.estado === 'ACEPTADA';

  return (
    <li>
      <strong>Solicitud #{solicitud.id}</strong>
      <p>{solicitud.descripcion}</p>
      <p>Estado: {solicitud.estado}</p>

      {rol === 'TRABAJADOR' && pendiente && (
        <>
          <Boton onClick={() => onAccion(solicitud.id, 'aceptar')}>Aceptar</Boton>
          <Boton variante="secundario" onClick={() => onAccion(solicitud.id, 'rechazar')}>Rechazar</Boton>
        </>
      )}

      {rol === 'CONTRATANTE' && (pendiente || aceptada) && (
        <Boton variante="secundario" onClick={() => onAccion(solicitud.id, 'cancelar')}>Cancelar</Boton>
      )}
    </li>
  );
}

export default SolicitudItem;