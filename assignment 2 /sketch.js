var water = [];
var boat;

function setup() {
    //create water
    createCanvas(windowWidth, windowHeight);
    for (var i = 0; i < width; i = i + 30) {
        water[i] = new Water();
    }
    //create boat
    boat = new Boat(height / 2 - 10, 1);
}

function draw() {
    background(192, 250, 242);
    stroke(51, 255, 255);
    fill(51, 255, 255, 150);
    rect(0, height / 2, width, height / 2);
    //display water
    for (var i = 0; i < water.length; i++) {
        if (water[i]) {
            water[i].display();
            water[i].waves();
        }
    }
    if (boat.z > width) {
        boat.z = 0;
    }
    // display and move boat
    boat.move();
    boat.display();
}
// water constructor
function Water() {
    this.x = random(width);
    this.y = random(height / 2 + 50, height);
    console.log(this.x);
    this.speed = random(1, 2);
    this.waves = function() {
        if (this.x > width) {
            this.x = -100;
        }
        this.x = this.x + this.speed;
        this.y += random(-1.25, 1.25);

    }
    this.display = function() {
        stroke(51, 153, 255);
        line(this.x, this.y, this.x + 50, this.y);
    }

}
//boat constructor
function Boat() {
    this.z = 0;
    this.y = height / 2 - 20;
    this.boatSpeed = 1;
    this.move = function() {
        if (this.z > width) {
            this.z = width;
        }
        this.y += random(-1, 1);
        this.z = this.z + this.boatSpeed;
    }
    this.display = function() {
        fill(153, 102, 0);
        arc(this.z, this.y, 200, 150, radians(0), radians(180), CHORD);
        fill(255, 0, 0);
        triangle(this.z - 50, this.y - 2, this.z + 50, this.y - 2, this.z - 25, this.y - 200);
    }
}
