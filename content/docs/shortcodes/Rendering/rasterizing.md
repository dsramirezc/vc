## Ilusión Cognitiva de Percepción de Profundidad

Ésta ilusión fué inspirada por éste [vídeo](https://www.youtube.com/watch?v=BmuhsXAbsB0)

Las ilusiones cognitivas surgen por la interacción con supuestos sobre el mundo, lo que lleva a "inferencias inconscientes", una idea sugerida por primera vez en el siglo XIX por el físico y médico alemán Hermann Helmholtz.

Las ilusiones pueden basarse en la capacidad de un individuo para ver en tres dimensiones, aunque la imagen que llega a la retina es solo bidimensional. En ésta ilusión podemos observar cómo el cuadrado del centro parece sobresalir de los demás

{{< p5-instance-div id="rasterizing" >}}

    const size = 630;
    var counter = 0;
    
    var n, radius, step, mid;

    var x, y;

    var slider_n, slider_r;

    p5.setup = function() {
        
        canvas = p5.createCanvas(size, size);
        p5.noStroke();

        slider_n = p5.createSlider(20, 500, 60, 10);
        slider_n.position( canvas.position().x + 10, canvas.position().y + size );
        slider_n.style( 'width', '290px' );

        slider_r = p5.createSlider( 10, 40, 30, 1 );
        slider_r.position( canvas.position().x + size - 300, canvas.position().y + size );
        slider_r.style( 'width', '290px' );
    }

    reset = function() {
        p5.background( 250 );

        counter = 1;

        
        n = slider_n.value();

        radius = Math.floor( n * slider_r.value() / 100 );

        y = radius;
        x = 0;
        
        step = size / n;
        mid = Math.floor( n / 2 );
    }

    p5.draw = function() {
        
        if( n != slider_n.value() )
            reset();
  
        if( radius != Math.floor( n * slider_r.value() / 100 ) )
            reset();

        ++counter;

        if( counter == 0 )
            reset();
        
        if( counter < 0 ) return;

        if( counter % Math.ceil( 300 / n ) ) return;
        

        p5.fill( 200 );
        //Center
        p5.square( mid * step, mid * step, step );
        
        //4 sides
        p5.square( ( mid + radius ) * step, mid * step, step );
        p5.square( ( mid - radius ) * step, mid * step, step );
        p5.square( mid * step, ( mid + radius ) * step, step );
        p5.square( mid * step, ( mid - radius ) * step, step );

        var del_1 = radius * radius - ( x + 1 ) * ( x + 1 ) - y * y;
        var del_2 = radius * radius - ( x + 1 ) * ( x + 1 ) - ( y - 1 ) * ( y - 1 );

        if( Math.abs( del_2 ) < Math.abs( del_1 ) ) --y;
        ++x;
        
        if( x > y ) 
        {
            counter = -130;
            return;
        }

        p5.fill( 0, 245, 0 );
        p5.square( ( mid + x ) * step, ( mid + y ) * step, step );

        p5.fill( 245, 245, 0 );
        p5.square( ( mid + y ) * step, ( mid + x ) * step, step );

        p5.fill( 245, 127, 0 );
        p5.square( ( mid + y ) * step, ( mid - x ) * step, step );

        p5.fill( 245, 0, 0 );
        p5.square( ( mid + x ) * step, ( mid - y ) * step, step );

        p5.fill( 245, 0, 245 );
        p5.square( ( mid - x ) * step, ( mid - y ) * step, step );

        p5.fill( 148, 0, 211 );
        p5.square( ( mid - y ) * step, ( mid - x ) * step, step );

        p5.fill( 75, 0, 130 );
        p5.square( ( mid - y ) * step, ( mid + x ) * step, step );

        p5.fill( 0, 0, 245 );
        p5.square( ( mid - x ) * step, ( mid + y ) * step, step );
    }


{{< /p5-instance-div >}}
