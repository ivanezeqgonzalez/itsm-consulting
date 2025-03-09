## Descripción
Crear una aplicación React que consuma la API de JSONPlaceholder para mostrar usuarios y sus posts asociados, implementando navegación, filtrado y visualización de detalles.

Requerimientos Funcionales
1. Lista de Usuarios
- Crear una tabla que muestre la información de los usuarios
- Campos requeridos:
- Nombre
- Nombre de usuario
- Teléfono
- Email
- Ciudad
- Nombre de la empresa

- Implementar un buscador que filtre por nombre, usuario, email y empresa
- Los registros deben ser clickeables para redireccionar al detalle del usuario
- Implementar ordenamiento en las columnas de la tabla (clickeando en los headers)

2. Detalle de Usuario
- Mostrar la información detallada del usuario seleccionado
- Implementar la carga de posts asociados al usuario- Mostrar los posts en un formato de tarjetas con título y contenido
- Agregar un botón para volver a la lista de usuarios

Requerimientos Técnicos

Estructura y Organización
- Utilizar React Router para la navegación
- Manejar estados y efectos apropiadamente
- Estructurar el código de manera modular y reutilizable

Manejo de Datos
- Consumir los siguientes endpoints:
- GET /users
- GET /users/:id
- GET /users/:id/posts
- Implementar manejo de errores y estados de carga
- Utilizar async/await para las llamadas a la API

APIs
// Usuarios
GET https://jsonplaceholder.typicode.com/users
GET https://jsonplaceholder.typicode.com/users/:id
// Posts
GET https://jsonplaceholder.typicode.com/users/:id/posts

----
### Pensar en MVP.

View
Crear la vista de la tabla para allUsers.
Crear la vista para userDetail.

Components:
Tabla de usuarios.
Contenedor de filtros para filtrar datos de usuario.
CardUserDetail
Filtro de usuario.
CardPostUser

Service
Crear el servicio que obtiene listado de Users.
Crear el servicio que obtiene el detalle del User.
Crear el servicio que obtiene los posteos del User.

Mostrar loading mientras se espera resultados de bùsqueda.
En caso de devolver un listado vacio de usuarios o posteos, mostrar un mensaje de 'No hay resultados para la bùsqueda'.
En caso de que los filtros de usuario no apliquen a la búsqueda, mostrar un mensaje de 'No se encuentra el usuario'.

-------------------------
## MVP0
Configuración inicial del proyecto.

Crear la vista y mostrar mediante ruta allUsers. 
  - Mostrar solamente un texto en patanlla.

Crear la vista y mostrar mediante ruta userDetail.
  - Mostrar solamente un texto en patanlla.

## MVP1
#### ITSM-1 Pantalla allUsers:
  Mostrar la tabla con datos mockeados.
  Al hacer click en un usuario llevarlo a la pantalla userDetail.

#### ITSM-2 Pantalla userDetail:
  Mostrar los datos del usuario mockeado.
  Mostrar los datos de posts para ese usuario mockeado.
  Agregar Botón para volver a la pantalla de allUsers.

## MVP2
#### ITSM-3 Dar los estilos completos a la tabla.
#### ITSM-4 Dar los estilos completos a la pantalla userDetail junto a sus componentes.

## MVP3
#### ITSM-5 Consumir el service y mostrar listado de Users.
  Crear el servicio que obtiene listado de Users.
  Reemplazar el mock por el serivico real.
#### ITSM-6 Consumir el service y mostrar el detalle del User.
  Crear el servicio que obtiene el detalle de User.
  Reemplazar el mock por el serivico real.
#### ITSM-7 Consumir el service y mostrar los posteos del User.
  Crear el servicio que obtiene posteos del User.
  Reemplazar el mock por el serivico real.
#### ITSM-8 Mostrar loading mientras se espera resultados de búsqueda (servicios allUsers, userDetail, postUser).
#### ITSM-9 En caso de devolver un listado vacio de usuarios o posteos, mostrar un mensaje de 'No hay resultados para la búsqueda'.

## MVP4
#### ITSM-10 Implementar un buscador que filtre por nombre, usuario, email y empresa
#### ITSM-11 Los registros deben ser clickeables para redireccionar al detalle del usuario
#### ITSM-12 Implementar ordenamiento en las columnas de la tabla (clickeando en los headers)
#### ITSM-13 En caso de que los filtros de usuario no apliquen a la búsqueda, mostrar un mensaje de 'No se encuentra el usuario'.