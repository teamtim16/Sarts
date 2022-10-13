let b;
let bs = [];

function setup() {
  createCanvas(400, 200);
  
  // b = new Walker();
  for (let i=0; i<100; i++) {
    let c = color(random(50, 200));
    let walker = new Walker(c);
    bs.push(walker);
  }
}


function draw() {
  background(220, 5);
  // b.walk();
  // b.show();
  
  for (let i=0; i<bs.length; i++) {
    bs[i].walk();
    bs[i].show();
  }
}


class Walker {
  constructor(aColor) {
    // this.x = width/2;
    // this.y = height/2;
    this.pos = createVector(width/2, height/2);
    this.w = 1;
    this.e = 3;
    this.c = aColor;
  }
  
  walk() {
    // this.x += random(-this.e, this.e);
    // this.y += random(-this.e, this.e);
    
    this.vel = createVector(random(-this.e, this.e), random(-this.e, this.e));
    this.pos.add(this.vel);
  }
  
  show() {
    noStroke();
    fill(this.c);
    ellipse(this.pos.x, this.pos.y, this.w);
  }

}