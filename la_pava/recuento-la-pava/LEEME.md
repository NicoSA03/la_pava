# Recuento La Pava

App para contar las botellas y cajas del bar desde el móvil y guardar el recuento del día en PDF.
Funciona sin Claude y sin internet (una vez abierta la primera vez). Cada móvil guarda sus propios datos.

## Publicarla en GitHub Pages (solo una vez)

1. Crea una cuenta gratis en https://github.com (o entra con la tuya).
2. Arriba a la derecha: **+** → **New repository**.
   - Nombre: `recuento-la-pava`
   - Márcalo como **Public**
   - Pulsa **Create repository**.
3. En la página del repositorio pulsa **uploading an existing file**.
4. Arrastra **todo el contenido de esta carpeta** (index.html, sw.js, manifest.webmanifest y las carpetas fonts, icons y vendor). Pulsa **Commit changes**.
5. Ve a **Settings** → **Pages**.
   - En *Branch* elige `main` y carpeta `/ (root)` → **Save**.
6. Espera 1–2 minutos. Tu enlace será:
   `https://TU-USUARIO.github.io/recuento-la-pava/`

Ese enlace es el que mandas al jefe y a los empleados.

## Instalarla en el móvil

- **iPhone (Safari):** abre el enlace → botón compartir → **Añadir a pantalla de inicio**.
- **Android (Chrome):** abre el enlace → menú ⋮ → **Instalar app** o **Añadir a pantalla de inicio**.

## Cosas a saber

- Los productos y recuentos se guardan **solo en ese móvil**. Si se borran los datos del navegador o se desinstala la app, se pierden. Los PDF guardados no se pierden.
- **Guardar PDF**: en el móvil abre el menú de compartir (Guardar en Archivos, WhatsApp…). En ordenador va a Descargas.
- Si cambias algún archivo y lo vuelves a subir, cambia `v1` por `v2` en `sw.js` para que los móviles cojan la versión nueva.
