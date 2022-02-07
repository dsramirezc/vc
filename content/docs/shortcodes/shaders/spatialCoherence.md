## Fotomosaico coherencia espacial

Este mosaico esta basado en https://visualcomputing.github.io/docs/shaders/spatial_coherence/ para realizar el mosiaco necesitamos de un video o una imagen y otra imagen que sea la representacion del om, que va a ser el caracter con el cual vamos a realizar el mosaico si esta activada esta opción, cada sub parte de la imagen original al ser dividida nos dará una region de la imagen original que usaremos para mapear la nueva zona perteneciente al fotomosaico, con una nueva textura que se acoplé al color de la subparte analizada.

{{< p5-iframe id="fotomosaico1" sketch= "/vc/sketches/photomosaic.js">}}

### Codigo JS
```js
let W;
let H;
let slider;
let myShader;
function preload() {
  video = createVideo('/vc/sketches/video1.mp4');
  video.hide();
  img = loadImage('/vc/sketches/mosaico.jpeg');
  om = loadImage('/vc/sketches/om.png');
  myShader = loadShader("/vc/sketches/shader.vert", "/vc/sketches/shader.frag")
}
function setup() {
  enable_video = createCheckbox('video', false);
  enable_video.style('color', 'magenta');
  enable_video.changed(() => {
    if (enable_video.checked()) {
      myShader.setUniform("img", video);
      video.loop();
    } else {
      myShader.setUniform("img", img);
    }
  });
  enable_video.position(10, 50);
  enable_om = createCheckbox('om', false);
  enable_om.style('color', 'magenta');
  enable_om.changed(() => {
    if (enable_om.checked()) {
      myShader.setUniform("om_on", true);
    } else {
      myShader.setUniform("om_on", false);
    }
  });
  enable_om.position(10, 100);
  W = 750;
  H = 570;
  createCanvas(W, H, WEBGL);
  textureMode(NORMAL);
  noStroke();
  shader(myShader);
  myShader.setUniform("img", img);
  myShader.setUniform("om", om);
  slider = createSlider(2, 16, 10000);
  slider.position(10, 10);
}
function draw() {
  let posSlider = slider.value();
  myShader.setUniform("resolution", parseInt(300 / posSlider));
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

// img (image or video) is sent by the sketch
uniform sampler2D img;
// om is sent by the sketch
uniform sampler2D om;
// toggles om display
uniform bool om_on;
// target horizontal & vertical resolution
uniform float resolution;

// interpolated color (same name and type as in vertex shader)
varying vec4 vVertexColor;
// interpolated texcoord (same name and type as in vertex shader)
varying vec2 vTexCoord;

void main() {
  // remap omCoord to [0.0, resolution] ∈ R
  vec2 omCoord = vTexCoord * resolution;
  // remap imgCoord to [0.0, resolution] ∈ Z
  vec2 imgCoord = floor(omCoord);
  // remap omCoord to [0.0, 1.0] ∈ R
  omCoord = omCoord - imgCoord;
  // remap imgCoord to [0.0, 1.0] ∈ R
  imgCoord = imgCoord / vec2(resolution);
  // image texel (may be used as color hash key, e.g., photomosaic)
  vec4 imgTexel = texture2D(img, imgCoord);
  if(om_on) {
    vec4 omTexel = texture2D(om, omCoord);
    gl_FragColor =  omTexel*imgTexel*2.0;
  }
  else {
    gl_FragColor = imgTexel;
  }
}
```


