let y = 0;

function setup() {
  createCanvas(400, 1000);
}

function draw() {
  noStroke();
  background(0);
  ellipse(100, y, 100, 100);

  if (mouseX > width / 2) {
    y = y + 10;
  }
}
