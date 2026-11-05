# DOSW - Laboratorio 9

## Preguntas

### ¿Por qué la carga de datos va dentro de `useEffect` y no directamente en el cuerpo del componente?

Porque el cuerpo del componente se vuelve a ejecutar cada vez que React lo renderiza. Si pusiéramos la petición ahí, al llegar la respuesta guardaríamos los datos con setState, eso haría que el componente se renderice otra vez, y se volvería a hacer la petición y así infinitamente.

Con useEffect la petición se hace después de que el componente se pinta y solo se repite si cambia algo del arreglo de dependencias. Por ejemplo, en el perfil del trabajador (TrabajadorDetallePage) usamos [id, token, logout], entonces el perfil solo se vuelve a pedir si cambia el id de la URL o la sesión, y no cada vez que se renderiza la pantalla.
