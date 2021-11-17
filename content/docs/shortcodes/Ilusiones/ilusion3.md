# Ilusión Optica de Sesgo en los puntos de intersección o  Ilusión de Zöllner

Hay un gran grupo de ilusiones en las que las líneas que se cruzan en ángulos, particularmente los ángulos agudos, son un factor decisivo en la ilusión. Wundt (1898) llamó la atención sobre esto; los ángulos agudos están sobreestimados y los ángulos obtusos están levemente subestimados. 

{{< p5-global-iframe id="laura" width="600" height="400" >}}
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