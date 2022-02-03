precision mediump float;

// define color model
uniform bool cmy;

// interpolated color
varying vec4 vVertexColor;

void main() {
  // if cmy the vVertexColor complement color is then taken
  gl_FragColor = cmy ? vec4((vec3(1) - vVertexColor.rgb), vVertexColor.a) : vVertexColor;
}