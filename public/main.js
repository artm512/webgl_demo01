const canvas = document.querySelector('canvas');
const gl = canvas.getContext('webgl');

if(!gl) {
  throw new Error('WebGL not supported');
}

// 1. vertexData = [...]
// 2. create Buffer
// 3. load vertexDate into buffer
// 4. create vertex shader
// 5. create fragment shader
// 6. create program
// 7. attach shaders to program
// 8. enable vertex attributes
// 9. draw

const vertexData = [
  // 0, 1, 0,    // V1.position
  // 1, -1, 0,   // V2.position
  // -1, -1, 0,  // V3.position

  // Front
  0.5, 0.5, 0.5,
  0.5, -.5, 0.5,
  -.5, 0.5, 0.5,
  -.5, 0.5, 0.5,
  0.5, -.5, 0.5,
  -.5, -.5, 0.5,

  // Left
  -.5, 0.5, 0.5,
  -.5, -.5, 0.5,
  -.5, 0.5, -.5,
  -.5, 0.5, -.5,
  -.5, -.5, 0.5,
  -.5, -.5, -.5,

  // Back
  -.5, 0.5, -.5,
  -.5, -.5, -.5,
  0.5, 0.5, -.5,
  0.5, 0.5, -.5,
  -.5, -.5, -.5,
  0.5, -.5, -.5,

  // Right
  0.5, 0.5, -.5,
  0.5, -.5, -.5,
  0.5, 0.5, 0.5,
  0.5, 0.5, 0.5,
  0.5, -.5, 0.5,
  0.5, -.5, -.5,

  // // Top
  0.5, 0.5, 0.5,
  0.5, 0.5, -.5,
  -.5, 0.5, 0.5,
  -.5, 0.5, 0.5,
  0.5, 0.5, -.5,
  -.5, 0.5, -.5,

  // Bottom
  0.5, -.5, 0.5,
  0.5, -.5, -.5,
  -.5, -.5, 0.5,
  -.5, -.5, 0.5,
  0.5, -.5, -.5,
  -.5, -.5, -.5,
];

// const colorData = [
//   1, 0, 0,    // V1.color
//   0, 1, 0,    // V2.color
//   0, 0, 1,    // V3.color
// ];

function randomColor() {
  return [Math.random(), Math.random(), Math.random()];
}

// let colorData = [
//   ...randomColor(),
//   ...randomColor(),
//   ...randomColor(),
// ];

// let colorData = [];
// for (let face = 0; face < 6; face++) {
//   let faceColor = randomColor();
//   for (let vertex = 0; vertex < 6; vertex++) {
//     colorData.push(...faceColor);
//   }
// }

let colorData = [
  0.8208771372239099,
  0.8377264682056472,
  0.5595970833259835,
  0.8208771372239099,
  0.8377264682056472,
  0.5595970833259835,
  0.8208771372239099,
  0.8377264682056472,
  0.5595970833259835,
  0.8208771372239099,
  0.8377264682056472,
  0.5595970833259835,
  0.8208771372239099,
  0.8377264682056472,
  0.5595970833259835,
  0.8208771372239099,
  0.8377264682056472,
  0.5595970833259835,
  0.6383697899098857,
  0.7542970804033661,
  0.15987469526874187,
  0.6383697899098857,
  0.7542970804033661,
  0.15987469526874187,
  0.6383697899098857,
  0.7542970804033661,
  0.15987469526874187,
  0.6383697899098857,
  0.7542970804033661,
  0.15987469526874187,
  0.6383697899098857,
  0.7542970804033661,
  0.15987469526874187,
  0.6383697899098857,
  0.7542970804033661,
  0.15987469526874187,
  0.4748058969160487,
  0.1434985986967683,
  0.33132941767944335,
  0.4748058969160487,
  0.1434985986967683,
  0.33132941767944335,
  0.4748058969160487,
  0.1434985986967683,
  0.33132941767944335,
  0.4748058969160487,
  0.1434985986967683,
  0.33132941767944335,
  0.4748058969160487,
  0.1434985986967683,
  0.33132941767944335,
  0.4748058969160487,
  0.1434985986967683,
  0.33132941767944335,
  0.6797687963970465,
  0.497134726814609,
  0.8521957428261815,
  0.6797687963970465,
  0.497134726814609,
  0.8521957428261815,
  0.6797687963970465,
  0.497134726814609,
  0.8521957428261815,
  0.6797687963970465,
  0.497134726814609,
  0.8521957428261815,
  0.6797687963970465,
  0.497134726814609,
  0.8521957428261815,
  0.6797687963970465,
  0.497134726814609,
  0.8521957428261815,
  0.18835062149041593,
  0.3262350267153872,
  0.6784154021153825,
  0.18835062149041593,
  0.3262350267153872,
  0.6784154021153825,
  0.18835062149041593,
  0.3262350267153872,
  0.6784154021153825,
  0.18835062149041593,
  0.3262350267153872,
  0.6784154021153825,
  0.18835062149041593,
  0.3262350267153872,
  0.6784154021153825,
  0.18835062149041593,
  0.3262350267153872,
  0.6784154021153825,
  0.5548753105818753,
  0.9993365733813392,
  0.9789370174013655,
  0.5548753105818753,
  0.9993365733813392,
  0.9789370174013655,
  0.5548753105818753,
  0.9993365733813392,
  0.9789370174013655,
  0.5548753105818753,
  0.9993365733813392,
  0.9789370174013655,
  0.5548753105818753,
  0.9993365733813392,
  0.9789370174013655,
  0.5548753105818753,
  0.9993365733813392,
  0.9789370174013655
];


const positionBuffer = gl.createBuffer();
gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);
gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertexData), gl.STATIC_DRAW);

const colorBuffer = gl.createBuffer();
gl.bindBuffer(gl.ARRAY_BUFFER, colorBuffer);
gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(colorData), gl.STATIC_DRAW);

const vertexShader = gl.createShader(gl.VERTEX_SHADER);
gl.shaderSource(vertexShader, `
precision mediump float;

attribute vec3 position;
attribute vec3 color;
varying vec3 vColor;
uniform mat4 matrix;
void main() {
  vColor = color;
  gl_Position = matrix * vec4(position, 1);
}
`);
gl.compileShader(vertexShader);

const fragmentShader = gl.createShader(gl.FRAGMENT_SHADER);
gl.shaderSource(fragmentShader,`
precision mediump float;

varying vec3 vColor;

void main() {
    gl_FragColor = vec4(vColor, 1);
}
`);
gl.compileShader(fragmentShader);

const program = gl.createProgram();
gl.attachShader(program, vertexShader);
gl.attachShader(program, fragmentShader);
gl.linkProgram(program);

const positionLocation = gl.getAttribLocation(program, 'position');
gl.enableVertexAttribArray(positionLocation);
gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);
gl.vertexAttribPointer(positionLocation, 3, gl.FLOAT, false, 0, 0);

const colorLocation = gl.getAttribLocation(program, 'color');
gl.enableVertexAttribArray(colorLocation);
gl.bindBuffer(gl.ARRAY_BUFFER, colorBuffer);
gl.vertexAttribPointer(colorLocation, 3, gl.FLOAT, false, 0, 0);

gl.useProgram(program);
gl.enable(gl.DEPTH_TEST);

const uniformLocations = {
  matrix: gl.getUniformLocation(program, `matrix`),
};

// glmatrix.net - glMatrix
// - JavaScript ?????????????????????????????????
// - public/gl-matrix-min.js
const mat4 = glMatrix.mat4;
// const matrix = mat4.create();
const modelMatrix = mat4.create();
const viewMatrix = mat4.create();
const projectionMatrix = mat4.create();
mat4.perspective(projectionMatrix, 
  75 * Math.PI/180, // vertical field-of-view (angle, radians)
  canvas.width/canvas.height, // aspect W/H
  1e-4, // near cull distance
  1e4 // far cull distance
);

const mvMatrix = mat4.create();
const mvpMatrix = mat4.create();

mat4.translate(modelMatrix, modelMatrix, [-1.5, 0, -2]);

mat4.translate(viewMatrix, viewMatrix, [-3, 0, 1]);
mat4.invert(viewMatrix, viewMatrix);

// mat4.scale(matrix, matrix, [0.5, 0.5, 0.5]);

function animate() {
  requestAnimationFrame(animate);
  // mat4.rotateZ(matrix, matrix, Math.PI/2 / 70);
  // mat4.rotateX(matrix, matrix, Math.PI/2 / 70);

  mat4.multiply(mvMatrix, viewMatrix, modelMatrix);
  mat4.multiply(mvpMatrix, projectionMatrix, mvMatrix);
  gl.uniformMatrix4fv(uniformLocations.matrix, false, mvpMatrix);
  gl.drawArrays(gl.TRIANGLES, 0, vertexData.length / 3);
}

animate();
