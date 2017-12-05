
function setup() { 
  createCanvas(600, 400);
	background (250,250,100); 
	frameRate(120);  

} 

function draw() { 
}

function mouseWheel() {
background(76, 0, 255);
}

function mouseDragged() {
noStroke(); 
	ellipse(mouseX, mouseY, 20, 20);
	fill(random(255),random(255),random(255));
}
