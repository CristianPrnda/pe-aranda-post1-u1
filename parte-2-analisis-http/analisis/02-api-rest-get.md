# Análisis 2: Petición GET — API REST (jsonplaceholder)

## Petición exitosa — /posts/1

### Información general
- URL: https://jsonplaceholder.typicode.com/posts/1
- Método: GET
- Código de estado: 200 OK

### Headers de Request
| Header | Valor |
|--------|-------|
| Host | jsonplaceholder.typicode.com |
| User-Agent | Mozilla/5.0 (Linux; Android 15; Pixel 9) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/151.0.0.0 Mobile Safari/537.36 |
| Accept | text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7 |

### Headers de Response
| Header | Valor | Significado |
|--------|-------|-------------|
| Content-Type | application/json; charset=utf-8 | Indica que el cuerpo de la respuesta es un objeto JSON |
| Content-Length | 2 | Tamaño en bytes del cuerpo de la respuesta |

### Cuerpo de la respuesta
```json
{
  "userId": 1,
  "id": 1,
  "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
  "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
}
```

### Tiempos de carga
| Fase | Tiempo (ms) |
|------|------------|
| DNS Lookup | 0 |
| TTFB | 69,69 |
| Content Download | 0,71 |

## Petición fallida — /posts/999

### Información general
- URL: https://jsonplaceholder.typicode.com/posts/999
- Método: GET
- Código de estado: 404 Not Found

### Observación
El recurso solicitado no existe en el servidor. La API devuelve un
código 404 en lugar de un 200 con un cuerpo vacío, siguiendo el
estándar HTTP para indicar que el recurso no fue encontrado.

## Comparación HTTP vs API REST
| Aspecto | example.com (Análisis 1) | jsonplaceholder API |
|---|---|---|
| Content-Type | text/html | application/json |
| Formato de respuesta | Documento HTML | Objeto JSON |
| Propósito | Servir una página web | Servir datos estructurados |
| Código con recurso inexistente | — | 404 Not Found |

## Conclusión
La API REST de jsonplaceholder respondió con código 200 OK y un
cuerpo en formato JSON para el recurso existente (/posts/1), mientras
que la petición al recurso inexistente (/posts/999) devolvió 404 Not
Found. La diferencia principal frente a la petición HTML del análisis
anterior está en el header Content-Type: application/json en lugar de
text/html, lo que le indica al cliente cómo debe interpretar el
cuerpo de la respuesta. Esto evidencia que una misma arquitectura
HTTP (métodos, códigos de estado, headers) se reutiliza tanto para
servir páginas web como para servir datos estructurados a través de
una API. El código 404 confirma que el servidor sigue el estándar
HTTP para indicar recursos no encontrados en lugar de responder 200
con un body vacío o de error.