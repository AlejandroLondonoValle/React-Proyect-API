// Servidor JSON Server para Agenda ADSO desplegado en Render

// Importamos la libreria de JSON Server
const jsonServer = require('json-server');

// Creamos la aplicacion del JSON Server
const server = jsonServer.create();

// Indicamos que usaremos db.json como "base de datos"
const router = jsonServer.router('db.json');

// Cargamos middlewares por defecto (logs, CORS, etc.)
const middlewares = jsonServer.defaults();

// Puerto de ejecucion
// En RENDER, Port vendra definido en las variables de entorno
// En LOCAL , si no existe PORT, usaremos el 3000
const PORT = process.env.PORT || 3000;

// Uso de middlewares
server.use(middlewares);

// Permitimos parsear JSON en el body de las peticiones
server.use(jsonServer.bodyParser);

// Usamos el router que expone las rutas basadas en db.json
// Ejemplo: |GET/contactos, POST/contactos,etc..|
server.use(router);

// Iniciamos el servidor y mostramos un mensaje en consola
server.listen(PORT, () => {
  console.log(`JSON Server esta corriendo en http://localhost:${PORT}`);   
})

