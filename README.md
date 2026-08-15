# Post-contenido — Unidad 1: Fundamentos de la Web

## Descripción
Repositorio del laboratorio de la Unidad 1 de Programación Web —
Séptimo Semestre. Contiene dos partes: configuración del entorno
de desarrollo (parte-1-entorno/) y análisis de peticiones HTTP con
Chrome DevTools y Postman (parte-2-analisis-http/).

## Parte 1 — Entorno de desarrollo
Página HTML básica inspeccionada con Chrome DevTools. Ver
parte-1-entorno/.

### Cómo ejecutarla
1. Abrir la carpeta parte-1-entorno/ en VS Code.
2. Clic derecho sobre index.html → "Open with Live Server".
3. La página se abre en el navegador en http://127.0.0.1:5500.

## Parte 2 — Análisis de peticiones HTTP
| # | Tipo | URL | Código |
|---|------|-----|--------|
| 1 | GET HTML | https://example.com | 200 OK |
| 2 | GET JSON (exitoso) | /posts/1 | 200 OK |
| 3 | GET JSON (fallido) | /posts/999 | 404 Not Found |
| 4 | POST JSON | /posts | 201 Created |

Ver los análisis completos en parte-2-analisis-http/analisis/.

## Herramientas utilizadas
- VS Code, Git, GitHub
- Google Chrome + DevTools (panel Network)
- Postman (petición POST con tests)

## Conclusiones
Este laboratorio permitió configurar un entorno de desarrollo web
completo y comprender el ciclo de vida de distintas peticiones HTTP.
Se evidenciaron las diferencias entre servir contenido HTML estático
y consumir una API REST que responde en formato JSON, así como el
significado práctico de los códigos de estado (200, 404, 201) en
distintos escenarios. El uso de Chrome DevTools permitió inspeccionar
headers y tiempos de carga en tiempo real, mientras que Postman
facilitó probar peticiones POST con validaciones automatizadas
mediante tests. En conjunto, estas herramientas son fundamentales
para depurar aplicaciones web y verificar el correcto funcionamiento
de las comunicaciones cliente-servidor.