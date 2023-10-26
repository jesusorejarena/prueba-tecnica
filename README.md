# Proyecto de React con Vite

Este es un proyecto de React creado con Vite, un entorno de desarrollo rápido para aplicaciones web con React. A continuación, encontrarás instrucciones sobre cómo configurar y ejecutar el proyecto.

## Errores encontrados

Las API que proporcionaron no funcionan correctamente, tarda casi 7 segundos en realizar una petición. Entonces lo que hice fue hacer toda la estructura para el axios, pero en el return le pegue la información moqueada para que pudiera funcionar correctamente.

## Instrucciones de Inicio

Siga estos pasos para iniciar el proyecto en su máquina local:

1. **Clonar el repositorio**

   Abre tu terminal y clona este repositorio en tu directorio de trabajo local:

   ```bash
   git clone https://github.com/jesusorejarena/prueba-tecnica.git
   ```

2. **Agregar variables de entorno**

   Crea un archivo .env.development y pega esta información:

   ```env
   NODE_ENV="development"
   VITE_APP_TITLE="Prueba tecnica"

   VITE_APP_URL="https://swapi.dev/api/"
   ```

3. **Ejecuta este comando para instalar las dependecias**

   ```bash
   npm i
   ```

4. **Correr proyecto**

   ```bash
   npm run dev
   ```

5. **Ver proyecto en vivo**

   ```text
   https://prueba-tecnica-fawn.vercel.app/
   ```
