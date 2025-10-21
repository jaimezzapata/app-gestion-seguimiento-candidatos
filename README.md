# Sistema de Seguimiento de Candidatos (ATS)

## Introducción

### ¿Qué es?

Este proyecto es una aplicación web del lado del cliente (frontend) diseñada para gestionar y dar seguimiento a los candidatos que aplican a diferentes vacantes dentro de una empresa. Funciona como un *Applicant Tracking System (ATS)* simplificado.

### ¿Para qué sirve?

Su objetivo principal es centralizar y facilitar el proceso de reclutamiento, permitiendo a los reclutadores visualizar el estado de cada candidato, sus datos de contacto y el avance en las diferentes etapas del proceso de selección de manera clara y organizada.

***

## 💻 Stack de Desarrollo

Este proyecto está construido con las siguientes tecnologías:

* **Vite:** Herramienta de compilación y servidor de desarrollo rápido.
* **React.js (v18.2.0):** Biblioteca principal para la construcción de la interfaz de usuario.
* **JavaScript (ES6+):** Lenguaje de programación base.
* **HTML5 y CSS3:** Para la maquetación y estilización de la aplicación.
* **json-server:** Para simular una API RESTful y proveer datos falsos de manera local.

***

## 📁 Estructura del Proyecto

El proyecto sigue una estructura de carpetas modular y escalable para mantener el código organizado:

```
    /src
    |-- /api         # Contiene todos los servicios y llamadas a la API.
    |-- /components  # Almacena componentes reutilizables (botones, inputs, cards, etc.).
    |-- /helpers     # Funciones de ayuda o utilidades que se usan en varias partes del proyecto.
    |-- /pages       # Componentes principales que representan una página completa (Ej: Home, CandidateDetail).
    |-- /routes      # Definición de las rutas de la aplicación.
    |-- App.jsx      # Componente principal de la aplicación.
    |-- main.jsx     # Archivo de entrada de la aplicación.

```

## 🚀 Instalación y Ejecución

Para ejecutar este proyecto en tu entorno local, sigue estos sencillos pasos:

1.  **Clonar el repositorio:**
    ```bash
    git clone [https://github.com/tu-usuario/nombre-del-repositorio.git](https://github.com/tu-usuario/nombre-del-repositorio.git)
    ```

2.  **Navegar al directorio del proyecto:**
    ```bash
    cd nombre-del-repositorio
    ```

3.  **Instalar dependencias:**
    Asegúrate de tener [Node.js](https://nodejs.org/) instalado. Luego, ejecuta el siguiente comando para instalar los paquetes necesarios:
    ```bash
    npm install
    ```

4.  **Ejecutar la API falsa:**
    En una terminal, inicia el servidor de `json-server` para simular la base de datos.
    ```bash
    npx json-server --watch db.json --port 4000
    ```
    Esto levantará un servidor en `http://localhost:4000`.

5.  **Iniciar el proyecto:**
    En otra terminal, ejecuta el servidor de desarrollo de Vite.
    ```bash
    npm run dev
    ```
    La aplicación estará disponible en `http://localhost:5173` (o el puerto que indique la consola).

***

## ✨ Proceso de Colaboración (Pull Request)

Si deseas contribuir al proyecto, ¡tu ayuda es bienvenida! La mejor forma de hacerlo es siguiendo el flujo estándar de GitHub:

1.  **Fork del repositorio:** Haz un "Fork" de este proyecto en tu propia cuenta de GitHub.
2.  **Clonar tu fork:** Clona el repositorio desde tu cuenta a tu máquina local.
3.  **Crear una nueva rama:** Crea una rama descriptiva para tu nueva funcionalidad o corrección.
    ```bash
    git checkout -b feature/nombre-de-la-funcionalidad
    ```
4.  **Realizar cambios y commits:** Haz los cambios que consideres necesarios y crea commits claros y concisos.
5.  **Push a tu rama:** Sube los cambios a tu repositorio fork.
    ```bash
    git push origin feature/nombre-de-la-funcionalidad
    ```
6.  **Crear un Pull Request (PR):** Desde tu fork en GitHub, abre un "Pull Request" hacia la rama `main` del repositorio original. Asegúrate de detallar qué cambios hiciste y por qué.

***

## 👨‍💻 Autor

* **Nombre:** Jaime Zapata
* **Correo:** correo@correo.com
* **Redes Sociales:**
    * [LinkedIn](https://www.linkedin.com/in/tu-usuario/) (Ejemplo)
    * [GitHub](https://github.com/tu-usuario) (Ejemplo)