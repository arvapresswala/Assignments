var txt;
var fulltxt;
var double, triple, four;
var ital;
var stop, exc, quest;
var results, output;
var done;
/* Loading rhesus file
 */
function preload() {
    done = false;
    fulltxt = loadStrings('rhesus.txt', doneLoading);

}

function doneLoading() {
    txt = fulltxt.join("\n");
    done = true;
    rita_txt = RiString(txt);
    rita_pos = rita_txt.pos();

}

function setup() {

}
/* using regular expressions to find the number of
2 digits, 3 digits, 4 digits, italica, periods, exclamation and question marks in the rhesus document
*/
function draw() {
    if (done) {
        var par = createP('');
        double = /\b\d{2}\b/g;
        triple = /\b\d{3}\b/g;
        four = /\b\d{4}\b/g;
        ital = /\b_\b/g;
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
        /*  Finding nouns
         */
        var nouns = /\bnn\b/g;
        var properNouns = /\bnnp\b/g;
        resultsn = rita_pos.match(nouns + properNouns);
        createP("Nouns:" + "  " + resultsn.length + '<br/>');
        /*  Finding pronouns
         */
        var pronouns = /\bprp\b/g;
        var whPronouns = /bwp\b/g;
        resultsp = rita_pos.match(pronouns + whPronouns);
        createP("Pronouns:" + "  " + resultsp.length + '<br/>');
        /*  Finding verba
         */
        var verbs = /\bvb\b/g;
        resultsv = rita_pos.match(verbs);
        createP("Verbs:" + "  " + resultsv.length + '<br/>');

        noLoop();
    }
}
