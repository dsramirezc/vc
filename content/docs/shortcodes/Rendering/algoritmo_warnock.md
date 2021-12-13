## Algoritmo de Warnok

El algoritmo de warnock hace parte de los algoritmos de visibilidad y su enfoque esta en renderizar la imagen, dado que tambien existen metodos de ray-tracing. Este algoritmo pertenece a los HSR (Hidden surface removal algorithms), de los cuales buscan pintar imagenes que solo nos permiten ver lo visible sin importar si están entrecruzadas o superpuestas los objetos geométricos que se encuentran en ella. Existen otra variedad de algoritmos como, el algoritmo del pintor, BSP (Binary Space Partitioning), el Z-buffer, el ray-tracing para superficies poliédricas y cuádricas, algoritmo watkins o conocido como el barrido incremental.

![Alt text](http://what-when-how.com/wp-content/uploads/2012/06/tmp3189329_thumb.png)
### Procedimiento

El algoritmo warnock es un algoritmo que hace uso del famoso “divide y vencerás”, aplica métodos recursivos para identificar casos bases y llegado a ese punto renderiza o pinta en la pantalla el objeto o en este caso el polígono que pretendemos pasar a pixeles, existen cuatro posibles relaciones entre polígonos y elementos de área, estos son:


![Alt text](https://www.cs.uic.edu/~jbell/CourseNotes/ComputerGraphics/diagrams/wartypes.gif)

Como se puede ver en la figura 1, en el primer caso nuestro marco de subdivisión debe contener completamente al objeto, en el caso 2 la intersección se ve cuando contiene parte del objeto, en el caso tres el marco no contiene absolutamente nada y en el último escenario el marco se encuentra completamente dentro del objeto o polígono.

El algoritmo de warnock es una de las soluciones que se encuentran en el enfoque de “visibilidad” y su resultado que son rectángulos(bloques) de píxeles, se encarga de dar una mejor visibilidad por cada respectivo cuadrante que llegó a subdividirse, a su vez este se considera que tiene precisión de imagen, dado a que se calcula el polígono visible en cada bloque.

Para usar este algoritmo inicialmente necesitamos dos parámetros, una lista de polígonos y la vista inicial que comprende todos los polígonos que se pueden encontrar en el “canvas”. Después de haber recibido los parámetros el algoritmo mira si es posible darle solución al marco de vista que se está enfocando actualmente dado a los casos base, si es así entonces este pintara en pantalla los píxeles de la imagen, en caso contrario se dividirá el rectángulo actual en cuatro partes y cada una de ellas se le aplica el algoritmo warnock de nuevo, de manera recursiva.

![Alt text](https://i.imgur.com/fnOlRKZ.png)

### Ventajas

Sigue la estrategia de divide y vencerás. Por lo tanto, se pueden usar computacion paralela para acelerar el proceso.

No se requiere búfer de memoria adicional.