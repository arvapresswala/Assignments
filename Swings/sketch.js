var sound;
var button4;
var img1, img2, img3, img4, img5, star;
var amp;
var amphistory = [];
var x = 0;
var ava, shaiza, drake, shahd, heather;
var slider1, slider2, slider3, slider4, slider5;
var button, button2, button3;
var cloud = [];
var input1, input2, input3, input4, input5;
var result, restart;

function preload() {
    /** Loading the song
     * Loading the images of the birds
     */
    sound = loadSound('Swing.mp3');
    img1 = loadImage('Shahd.png');
    img2 = loadImage('Ava.png');
    img3 = loadImage('drake.png');
    img4 = loadImage('Shaiza.png');
    img5 = loadImage('Heather.png');
}

function setup() {
    createCanvas(windowWidth, windowHeight);
    /** Playing the song
    Button is set on pause
     */
    sound.play();
    button = createButton("Pause");
    button.style("font-size", "18px");
    button.style("background-color", "#FFFFCC")
    button.position(20, 20);
    button.mousePressed(playing);
    /** One slider asssigned to each child
    and the name of each child next to it
     */
    slider1 = createSlider(0.1, 0.5, 0.3, 0.01);
    ava = createP("Ava");
    ava.position(20, 45);
    ava.style("font-size", "20px");
    slider1.position(85, 70);
    shaiza = createP("Shaiza");
    shaiza.style("font-size", "20px");
    slider2 = createSlider(0.1, 0.5, 0.3, 0.01);
    shaiza.position(20, 70);
    slider2.position(85, 95);
    heather = createP("Heather");
    heather.style("font-size", "20px");
    slider3 = createSlider(0.1, 0.5, 0.3, 0.01);
    heather.position(20, 95);
    slider3.position(85, 120);
    drake = createP("Drake");
    drake.style("font-size", "20px");
    slider4 = createSlider(0.1, 0.5, 0.3, 0.01);
    drake.position(20, 120);
    slider4.position(85, 145);
    shahd = createP("Shahd");
    shahd.style("font-size", "20px");
    slider5 = createSlider(0.1, 0.5, 0.3, 0.01);
    shahd.position(20, 145);
    slider5.position(85, 170);
    shahd.style("font-size", "20px");
    /** Created the textboxes where the answers will be typed
     */
    myP = createP(" What's the colour of your bird?");
    myP.position(100, -6);
    myP.style("font-size", "25px");
    input1 = createInput('');
    input1.position(220, 70);
    input2 = createInput();
    input2.position(220, 95);
    input3 = createInput();
    input3.position(220, 120);
    input4 = createInput();
    input4.position(220, 145);
    input5 = createInput();
    input5.position(220, 170);
    /** Button created to submit the answers
     */
    button2 = createButton('SUBMIT');
    button2.style("font-size", "18px");
    button2.position(360, 75);
    button2.mousePressed(submit);
    button2.style("background-color", "#EEB3F0")
    amp = new p5.Amplitude();
    /** Array of clouds
     */
    for (var i = 0; i < 8; i++) {
        cloud.push(new Cloud());
    }
    /** A button that will make the instructions appear on the screen
     */
    button4 = createButton('INSTRUCTIONS');
    button4.style("font-size", "20px");
    button4.position(width - 300, 75);
    button4.mousePressed(written);
    button4.style("background-color", "#E846A7");
}

function draw() {
    background("#62CBFA");
    /** A button that only appears when an answer has been submitted
     */
    if (restart == true) {
        button3 = createButton('Restart');
        button3.style("font-size", "40px");
        button3.position(width / 2, height / 2);
        button3.mousePressed(mouse);
        button3.style("background-color", "#660099");
    }


    /** Display and moves clouds on screen
     */
    for (var i = 0; i < cloud.length; i++) {
        cloud[i].display();
        cloud[i].move();
    }
    /** The birds are made to move according to the amplitude
    The value of the slider affects the height of the birds
     */
    var level = amp.getLevel();
    amphistory.push(level * 3);
    var currentY = map(level, 0, 1, height, 0);
    translate(0, height / 2 - currentY);
    var a = map(amphistory[amphistory.length - 1], 0, 2, height, 0);
    image(img1, x, a + height / 2 * (slider5.value() - 0.5), 150, 150);
    image(img2, x - 150, a + height / 2 * (slider1.value() - 0.5), 150, 150);
    image(img3, x - 300, a + height / 2 * (slider4.value() - 0.5), 150, 150);
    image(img4, x - 450, a + height / 2 * (slider2.value() - 0.5), 150, 150);
    image(img5, x - 600, a + height / 2 * (slider3.value() - 0.5), 150, 150);
    if (sound.isPlaying()) {
        x = x + 1;
    }
    if (x > width + 400) {
        x = 0;
    }
}

function submit() {
    /** The colour of the birds have to be put typed in correctly in each child's box
    If the answer is correct a star shows up
    If the answer is wrong a message appers
    Once the result has showed up the song stops and a Restart Button appears
    */
    if (input1.value() == "purple" || "yellow" == input2.value() || "orange and pink" == input3.value() || "green" == input4.value() || "blue" == input5.value()) {
        star = createImg("http://pngimg.com/upload/star_PNG1580.png");
        star.position(450, 45);
        star.size(75, 75);
    } else {
        result = createP("You were really close. Try again. :D");
        result.position(450, 45);
        result.style("font-size", "20px");
    }
    sound.stop();
    button.html("End");
    return restart = true;
}
/** Pauses and plays the song when the button in the left corner is clicked
 */
function playing() {
    if (sound.isPlaying()) {
        sound.pause();
        button.html("Play");
    } else {
        sound.play()
        sound.setVolume(0.3);
        button.html("Pause");
    }
}
/** Represents the clouds
 */
function Cloud() {
    /** The position of the clouds
     */
    this.x = random(0, width);
    this.y = random(0, height);
    /** moves the clouds horizontally
    the clouds jitter vertically
    */
    this.move = function() {
            if (this.x > width) {
                this.x = -100;
            }
            this.x += 1;
            this.y += random(-1, 1);
        }
        /** The shape of the clouds
         */
    this.display = function() {
        noStroke();
        fill(255, 255, 255, 225);
        ellipse(this.x, this.y, 100, 80);
        ellipse(this.x + 40, this.y + 5, 100, 80);
        ellipse(this.x + 120, this.y + 20, 100, 80);
        ellipse(this.x + 80, this.y + 10, 100, 80);
        ellipse(this.x, this.y + 40, 100, 80);
        ellipse(this.x + 50, this.y + 50, 110, 80);
        ellipse(this.x - 50, this.y + 20, 100, 80);
    }

}
/** Reloads page when the restart button appears
 */
function mouse() {
    if (restart == true) {
        window.location.reload();
    }
}

/** The instruction appear on the screen when button is pressed and
the page reloads when the button is clicked again
 */
function written() {
    if (sound.isPlaying()) {
        sound.stop();
        myP = createP("INSTRUCTIONS" + '<br/>' + "Each bird has been assigned to each of you. Next to your name , you will see a slider." + '<br/>' + " Move the slider left or right and look for a change in your bird (It will move up or down)." + '<br/>' + " Type the colour of your bird in the white box, and click on the SUBMIT button." + '<br/>' + "If you are wrong, it's ok, you can try again by clicking the RESTART button." + '<br/>' + "If the birds are moving to fast and you want to stop them, click on the PAUSE button."+ '<br/>' + "CLICK ON INSTRUCTIONS AGAIN TO START THE GAME");
        myP.position(width / 5, height / 2);
        myP.style("font-size", "25px");
        myP.style("color", "#660066");
        x = 0;
    } else {
        window.location.reload();
    }
}
