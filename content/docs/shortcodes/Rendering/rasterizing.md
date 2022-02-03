## Rasterización de Circunferencias

Para la rasterización de una circunferencia podemos calcular los puntos que van a hacer parte del borde en un único octante y simultaneamente añadir de forma análoga los puntos de los otros octantes, en la animación aquí presentada el único octante que se calcula de forma directa es el de color verde y los demás son añadidos en base a dicho cálculo.

El proceso comienza en el punto `P=(0,r)`, a partir de allí en cada iteración se va calculando el punto correspondiente al octante verde si se aumenta la coordenada x, Dado que al aumentar x en uno `(++P.x)` el valor de `P.y` puede o bien permanecer igual o bien disminuir en uno, la decisión se reduce a determinar cuál de los puntos `(P.x+1,P.y)` ó `(P.x+1,P.y-1)` es el mejor candidato para estar en la circunferencia.

Para determinar cuál es el mejor candidato se pueden usar diferentes reglas, la aquí presentada se inclina por el punto que tenga el menor error absoluto

{{< columns >}}

{{< katex display >}}
error = | r^2 - x^2 - y^2 |
{{< /katex >}}

{{< /columns >}}

{{< p5-instance-div id="rasterizing" >}}

let theShader;
theShader = p5.loadShader("shader.vert", "shader.frag");

let windowWidth=500;
let windowHeight=500;
let width=100;
let heigth=100;
p5.setup=function() {

  // shaders require WEBGL mode to work

  p5.createCanvas(windowWidth, windowHeight, p5.WEBGL);

  p5.noStroke();
  p5.background(250);

}

function draw() {

  // shader() sets the active shader with our shader

  shader(theShader);

  // rect gives us some geometry on the screen

  rect(0,0,width,height);

  

  // print out the framerate

  //print(frameRate());

}

function windowResized(){

  resizeCanvas(windowWidth, windowHeight);

}


/*
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

        if( counter % Math.ceil( 500 / n ) ) return;
        

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

*/
{{< /p5-instance-div >}}
