var counter = 0;

function setup() {
    createCanvas(windowWidth, windowHeight);
}


function draw() {
    if (counter == 0) {
        fill(0, 0, random(150));
        ellipse(divide(width, 2), divide(height, 2), addition(mouseX, 10), addition(mouseY, 10));
    }
    if (counter == 1) {
        fill(0, random(215), 0);
        background(255);
        rect(mouseX, mouseY, subtraction(mouseX, 10), subtraction(mouseY, 10));
    }

    if (counter == 2) {
        background(70);
        for (var i = 0; i < multiply(mouseX, 2); i = i + 50) {
            for (var j = 0; j < multiply(mouseY, 2); j = j + 70) {
                fill(random(150), 0, 100);
                ellipse(i, j, 50, 50);
                i = i + 1;
                j = j + 1;
            }
        }
    }
    if (counter == 3) {
        background(0);
        stroke(0, 0, random(200));
        strokeWeight(10);
        line(maximum(random(0, width), mouseX), random(0, height), maximum(random(width), mouseX), random(0, height));
        stroke(0, random(200), 0);
        line(minimum(random(0, height), mouseY), random(0, width), minimum(random(height), mouseY), random(0, width));


    }
    if (counter == 4) {
        noStroke();
        background(255);
        fill(0, 222, 0);
        for (var i = 0; i < width; i = i + 10) {
            arr = [random(50, width - 50)];
            harr = [random(50, height - 50)];
            ellipse(reverseArray(arr), reverseArray(harr), 50, 50)
        }
    }
}
/** This function takes in two float values and returns the sum of those two values
 *
 *  @param {number} x   This is the first float of the sum
 *  @param {number} y  This is the second float of the sum
 *  @return {number}        The sum of first and second as a float value
 */
function addition(x, y) {
    return x + y;
}
/** This function takes in two float values and returns the difference of those two values
 *
 *  @param {number} x   This is the first float of the difference
 *  @param {number} y  This is the second float of the difference
 *  @return {number}        The difference of first and second as a float value
 */
function subtraction(x, y) {
    return x - y;
}
/** This function takes in two float values and multiplies the two values
 *
 *  @param {number} x   This is the first float
 *  @param {number} y  This is the second float
 *  @return {number}        The multiplies answer of first and second as a float value
 */
function multiply(x, y) {
    return x * y;
}
/** This function takes in two float values and divides those two values
 *
 *  @param {number} x   This is the dividend
 *  @param {number} y  This is the divisor
 *  @return {number}        The divided answer of first and second as a float value
 */
function divide(x, y) {
    return x / y;
}
/** This function takes in two float values and returns the larger of those two values
 *
 *  @param {number} x   This is the first float
 *  @param {number} y  This is the second float
 *  @return {number}        The larger of first and second as a float value
 */
function maximum(x, y) {
    if (x > y) {
        return x;
    }
    else y:
}
/** This function takes in two float values and returns the smaller of the two values
 *
 *  @param {number} x   This is the first float
 *  @param {number} y  This is the second float
 *  @return {number}        The smaller first and second as a float value
 */
function minimum(x, y) {
    if (x > y) {
        return y;
    }
    else x;
}

/**
 * This function takes in an array and reverses it.
 * @param {Array} x this is the values in the array
 * @return {Array}  the reversed values of x
 */
function reverseArray(x) {
    newArray = [];
    for (var i = x.length - 1; i >= 0; i--) {
        newArray.push(x[i]);
    }
    return newArray;
}

function mousePressed() {
    counter = counter + 1;
    if (counter > 4) {
        counter = 0;
    }
}
