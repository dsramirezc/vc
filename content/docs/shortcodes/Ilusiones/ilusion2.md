## 3D Illusion with Squares

This illusion was inspired by this [video](https://www.youtube.com/watch?v=BmuhsXAbsB0)

It illustrates how using only 2D geometry objects one can create the illusion of a 3D square that goes beyond the screen 

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

### By changing the parameters of the code the illusion may be different

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
