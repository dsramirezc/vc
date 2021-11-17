# Ilusión Optica de Sesgo en los puntos de intersección o  Ilusión de Zöllner

Hay un gran grupo de ilusiones en las que las líneas que se cruzan en ángulos, particularmente los ángulos agudos, son un factor decisivo en la ilusión. Wundt (1898) llamó la atención sobre esto; los ángulos agudos están sobreestimados y los ángulos obtusos están levemente subestimados. 

{{< p5-global-iframe id="laura" width="620" height="450" >}}
let angle=80
function setup() {
  angleMode(DEGREES); 
  less = createButton("Change Angle");
  less.mouseClicked(changeAngle)
  createCanvas(600, 400);
  
}

function draw() {
  background(255)
  print(angle)
  let aux=0
  for (let i = 0; i < 400; i=i+38) {
  strokeWeight(4.5)
  line(40, i, 560, i)
    for (let j = 40;j<555; j=j+16) {
      strokeWeight(2)
      if(aux%2!=0){
        line(j,(sin(angle)*20)+i, (cos(angle)*20)+j,i)
        line(j+8,i-(sin(angle)*20), j+8-(cos(angle)*20),i)
      } else {
        line((cos(angle)*20)+j, (sin(angle)*20)+i,j,i)
        line(j+8-(cos(angle)*20), i-(sin(angle)*20),j+8,i)
      }
      
      
      
    }
    aux++
  }
  
  
}
function changeAngle(){
   angle=angle+5
}
{{< /p5-global-iframe >}}
"El problema de encontrar los puntos de intersección se puede formular como la solución de un sistema de ecuaciones lineales. Esto permite un análisis limpio de las influencias de los diferentes parámetros en las soluciones y, por lo tanto, proporciona un poderoso modelo predictivo."
![Alt text](https://raw.githubusercontent.com/lgordillom/imagenes/main/%C3%ADndice.jpeg)
En experimentos con esta ilusión también se ha encontrado que el efecto disminuye con un agudo gradual
ángulo entre la línea principal y los oblicuos, El valor donde se produce el máximo está en algún punto intermedio. 10 ° y 30 °; 
![Alt text](https://raw.githubusercontent.com/lgordillom/imagenes/main/%C3%ADndice2.jpeg)

## Referencia
Cornelia Fermüller, Henrik Malm,
Uncertainty in visual processes predicts geometrical optical illusions,
Vision Research,
Volume 44, Issue 7,
2004,
Pages 727-749,
ISSN 0042-6989,
https://doi.org/10.1016/j.visres.2003.09.038.
