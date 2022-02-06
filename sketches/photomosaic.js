let W;
let H;
let slider;
let myShader;
function preload() {
    img = createVideo('/vc/sketches/video1.mp4');
    img.hide();
    om = loadImage('/vc/sketches/img0.jpeg')
    myShader = loadShader("/vc/sketches/shader.vert", "/vc/sketches/shader.frag")
}
function setup() {
    W = 500;
    H = 500;
    createCanvas(W, H, WEBGL);
    textureMode(NORMAL);
    noStroke();
    shader(myShader);
    myShader.setUniform("img", img);
    slider = createSlider(2, 16, 40);
    slider.position(10, 10);
    img.loop()
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