
var yoff = 0.0;        // 2nd dimension of perlin noise

function setup() {
 
   
}

function draw() {

     createCanvas(windowWidth+100, windowHeight);
 
    
  fill(196, 218, 241);
noStroke();
  // We are going to draw a polygon out of the wave points
  beginShape(); 
  
  var xoff = 0;       // Option #1: 2D Noise
  // float xoff = yoff; // Option #2: 1D Noise
  
  // Iterate over horizontal pixels
  for (var x = 0; x <= width; x += 10) {
    // Calculate a y value according to noise, map to 
    var y = map(noise(xoff, yoff), 0, 1, 100,800); // Option #1: 2D Noise
    // float y = map(noise(xoff), 0, 1, 200,300);    // Option #2: 1D Noise
    
    // Set the vertex
    vertex(x, y); 
    // Increment x dimension for noise
    xoff += 0.05;
  }
  // increment y dimension for noise
  yoff += 0.03;
  vertex(width, height);
  vertex(0, height);
  endShape(CLOSE);
    
   
}
