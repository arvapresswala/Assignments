var numbers = [];
var findNumbers = /\d{1,}/g;
var words = [];
var findWords = /\s[A-Z][a-z]{1,}|[a-z]{1,}|[A-Z]{1,}\s/g;
var done;
var fulltxt, txt;
/* Loading rhesus file
*/
function preload() {
    done = true;
    fulltxt = loadStrings('rhesus.txt', doneLoading);
}

function doneLoading() {
    txt = fulltxt.join("\n");
    done = false;

}

function setup() {
  /* Adding the numbers in the file to an array
  Adding all the words in the file to an array
  */
  numbers = txt.match(findNumbers);
  words = txt.match(findWords);
}

function draw() {
  while(swapped = true) {
      bubbleSort(numbers);
      console.log(numbers);
      var number = createP(numbers);
      number.position(0, 300);
  }
    insertSort(words);
    console.log(words);
    var word = createP(words);
    word.position(0, height / 5);
}

/** This function sorts the numbers in descending order
 *
 *  @param {array} values   This is the array that will be getting sort
 */
function bubbleSort(values) {
    var curr = values.length;
    var swapped = false;
    for (var i = 0; i < curr; i++) {
        if (values[i] < values[i + 1]) {
            var temp = values[i];
            values[i] = values[i + 1];
            values[i + 1] = temp;
            swapped = true;
        }
    }
// return values.sort();
}
/** This function sorts the words from ascending order;
 *
 *  @param {array} data   This is the array that will be getting sort
 */
function insertSort(data) {
    var current = data;
    for (var i = 0; i < current.length; i++) {
        var array = current[i];
        for (var j = i; j > 0 && current[j - 1] > array; j--) {
            current[j] = current[j - 1];
        }
        current[j] = array;
    }
    // return data.sort();

}
