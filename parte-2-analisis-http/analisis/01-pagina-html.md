# Análisis 1: Petición GET — example.com

## Información general
- URL: https://example.com
- Método: GET
- Código de estado: 200 OK

## Headers de Request
| Header | Valor |
|--------|-------|
| Host | example.com |
| User-Agent | Mozilla/5.0 (Linux; Android 15; Pixel 9) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/151.0.0.0 Mobile Safari/537.36 |
| Accept | text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7 |

## Headers de Response
| Header | Valor | Significado |
|--------|-------|-------------|
| Content-Type | text/html; charset=UTF-8 | Indica que el cuerpo es HTML codificado en UTF-8 |
| Cache-Control | max-age=0 | (explica qué controla del cacheo) |

## Tiempos de carga
| Fase | Tiempo (ms) |
|------|------------|
| DNS Lookup | 73 |
| TTFB | 69 |

## Conclusión
La petición GET a example.com devolvió un código 200 OK con un tiempo
total de carga de 73.90 ms, donde la fase de espera (TTFB) representó
la mayor parte del tiempo con 69 ms. Esto es esperable en una
petición de documento HTML, ya que el servidor debe procesar la
solicitud antes de enviar el primer byte de respuesta. Los headers
de respuesta confirman que el contenido es texto HTML codificado en
UTF-8, y el header Cache-Control indica [explica según lo que hayas
visto, ej: "que el navegador puede o no cachear el recurso"]. En
general, el ciclo completo de la petición (DNS, conexión, espera y
descarga) fue rápido dado que example.com es un sitio estático y
liviano.