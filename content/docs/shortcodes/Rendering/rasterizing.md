## Rasterización de Circunferencias

Para la rasterización de una circunferencia podemos calcular los puntos que van a hacer parte del borde en un único octante y simultaneamente añadir de forma análoga los puntos de los otros octantes, en la animación aquí presentada el único octante que se calcula de forma directa es el de color verde y los demás son añadidos en base a dicho cálculo.

El proceso comienza en el punto `P=(0,r)`, a partir de allí en cada iteración se va calculando el punto correspondiente al octante verde si se aumenta la coordenada x, Dado que al aumentar x en uno `(++P.x)` el valor de `P.y` puede o bien permanecer igual o bien disminuir en uno, la decisión se reduce a determinar cuál de los puntos `(P.x+1,P.y)` ó `(P.x+1,P.y-1)` es el mejor candidato para estar en la circunferencia.

Para determinar cuál es el mejor candidato se pueden usar diferentes reglas, la aquí presentada se inclina por el punto que tenga el menor error absoluto

{{< columns >}}

{{< katex display >}}
error = | r^2 - x^2 - y^2 |
{{< /katex >}}

{{< /columns >}}


{{< p5-iframe id="rasterizing1" sketch= "/vc/sketches/photomosaic.js">}}


{{< p5-iframe id="rasterizing2" sketch= "/vc/sketches/photomosaic2.js">}}

{{< p5-iframe id="rasterizing2" sketch= "/vc/sketches/photomosaic3.js">}}
