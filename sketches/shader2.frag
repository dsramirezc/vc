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
    float mean = 0.299*pixelColor.r + 0.587*pixelColor.g +  0.114*pixelColor.b;
    //float mean = 0.333*pixelColor.r + 0.3333*pixelColor.g +  0.333*pixelColor.b;

    int index = int((mean * nImages+0.001));
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