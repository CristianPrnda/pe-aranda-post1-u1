# Análisis 3: Petición POST — Postman

## Configuración
- Método: POST
- URL: https://jsonplaceholder.typicode.com/posts
- Headers: Content-Type: application/json
- Body (raw JSON):
```json
{
  "title": "Laboratorio Programacion Web",
  "body": "Analisis de peticiones HTTP con Postman.",
  "userId": 1
}
```

## Respuesta
- Código de estado: 201 Created
- Headers de respuesta relevantes:
  - Content-Type: application/json; charset=utf-8
  - X-Powered-By: Express
- Body recibido:
```json
{
  "title": "Laboratorio Programacion Web",
  "body": "Analisis de peticiones HTTP con Postman.",
  "userId": 1,
  "id": 101
}
```

## Tests ejecutados
| Test | Resultado |
|---|---|
| Status 201 Created | ✅ Pasó |
| Respuesta incluye id asignado | ✅ Pasó |

## GET vs POST
| Aspecto | GET | POST |
|---|---|---|
| Propósito | Obtener un recurso | Crear un recurso nuevo |
| Cuerpo (body) | No lleva | Lleva datos en JSON |
| Código típico de éxito | 200 OK | 201 Created |
| Modifica el servidor | No | Sí |

## Conclusión
La petición POST a /posts devolvió el código 201 Created, confirmando
que el servidor creó el recurso y lo devolvió junto con un id
generado automáticamente, algo que no ocurre en una petición GET. A
diferencia de GET, POST envía datos en el cuerpo de la petición (el
JSON con title, body y userId) y modifica el estado del servidor en
lugar de solo consultarlo. Los dos tests automatizados en Postman
confirmaron tanto el código de estado esperado como la presencia del
campo id en la respuesta, validando que el comportamiento de la API
coincide con lo documentado. Esta diferencia de propósito (consultar
vs. crear) es la razón por la que ambos métodos usan códigos de éxito
distintos: 200 OK para GET y 201 Created para POST.