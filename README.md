# jc-app-web

Proyecto web colaborativo desarrollado por el equipo dual de **JC Desarrollo Digital**.
# Descripcion del proyecto 
Aplicación web construida con **React, TypeScript y Vite** como parte del proceso de desarrollo profesional con alumnos del programa dual CECyTEM.

# objetivo 

Desarrollar una aplicación web moderna que represente los servicios y la identidad de JC Desarrollo Digital, aplicando buenas practicas de desarrollo, ademas el proyecto tiene como finalidad fortalecer las habilidades tecnicas de los alumnos del programa dual CECYTEM.

---

# Tecnologías utilizadas

* React
* TypeScript
* Vite
* ESLint
* Git / GitHub

---

# Requisitos del proyecto

Antes de iniciar debes tener instalado:

* Node.js 24 LTS
* npm 11+
* Git

### Verificar versiones

```bash
node -v
npm -v
git --version
```

### Instalar dependencias

```bash
npm install
```

### Ejecutar el proyecto

```bash
npm run dev
```


---

# Estructura del proyecto

```text
jc-app-web/
|
|   >node_modules
|   >public/
|   >src/
|    >components/
|       ├── >Footer/
|       ├── >Header/
|       └── >Hero/
|     App.tsx
|     index.css
|     main.tsx
|
|   .gitignore
|   eslint.config.js
|   index.html
|   package.json
|   package-lock.json
|   README.md
|   tsconfig.app.json
|   tsconfig.json
|   tsconfig.node.json
|   vite.config.ts
|
package-lock.json
```

---

# Información del proyecto

| Campo                           | Información           |
|---------------------------------|-----------------------|
| Proyecto                        | jc-app-web            |
| Empresa                         | JC Desarrollo Digital |
| Estado                          | En desarrollo         |
| Última actualización            | 23/07/2026            |
| Responsable de la actualización | todo el equipo        |

---

# Historial de cambios

## Cambio 1: Clonación del repositorio

**Fecha:** 21/07/2026  
**Descripción:** Se clonó el repositorio `jc-app-web`, se instaló el proyecto y se verificó su ejecución con Vite.

---

## Cambio 2: Creación de ramas de trabajo

**Fecha:** 22/07/2026  
**Descripción:** Se actualizó la rama `develop`, se crearon ramas `feature` y se asignaron componentes a cada integrante.

---
## cambio 3: creacion de nuevas ramas de trabajo 
**Fecha:** 27/07/2026  
**Descripción:** se crean las ramas services , About, Contact para 
comenzar con nuevos componentes del proyecto

**Ramas creadas:**

- `feature/Header`
- `feature/Hero`
- `feature/Footer`

---
## cambio 4: correccion de errores del proyecto 
**Fecha:** 28/07/2026  
**Descripción:** se corrigen los errores frecuentes cometidos dentro del proyecto dentro de los nuevos componentes creados 

---
## cambio 5: uso de hooks dentro del proyecto 
**Fecha:** 29/07/2026  
**Descripción:** en cada componente se modifica el accordion para adaptarlo a
escritotio o movil usando hooks dentro del proyecto 

---
## cambio 6: Modificacion de Archivo README
**Fecha:** 03/08/2026 
**Descripción:** se modifica el archivo README con las actualizaciones mas recientes del proyecto. 

---
## cambio 7: cambios dentro del proyecto 
**Fecha:** 04/08/2026 
**Descripción:** se hacen auditorias para ver que cambios serian los mejores para el proyecto

---
# Integrantes del equipo
|Nombre	    |   Rol	    | Rama de trabajo
|           |           |
|perla   	|frontend  	|feature/header
|Alexys  	|Backend	|feature/footer
|Alan   	|QA     	|feature/Hero 

# Comandos utilizados durante el desarrollo

Durante el desarrollo del proyecto se utilizaron los siguientes comandos para administrar el repositorio, ejecutar la aplicación y mantener actualizado el código.

# Clonar el repositorio

Permite descargar el proyecto desde GitHub al equipo local.

```bash
git clone https://github.com/JC-Desarrollo-Digital/jc-app-web.git
```

# Acceder a la carpeta del proyecto

Ingresa al directorio donde se encuentra el proyecto.

```bash
cd jc-app-web
```

# Instalar dependencias

Instala todas las librerías necesarias definidas en el archivo `package.json`.

```bash
npm install
```

# Ejecutar el proyecto

Inicia el servidor de desarrollo para visualizar la aplicación en el navegador.

```bash
npm run dev
```

# Actualizar la rama develop

Descarga los cambios más recientes de la rama principal de desarrollo.

```bash
git checkout develop
git pull origin develop
```

# Crear una nueva rama de trabajo

Cada integrante creó una rama independiente para desarrollar su componente.

```bash
git checkout -b feature/NombreDelComponente
```

**Ejemplo:**

```bash
git checkout -b feature/Hero
```

# Verificar el estado del repositorio

Muestra los archivos modificados y pendientes de guardar.

```bash
git status
```

# Agregar cambios al área de preparación

Agrega los archivos modificados para incluirlos en el siguiente commit.

```bash
git add .
```

# Crear un commit

Guarda los cambios realizados con un mensaje descriptivo.

```bash
git commit -m "Se agrega componente Hero"
```

# Subir los cambios al repositorio remoto

Envía los cambios de la rama al repositorio en GitHub.

```bash
git push origin feature/Hero
```

# Cambiar de rama

Permite cambiar entre las diferentes ramas del proyecto.

```bash
git checkout develop
```

# Obtener los cambios más recientes

Actualiza la rama local con los cambios disponibles en GitHub.

```bash
git pull origin develop
```