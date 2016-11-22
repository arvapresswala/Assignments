var txt;
var words;
/* Loads the rhesus text file when doneloading is true
 */
function preload() {
    txt = loadStrings('rhesus.txt', doneLoading);
}

function draw() {
  /* If loading highlight the words that are capital and make their fonts-size 20 pixels
  */
    if (loading) {} else {

        for (var i = 0; i < txt.length; i++) {
            book = createP();
            words = txt[i].split(" ");
            for (j = 0; j < words.length; j++) {
                if (words[j]) {
                    word = createSpan(words[j] + " ");
                    if (words[j].charCodeAt(0) >= 65 && words[j].charCodeAt(0) <= 90) {
                        word.style("background-color: #FF99FF");
                        word.style("font-size: 20px");
                    }
                }
            }
            createP("");
        }
    }
    noLoop();
}
/* Stops loading once the whole file has been loaded
 */
function doneLoading() {
    loading = false;
}
