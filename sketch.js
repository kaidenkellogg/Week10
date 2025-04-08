let eyeX1 = 140;
let eyeX2 = 260;
let eyeSpeed1 = 1.5;
let eyeSpeed2 = 2;

let browY1 = 120;
let browY2 = 120;
let browSpeed1 = 1;
let browSpeed2 = 1.2;

let noseX = 200;
let noseY = 200;
let noseSpeedX = 1;
let noseSpeedY = 1;

let titleSize = 32;
let sizeDirection = 1;
let sizeCount = 0;
let growing = true;

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(230);

  // Face outline
  fill(255, 220, 180);
  ellipse(200, 200, 150, 180); // face shape

  // Moving eyes (x-axis)
  eyeX1 += eyeSpeed1;
  eyeX2 += eyeSpeed2;
  if (eyeX1 > 160 || eyeX1 < 120) eyeSpeed1 *= -1;
  if (eyeX2 > 280 || eyeX2 < 240) eyeSpeed2 *= -1;

  fill(0);
  ellipse(eyeX1, 180, 20, 20); // left eye
  ellipse(eyeX2, 180, 20, 20); // right eye

  // Moving eyebrows (y-axis)
  browY1 += browSpeed1;
  browY2 += browSpeed2;
  if (browY1 > 130 || browY1 < 110) browSpeed1 *= -1;
  if (browY2 > 130 || browY2 < 110) browSpeed2 *= -1;

  fill(80, 42, 42);
  rect(130, browY1, 40, 5); // left eyebrow
  rect(230, browY2, 40, 5); // right eyebrow

  // Diagonal moving nose
  noseX += noseSpeedX;
  noseY += noseSpeedY;
  if (noseX > 210 || noseX < 190) noseSpeedX *= -1;
  if (noseY > 210 || noseY < 190) noseSpeedY *= -1;

  fill(255, 150, 150);
  triangle(noseX, noseY, noseX - 5, noseY + 20, noseX + 5, noseY + 20);

  // Mouth (static)
  fill(255, 100, 100);
  arc(200, 250, 50, 30, 0, PI); // smiling mouth

  // Animated title
  textAlign(CENTER);
  textSize(titleSize);
  fill(0);
  text("My Animated Self-Portrait", width / 2, 40);

  titleSize += sizeDirection;

  if (growing && titleSize >= 37) {
    sizeCount++;
    sizeDirection = -1;
    growing = false;
  } else if (!growing && titleSize <= 27) {
    sizeCount++;
    sizeDirection = 1;
    growing = true;
  }

  if (sizeCount >= 10) {
    sizeCount = 0;
  }
}