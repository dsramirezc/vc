### Ilusión Óptica de Hermann o ilusión de cuadrícula

Una ilusión de cuadrícula es cualquier tipo de rejilla que engaña la visión de una persona. Las dos ilusiones más frecuentes son la rejilla de Hermann y la rejilla centellante.

{{< p5-instance-div id="ilusion-cuadricula1" >}}
  const squares = 10;
  const size = 500;
  const dxy=size/squares;
  const dy=dxy*0.2;
  const radio=dy/2;

  p5.setup = function() {
    p5.createCanvas(size, size);
  };

  p5.draw = function() {
    p5.noStroke();
    p5.background(0);
    for(var row=0 ;row<size; row+= dxy-dy){
      p5.fill(255, 255,  255 );
      p5.rect(0, row, size, dy);
      p5.rect(row, 0, dy, size);
    }    
  };

{{< /p5-instance-div >}}

### Ilusión de centelleo de la rejilla
La ilusión de centelleo de la rejilla es una ilusión óptica, descubierta por E. Lingelbach en 1994, que por lo general se considera una variación de la ilusión de la cuadrícula de Hermann.

Se construye mediante la superposición de discos blancos en las intersecciones de barras grises ortogonales en un fondo negro. Puntos oscuros parecen aparecer y desaparecer rápidamente en las intersecciones aleatorias, de ahí la etiqueta “centelleante”. Cuando una persona mantiene sus ojos directamente en una sola intersección, no aparece el punto oscuro. Los puntos oscuros desaparecen si uno está demasiado cerca o demasiado lejos de la imagen

{{< p5-instance-div id="ilusion-cuadricula2" >}}
  const squares = 10;
  const size = 500;
  const dxy=size/squares;
  const dy=dxy*0.2;
  const radio=dy/2;

  p5.setup = function() {
    p5.createCanvas(size, size);
  };

  p5.draw = function() {
    p5.noStroke();
    p5.background(0);
    for(var row=0 ;row<size; row+= dxy-dy){
      p5.fill(128, 128, 128);
      p5.rect(0, row, size, dy);
      p5.rect(row, 0, dy, size);
      for(var col=0 ;col<size; col+= dxy-dy){
        p5.fill(255, 255,  255 );
        p5.circle(col+radio,row+radio,radio*2+2);
        p5.circle(row+radio,col+radio,radio*2+2)
      }
    }    
  };

{{< /p5-instance-div >}}

### Diferencias entre las ilusiones de centelleo de la rejilla y Hermann

La diferencia entre la ilusión rejilla Hermann y la ilusión de centelleo es que en esta ultima las ilusiones brillantes tienen puntos en el lugar en el cruce, mientras que no hay puntos existentes en las intersecciones de las ilusiones de la red Hermann. Ya que son tan similares, los dos nombres son comúnmente utilizados indistintamente. Pero la ilusión de centelleo no se produce con una intersección aislada, como en el caso de la rejilla de Hermann; observaciones sugieren que se requiere un mínimo de 3 × 3 intersecciones espaciados uniformemente con discos superpuestos para producir el efecto. Este requisito sugiere la participación de los procesos globales del tipo propuesto para la vinculación y agrupación de características de una imagen, además de los procesos locales.

### Teorias

El efecto de ambas ilusiones ópticas a menudo se explica por un proceso llamado inhibición neural lateral. La intensidad en un punto en el sistema visual no es simplemente el resultado de un único receptor o célula, sino el resultado de un grupo de receptores o células que responden a la presentación de los estímulos en lo que se llama un campo receptivo.

Las células ganglionares de la retina están en íntimo contacto con los fotorreceptores en un área de la retina, el área en el espacio físico al que responden los fotorreceptores es el “campo receptor” de la célula ganglionar. En el centro del campo receptivo los fotorreceptores individuales excitan la célula ganglionar cuando detectan el aumento de la luminancia. Los fotorreceptores en los alrededores inhiben las células ganglionares. Por lo tanto, desde un punto en una intersección está rodeado de más intensidad que un punto en el medio de una línea, la intersección aparece más oscura debido a la mayor inhibición.

Hay fuertes indicios de que la teoría de las células ganglionares de la retina es insostenible. Por ejemplo, haciendo que las líneas de la rejilla onduladas en lugar de rectas elimina tanto la rejilla de Hermann y ilusiones centelleo de la rejilla.