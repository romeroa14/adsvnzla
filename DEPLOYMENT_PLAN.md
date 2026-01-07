# Plan de Despliegue - AdsVzla

Se han realizado las siguientes tareas para preparar el despliegue del contenedor:

1.  **Configuración Visual**: Se actualizó el color primario a `#760712` en `tailwind.config.js`.
2.  **Favicon**: Se configuró `src/assets/Favicon.png` como el icono oficial en `index.html`.
3.  **Dockerización**: 
    *   Se creó un `Dockerfile` multietapa (Node.js para construcción y Nginx para producción).
    *   Se creó un archivo `nginx.conf` optimizado para SPAs (Vue Router).
    *   Se configuró un `docker-compose.yml` para levantar el servicio en el puerto **8085**.

## Pasos para finalizar en Nginx Proxy Manager:

1.  **Levantar el contenedor**: Ejecutaré `docker compose up -d --build`.
2.  **Configurar NPM**:
    *   Ir a tu panel de **Nginx Proxy Manager**.
    *   Añadir un nuevo **Proxy Host**.
    *   **Domain Names**: `adsvnzla.admetricas.com`
    *   **Scheme**: `http`
    *   **Forward Name/IP**: `158.69.215.35` (la IP de tu servidor) o `adsvnzla-app` si están en la misma red de Docker.
    *   **Forward Port**: `8085`
    *   **SSL**: Activar "Request a new SSL Certificate" con Let's Encrypt.

¿Procedo a levantar el contenedor ahora?
