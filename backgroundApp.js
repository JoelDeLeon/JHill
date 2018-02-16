
var yoff = 0.0;        // 2nd dimension of perlin noise

var myFont;

function preload() {
  myFont = loadFont('fonts/andalemo.ttf');
}

function setup() {
 
   img = loadImage("images/ocean-gutter2 edit 1 with url.png"); 
  
}

function draw() {

    clear();
     createCanvas(windowWidth+100, windowHeight);
 
   

  // We are going to draw a polygon out of the wave points
    
   stroke(0,255,0); 
    fill(0);
    strokeWeight(1);
    
    
  beginShape(); 
  
  var xoff = 0;       // Option #1: 2D Noise
  // float xoff = yoff; // Option #2: 1D Noise
  
  // Iterate over horizontal pixels
  for (var x = 0; x <= width; x += 10) {
    // Calculate a y value according to noise, map to 
    var y = map(noise(xoff, yoff), 0, 1, 10,170); // Option #1: 2D Noise
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
   
     fill(0, 255, 0);
    
    
     textFont(myFont);
  textSize(windowWidth/10);
text("sweat.fm", 30, 120);
   
    
    stroke(0,255,0); 
    fill(0);
    strokeWeight(5);
    
beginShape(); 
  
  var xoff = 0;       // Option #1: 2D Noise
  // float xoff = yoff; // Option #2: 1D Noise
  
  // Iterate over horizontal pixels
  for (var x = 0; x <= width; x += 10) {
    // Calculate a y value according to noise, map to 
    var y = map(noise(xoff, yoff), 0, 1, 50,170); // Option #1: 2D Noise
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
    
    var newHeight = (windowHeight/height)*height;
    
     // image(img, 0, 0, windowWidth, newHeight);
    
 
     stroke(0,255,0); 
    fill(0);
    strokeWeight(5);
    
    
  beginShape(); 
  
  var xoff = 0;       // Option #1: 2D Noise
  // float xoff = yoff; // Option #2: 1D Noise
  
  // Iterate over horizontal pixels
  for (var x = 0; x <= width; x += 10) {
    // Calculate a y value according to noise, map to 
    var y = map(noise(xoff, yoff), 0, 1, 300,500); // Option #1: 2D Noise
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
    
    
   stroke(0,255,0); 
    noFill();
    
    strokeWeight(30);
  beginShape(); 
  
  var xoff = 0;       // Option #1: 2D Noise
  // float xoff = yoff; // Option #2: 1D Noise
  
  // Iterate over horizontal pixels
  for (var x = 0; x <= width; x += 5) {
    // Calculate a y value according to noise, map to 
    var y = map(noise(xoff, yoff), 0, 1, 200,800); // Option #1: 2D Noise
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
