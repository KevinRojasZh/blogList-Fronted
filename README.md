# 📘 Bloglist Frontend (Full Stack Open - Part 5)

Este es el **frontend** del proyecto **Bloglist**, correspondiente a la **Parte 5** del curso Full Stack Open (Helsinki University).  
Se conecta al backend desarrollado en la Parte 4, permitiendo la autenticación de usuarios y la gestión de blogs.

---

## 🚀 Funcionalidades

- Inicio de sesión con token persistente (localStorage)
- Creación de nuevos blogs
- Incrementar likes en blogs existentes
- Eliminación de blogs creados por el usuario autenticado
- Notificaciones de éxito y error
- Uso de hooks personalizados
- Tests con React Testing Library + Jest

---

## 🧩 Tecnologías utilizadas

| Área | Tecnología |
|------|-------------|
| Framework | React |
| Estado | useState, useEffect, toast, custom hooks|
| Estilos | CSS / Tailwind (según implementación) |
| Tests | Jest + React Testing Library |
| HTTP | Axios |
| Auth | JWT (localStorage) |

---

## 📦 Instalación y uso

### 1️⃣ Clonar el repositorio
```bash
git clone https://github.com/tu-usuario/bloglist-frontend.git
2️⃣ Instalar dependencias
bash
Copiar código
npm install
3️⃣ Variables de entorno
Crear un archivo .env en la raíz del proyecto:

bash
Copiar código
VITE_API_URL=http://localhost:3003/api
4️⃣ Ejecutar en desarrollo
bash
Copiar código
npm run dev
✅ Tests
Ejecutar los tests:

bash
Copiar código
npm test
🌐 Backend relacionado
Este frontend se conecta al backend implementado en la Parte 4 del curso.
Rutas utilizadas:

POST /api/login → autenticación

GET /api/blogs → obtener blogs

POST /api/blogs → crear blog

DELETE /api/blogs/:id → eliminar blog

✍️ Autor
Desarrollado como parte del curso Full Stack Open 2024/2025, enfocando en autenticación, pruebas, buenas prácticas y arquitectura en aplicaciones React SPA.
