## Fotomosaico media

Este mosaico esta basado en https://visualcomputing.github.io/docs/shaders/photomosaic/ para realizar el mosiaco necesitamos de un video o una imagen y un banco de imagenes al cual vamos a mapear las divisiones de la imagen original para hacer el fotomosaico, estas imagenes se ordenan segun el criterio de luminancia es te criterio se implemento tantó en el codigo de javascript como en el fragrment shader.

### Criterio de media
0.333xRED + 0.333xGREEN + 0.333xBLUE

{{< p5-iframe id="fotomosaico1" sketch= "/vc/sketches/photomosaic3.js">}}
### Codigo JS

```js
let W;
let H;
let slider;
let myShader;
let nImages;
let enable_video;
function preload() {
  video = createVideo('/vc/sketches/video1.mp4');
  video.hide();
  img = loadImage('/vc/sketches/mosaico.jpeg')
  alpha0 = loadImage('/vc/sketches/img0.jpeg')
  alpha1 = loadImage('/vc/sketches/img1.jpeg')
  alpha2 = loadImage('/vc/sketches/img2.jpeg')
  alpha3 = loadImage('/vc/sketches/img3.jpeg')
  alpha4 = loadImage('/vc/sketches/img4.jpeg')
  alpha5 = loadImage('/vc/sketches/img5.jpeg')
  alpha6 = loadImage('/vc/sketches/img13.jpeg')
  alpha7 = loadImage('/vc/sketches/img7.jpeg')
  alpha8 = loadImage('/vc/sketches/img8.jpeg')
  alpha9 = loadImage('/vc/sketches/img9.jpeg')
  alpha10 = loadImage('/vc/sketches/img10.jpeg')
  alpha11 = loadImage('/vc/sketches/img11.jpeg')
  alpha12 = loadImage('/vc/sketches/img12.jpeg')
  images = [alpha0, alpha1, alpha2, alpha3, alpha4, alpha5, alpha6, alpha7, alpha8, alpha9, alpha10, alpha11, alpha12]

  nImages = images.length;
  myShader = loadShader("/vc/sketches/shader.vert", "/vc/sketches/shader4.frag")
}
function compare(a, b) {
  return a[0] - b[0];
}
function setup() {
  enable_video = createCheckbox('video', false);
  enable_video.style('color', 'magenta');
  enable_video.changed(() => {
    if (enable_video.checked()) {
      myShader.setUniform("texture", video);
      video.loop();
    } else {
      myShader.setUniform("texture", video);
    }
  });
  enable_video.position(10, 50);
  W = 750;
  H = 570;
  createCanvas(W, H, WEBGL);
  textureMode(NORMAL);
  noStroke();
  shader(myShader);
  myShader.setUniform("texture", img);
  myShader.setUniform("nImages", float(nImages));
  sortedImages = []
  for (let ind = 0; ind < images.length; ind++) {
    let score = 0;
    let cnt = 0;
    for (let i = 0; i < images[ind].width; i += 5)
      for (let j = 0; j < images[ind].height; j += 5) {
        score += 0.333 * images[ind].get(i, j)[0] + 0.333 * images[ind].get(i, j)[1] + 0.333 * images[ind].get(i, j)[2];
        cnt++;
      }
    score = score / (cnt);

    sortedImages.push([score, ind]);
  }
  sortedImages = sortedImages.sort(compare);

  for (let i = 0; i < nImages; i++)
    myShader.setUniform("alpha" + i.toString(), images[sortedImages[i][1]]);

  slider = createSlider(2, 16, 40);
  slider.position(10, 10);
}
function draw() {
  let posSlider = slider.value();
  myShader.setUniform("resolution", parseInt(500 / posSlider));
  beginShape();
  vertex(-W / 2, -H / 2, 0, 0, 0);
  vertex(W / 2, -H / 2, 0, 1, 0);
  vertex(W / 2, H / 2, 0, 1, 1);
  vertex(-W / 2, H / 2, 0, 0, 1);
  endShape();
}
```
### Codigo shader.frag

```c++
precision mediump float;
uniform sampler2D texture;
uniform sampler2D alpha0;
uniform sampler2D alpha1;
uniform sampler2D alpha2;
uniform sampler2D alpha3;
uniform sampler2D alpha4;
uniform sampler2D alpha5;
uniform sampler2D alpha6;
uniform sampler2D alpha7;
uniform sampler2D alpha8;
uniform sampler2D alpha9;
uniform sampler2D alpha10;
uniform sampler2D alpha11;
uniform sampler2D alpha12;

uniform float resolution;
uniform float nImages;

// interpolated color (same name as in vertex shader)
varying vec4 vVertexColor;
// interpolated texcoord (same name as in vertex shader)
varying vec2 vTexCoord;
void main() {
    vec2 symbolCoord = vTexCoord * resolution;
    vec2 imageCoord = floor(symbolCoord);
    symbolCoord = symbolCoord - imageCoord;
    imageCoord = imageCoord * vec2(1.0) / vec2(resolution);
    // obtener nivel de gris
    vec4 pixelColor = texture2D(texture, imageCoord);
    float mean = 0.333*pixelColor.r + 0.3333*pixelColor.g +  0.333*pixelColor.b;

    int index = int(mean * nImages);
    //mean [0,0.15] =index =1
    if (index == 0){
        gl_FragColor = texture2D(alpha0, symbolCoord);
    } else if (index ==1){
        gl_FragColor = texture2D(alpha1, symbolCoord);
    } else if (index ==2){
        gl_FragColor = texture2D(alpha2, symbolCoord);
    } else if (index ==3){
        gl_FragColor = texture2D(alpha3, symbolCoord);
    } else if (index ==4){
        gl_FragColor = texture2D(alpha4, symbolCoord);
    } else if (index ==5){
        gl_FragColor = texture2D(alpha5, symbolCoord);
    } else if (index ==6){
        gl_FragColor = texture2D(alpha6, symbolCoord);
    } else if (index ==7){
        gl_FragColor = texture2D(alpha7, symbolCoord);
    } else if (index ==8){
        gl_FragColor = texture2D(alpha8, symbolCoord);
    } else if (index ==9){
        gl_FragColor = texture2D(alpha9, symbolCoord);
    } else if (index ==10){
        gl_FragColor = texture2D(alpha10, symbolCoord);
    } else if (index ==11){
        gl_FragColor = texture2D(alpha11, symbolCoord);
    } else{
        gl_FragColor = texture2D(alpha12, symbolCoord);
    } 
}
```


