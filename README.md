# DOSW - Laboratorio 9

## Preguntas

### ¿Por qué la carga de datos va dentro de `useEffect` y no directamente en el cuerpo del componente?

Porque el cuerpo del componente se ejecuta en cada renderizado. Si la petición estuviera ahí, al guardar la respuesta en el estado el componente se renderizaría otra vez y volvería a pedir los datos sin parar. Con useEffect la petición solo se repite cuando cambian sus dependencias, por ejemplo el id en el perfil del trabajador

### ¿Por qué ocultar el botón "Aceptar" a un contratante no es suficiente para proteger la API?

Porque ocultar un botón solo cambia lo que se ve en la pantalla. Cualquiera puede llamar al endpoint directamente con Postman o curl. La protección real está en el backend, que revisa el token y el rol en cada petición y responde 403 o 404 si no tiene permiso
