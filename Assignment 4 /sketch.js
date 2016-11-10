var water = [];
var boat = [];
var desc;
var canvas;
var button;
var slider;

function setup() {
    canvas = createCanvas(windowWidth, windowHeight);
    canvas.position(0, 0);
    canvas.style('z-index', '-1');
    desc = createP("Waves");
    desc.position(width / 2, height / 1.8);
    desc.style("fontSize", "24px");
    slider = createSlider(0, 5, 1, 0.1);
    slider.position(20, 20);
    button = createButton('Count');
    button.position(10, 0);
    button.mousePressed(counter);

    for (var i = 0; i < width; i++) {
        water[i] = new Water();
    }
    //create boat
    for (i = 0; i < 1; i++) {
        boat.push(new Boat());
    }
}

function draw() {

    background(192, 250, 242);
    stroke(51, 255, 255);
    fill(51, 255, 255, 150);
    rect(0, height / 2, width, height / 2);


    //display water
    for (var i = 0; i < water.length; i = i + 30) {
        if (water[i]) {
            water[i].display();
            water[i].waves();
        }
    }
    /**
     * Checks to see if the boat gets to the edge of the sketch
     * If it does, let is disappear and a new one appears from the start of the width
     */
    for (i = 0; i < boat.length; i++) {
        if (boat[i].z > width) {
            boat[i].z = 0;
        }
        // display and move boat
        boat[i].move();
        boat[i].display();
    }
}
/**
 * Represents water
 * @class
 * @constructor
 */
function Water() {
    /** A variable to hold the location of the lines that act as the waves
     */
    this.x = random(width);
    this.y = random(height / 2 + 50, height);
    console.log(this.x);

    /** A variable to holds the speed of the waves
     */
    this.waves = function() {
            if (this.x > width) {
                this.x = -100;
            }
            this.x = this.x + slider.value();
            this.y += random(-1.25, 1.25);
        }
        /** The length of the lines that make up the waves
         */
    this.display = function() {
        stroke(51, 153, 255);
        line(this.x, this.y, this.x + 50, this.y);
    }
}

function counter() {

    boat.push(new Boat(0, height / 2));
}


/**
 * Represents the boat
 * @class
 * @constructor
 */
function Boat() {
    this.z = 0;
    this.y = height / 2 - 20;


    /** A variable to holds the speed and movement of the boat
     */
    this.move = function() {
            if (this.z > width) {
                this.z = width;
            }

            this.y += random(-1, 1);
            this.z = this.z + slider.value();
        }
        /** The shapes that make up the boat
         */
    this.display = function() {
        fill(153, 102, 0);
        arc(this.z, this.y, 200, 150, radians(0), radians(180), CHORD);
        fill(255, 0, 0);
        triangle(this.z - 50, this.y - 2, this.z + 50, this.y - 2, this.z - 25, this.y - 200);
    }

}
