var txt;
var fulltxt;
var double, triple, four;
var ital;
var stop, exc, quest;
var results, output;
var done;
/* Loadinf rhesus file
*/
function preload() {
    done = false;
    fulltxt = loadStrings('rhesus.txt', doneLoading);

}

function doneLoading() {
    txt = fulltxt.join("\n");
    done = true;
}

function setup() {

}
/* using regular expressions to find the number of
2 digits, 3 digits, 4 digits, italica, periods, exclamation and question marks in the rhesus document
*/
function draw() {
    if (done) {
        double = /\b\d\d\b/g;
        triple = /\b\d\d\d\b/g;
        four = /\b\d\d\d\d\b/g;
        ital = /\b_/g;
        stop = /[.]/g;
        exc = /[!]/g;
        quest = /[?]/g;
        var resultsd = txt.match(double);
        var resultst = txt.match(triple);
        var resultsf = txt.match(four);
        var resultss = txt.match(stop);
        var resultse = txt.match(exc);
        var resultsq = txt.match(quest);
        var resultsi = txt.match(ital);
        createP("2 digit:" + "  " + resultsd.length + '<br/>');
        createP("3 digit:" + "  " + resultst.length + '<br/>');
        createP("4 digit:" + "  " + resultsf.length + '<br/>');
        createP("period" + "  " + resultss.length + '<br/>');
        createP("exclamation" + "  " + resultse.length + '<br/>');
        createP("question" + "  " + resultsq.length + '<br/>');
        createP("italics" + "  " + resultsi.length + '<br/>');
        noLoop();
    }
}
