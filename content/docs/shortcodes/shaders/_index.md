---
bookCollapseSection: true
---

# Shaders

Los shaders son también un conjunto de instrucciones, pero estas son ejecutadas todas al mismo tiempo por cada pixel de la pantalla. Eso significa que el código que escribes tiene que comportarse de manera diferente dependiendo de su posición en la pantalla. Como dijo el tio Ben "un gran poder conlleva una gran responsabilidad", y la computación paralela sigue esta regla; el poderoso diseño de arquitectura de la GPU viene con sus propias limitaciones y restricciones.

Para que cada tubo, o thread, pueda correr en paralelo es necesario que cada uno sea independiente del otro. Es decir que los threads son ciegos y no saben lo que los demás threads están haciendo. Esta restricción implica que toda la información debe fluir en la misma dirección, por lo tanto es imposible conocer el resultado de otro thread. Permitir la comunicación entre threads pondría en riesgo la integridad de los datos.
