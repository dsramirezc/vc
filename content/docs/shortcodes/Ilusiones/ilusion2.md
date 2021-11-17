## Ilusión Cognitiva de Percepción de Profundidad

Ésta ilusión fué inspirada por éste [vídeo](https://www.youtube.com/watch?v=BmuhsXAbsB0)

Las ilusiones cognitivas surgen por la interacción con supuestos sobre el mundo, lo que lleva a "inferencias inconscientes", una idea sugerida por primera vez en el siglo XIX por el físico y médico alemán Hermann Helmholtz.

Las ilusiones pueden basarse en la capacidad de un individuo para ver en tres dimensiones, aunque la imagen que llega a la retina es solo bidimensional. En ésta ilusión podemos observar cómo el cuadrado del centro parece sobresalir de los demás

{{< p5-instance-div id="square31" >}}

  //n is of the form 8 * x - 1
  const n = 31;
  const size = 620;

  p5.setup = function() {
    p5.createCanvas(size, size);
  };

  p5.draw = function() {

    const step = size / n;
    const mid = Math.floor( n / 2 );

    p5.noStroke();
    p5.background(0);

    for( var dx = 0; dx < 2; ++ dx )
    {
      for( var dy = 0; dy < 2; ++ dy )
      { 
        for( var i = 0; 2 * i < mid; ++ i )
        {
          const len = mid - 2 * i + 1;
          for( var row = 0; row < len; ++row )
          {
            for( var col = 0; col < len; ++ col )
            {
              if( row == 0 || row == len - 1 || col == 0 || col == len - 1 )
              {
                var real_row = row + i + dx * mid;
                var real_col = col + i + dy * mid;

                var color = i % 2;
                
                var d_max = Math.max( Math.abs( real_row - mid ), Math.abs( real_col - mid ) );
                if( 2 * d_max < mid )
                    color = ( color + 1 ) % 2;
                
                if( color == 1 )
                  p5.square( real_row * step, real_col * step, step );
              }
            }
          }
        }    
      }
    }
  };

{{< /p5-instance-div >}}

### Cambiando algunos de los parámetros del código podemos obtener una ilusión diferente

{{< p5-instance-div id="square63" >}}

  //n is of the form 8 * x - 1
  const n = 63;
  const size = 630;

  p5.setup = function() {
    p5.createCanvas(size, size);
  };

  p5.draw = function() {

    const step = size / n;
    const mid = Math.floor( n / 2 );

    p5.noStroke();
    p5.background(0);

    for( var dx = 0; dx < 2; ++ dx )
    {
      for( var dy = 0; dy < 2; ++ dy )
      { 
        for( var i = 0; 2 * i < mid; ++ i )
        {
          const len = mid - 2 * i + 1;
          for( var row = 0; row < len; ++row )
          {
            for( var col = 0; col < len; ++ col )
            {
              if( row == 0 || row == len - 1 || col == 0 || col == len - 1 )
              {
                var real_row = row + i + dx * mid;
                var real_col = col + i + dy * mid;

                var color = i % 2;
                
                var d_max = Math.max( Math.abs( real_row - mid ), Math.abs( real_col - mid ) );
                if( 2 * d_max < mid )
                    color = ( color + 1 ) % 2;
                
                if( color == 1 )
                  p5.square( real_row * step, real_col * step, step );
              }
            }
          }
        }    
      }
    }
  };

{{< /p5-instance-div >}}
