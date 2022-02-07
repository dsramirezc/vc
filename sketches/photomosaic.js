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
