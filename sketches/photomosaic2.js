let W;
let H;
let slider;
let myShader;
function preload() {
    img = loadImage('/vc/sketches/mosaico.jpeg');
    alpha0 = loadImage('/vc/sketches/img0.jpeg')
    alpha1 = loadImage('/vc/sketches/img1.jpeg')
    alpha2 = loadImage('/vc/sketches/img2.jpeg')
    alpha3 = loadImage('/vc/sketches/img3.jpeg')
    alpha4 = loadImage('/vc/sketches/img4.jpeg')
    alpha5 = loadImage('/vc/sketches/img5.jpeg')
    alpha6 = loadImage('/vc/sketches/img6.jpeg')
    myShader = loadShader("/vc/sketches/shader.vert", "/vc/sketches/shader2.frag")
}
function setup() {
  W = 500;
  H = 500;
  createCanvas(W, H, WEBGL);
  textureMode(NORMAL);
  noStroke();
  shader(myShader);
  myShader.setUniform("texture", img);
  myShader.setUniform("alpha0", alpha0);
  myShader.setUniform("alpha1", alpha1);
  myShader.setUniform("alpha2", alpha2);
  myShader.setUniform("alpha3", alpha3);
  myShader.setUniform("alpha4", alpha4);
  myShader.setUniform("alpha5", alpha5);
  myShader.setUniform("alpha6", alpha6);
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