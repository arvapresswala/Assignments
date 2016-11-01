function setup() {
    createCanvas(windowWidth, windowHeight);
    background(0);
    fire(0, width, height / 1.5, height / 1.5);
}

function draw() {
    noLoop();
}
/** This function is recursive
 * @param {number} startx   This is the x value of where the lines starts
 *  @param {number} endx   This is the x value of where the lines ends
 *  @param {number} starty   This is the y value of where the lines starts
 *  @param {number} endy   This is the y value of where the lines ends
 */

function fire(startx, endx, starty, endy) {
    stroke(255, random(50, 200), 51)
    line(startx, starty, endx, endy);
    if (startx < endx) {
        fire(startx + 50, endx - int(random(30, 90)), starty + int(random(30, 90)), endy - int(random(30, 90)));
        fire(startx + 50, endx - int(random(30, 90)), starty - int(random(30, 90)), endy + int(random(30, 90)));
    }
}
