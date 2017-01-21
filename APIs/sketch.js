var word1= [],word12=[],word13=[], word2=[], word22=[],word23=[], word3=[], word32=[],word33=[], word4=[], word42=[],word43=[], word5=[], word52=[],word53=[], word6=[], word62=[], word63=[],word7=[], word72=[],word73=[], word8=[], word82=[],word83=[], word9=[], word92=[],word93=[], word10=[], word102=[],word103=[];


function preload() {
  /* loaded a list of random words from Wordnik with definition, relatedWordsa and phrases
  */
  // feedback
    var feedbackd = 'http://api.wordnik.com:80/v4/word.json/feedback/definitions?limit=10&includeRelated=true&useCanonical=false&includeTags=false&api_key=a2a73e7b926c924fad7001ca3111acd55af2ffabf50eb4ae5';
    var feedbackp = 'http://api.wordnik.com:80/v4/word.json/feedback/phrases?limit=10&wlmi=0&useCanonical=false&api_key=a2a73e7b926c924fad7001ca3111acd55af2ffabf50eb4ae5';
    var feedbackr = 'http://api.wordnik.com:80/v4/word.json/feedback/relatedWords?useCanonical=false&limitPerRelationshipType=10&api_key=a2a73e7b926c924fad7001ca3111acd55af2ffabf50eb4ae5';
    word1 = loadJSON(feedbackd);
    word12 = loadJSON(feedbackp);
    word13 = loadJSON(feedbackr);
    // monkey
    var monkeyd = 'http://api.wordnik.com:80/v4/word.json/monkey/definitions?limit=10&includeRelated=true&useCanonical=false&includeTags=false&api_key=a2a73e7b926c924fad7001ca3111acd55af2ffabf50eb4ae5';
    var monkeyp = 'http://api.wordnik.com:80/v4/word.json/monkey/phrases?limit=10&wlmi=0&useCanonical=true&api_key=a2a73e7b926c924fad7001ca3111acd55af2ffabf50eb4ae5';
    var monkeyr = 'http://api.wordnik.com:80/v4/word.json/monkey/relatedWords?useCanonical=false&limitPerRelationshipType=10&api_key=a2a73e7b926c924fad7001ca3111acd55af2ffabf50eb4ae5';
    word2 = loadJSON(monkeyd);
    word22 = loadJSON(monkeyp);
    word23 = loadJSON(monkeyr);
    // pepper
    var pepperd = 'http://api.wordnik.com:80/v4/word.json/pepper/definitions?limit=10&includeRelated=true&useCanonical=false&includeTags=false&api_key=a2a73e7b926c924fad7001ca3111acd55af2ffabf50eb4ae5';
    var pepperp = 'http://api.wordnik.com:80/v4/word.json/pepper/phrases?limit=10&wlmi=0&useCanonical=false&api_key=a2a73e7b926c924fad7001ca3111acd55af2ffabf50eb4ae5';
    var pepperr = 'http://api.wordnik.com:80/v4/word.json/pepper/relatedWords?useCanonical=false&limitPerRelationshipType=10&api_key=a2a73e7b926c924fad7001ca3111acd55af2ffabf50eb4ae5';
    word3 = loadJSON(pepperd);
    word32 = loadJSON(pepperp);
    word33 = loadJSON(pepperr);
    // skate
    var skated = 'http://api.wordnik.com:80/v4/word.json/skate/definitions?limit=10&includeRelated=true&useCanonical=false&includeTags=false&api_key=a2a73e7b926c924fad7001ca3111acd55af2ffabf50eb4ae5';
    var skatep = 'http://api.wordnik.com:80/v4/word.json/skate/phrases?limit=10&wlmi=0&useCanonical=false&api_key=a2a73e7b926c924fad7001ca3111acd55af2ffabf50eb4ae5';
    var skater = 'http://api.wordnik.com:80/v4/word.json/skate/relatedWords?useCanonical=false&limitPerRelationshipTypt=10&api_key=a2a73e7b926c924fad7001ca3111acd55af2ffabf50eb4ae5';
    word4 = loadJSON(skated);
    word42 = loadJSON(skatep);
    word43 = loadJSON(skater);
    //  roll
    var rolld = 'http://api.wordnik.com:80/v4/word.json/roll/definitions?limit=10&includeRelated=true&useCanonical=false&includeTags=false&api_key=a2a73e7b926c924fad7001ca3111acd55af2ffabf50eb4ae5';
    var rollr = 'http://api.wordnik.com:80/v4/word.json/roll/relatedWords?useCanonical=false&limitPerRelationshipTypt=10&api_key=a2a73e7b926c924fad7001ca3111acd55af2ffabf50eb4ae5';
    var rollp = 'http://api.wordnik.com:80/v4/word.json/roll/phrases?limit=10&wlmi=0&useCanonical=false&api_key=a2a73e7b926c924fad7001ca3111acd55af2ffabf50eb4ae5';
    word5 = loadJSON(rolld);
    word52 = loadJSON(rollp);
    word53 = loadJSON(rollr);
    // eyes
    var eyesd = 'http://api.wordnik.com:80/v4/word.json/eyes/definitions?limit=10&includeRelated=true&useCanonical=false&includeTags=false&api_key=a2a73e7b926c924fad7001ca3111acd55af2ffabf50eb4ae5';
    var eyesp = 'http://api.wordnik.com:80/v4/word.json/eyes/phrases?limit=10&wlmi=0&useCanonical=true&api_key=a2a73e7b926c924fad7001ca3111acd55af2ffabf50eb4ae5';
    var eyesr = 'http://api.wordnik.com:80/v4/word.json/eyes/relatedWords?useCanonical=false&limitPerRelationshipTypt=10&api_key=a2a73e7b926c924fad7001ca3111acd55af2ffabf50eb4ae5';
    word6 = loadJSON(eyesd);
    word63 = loadJSON(eyesr);
    word62 = loadJSON(eyesp);
    // gym
    var gymd = 'http://api.wordnik.com:80/v4/word.json/gym/definitions?limit=10&includeRelated=true&useCanonical=false&includeTags=false&api_key=a2a73e7b926c924fad7001ca3111acd55af2ffabf50eb4ae5';
    var gymr = 'http://api.wordnik.com:80/v4/word.json/gym/relatedWords?useCanonical=false&limitPerRelationshipTypt=10&api_key=a2a73e7b926c924fad7001ca3111acd55af2ffabf50eb4ae5';
    var gymp = 'http://api.wordnik.com:80/v4/word.json/gym/phrases?limit=10&wlmi=0&useCanonical=false&api_key=a2a73e7b926c924fad7001ca3111acd55af2ffabf50eb4ae5';
    word7 = loadJSON(gymd);
    word72 = loadJSON(gymp);
    word73 = loadJSON(gymr);
    // dart
    var dartr = 'http://api.wordnik.com:80/v4/word.json/dart/relatedWords?useCanonical=false&limitPerRelationshipTypt=10&api_key=a2a73e7b926c924fad7001ca3111acd55af2ffabf50eb4ae5';
    var dartd = 'http://api.wordnik.com:80/v4/word.json/dart/definitions?limit=10&includeRelated=true&useCanonical=false&includeTags=false&api_key=a2a73e7b926c924fad7001ca3111acd55af2ffabf50eb4ae5';
    var dartp = 'http://api.wordnik.com:80/v4/word.json/dart/phrases?limit=10&wlmi=0&useCanonical=false&api_key=a2a73e7b926c924fad7001ca3111acd55af2ffabf50eb4ae5';
    word8 = loadJSON(dartd);
    word82 = loadJSON(dartp);
    word83 = loadJSON(dartr);
    // curve
    var curved = 'http://api.wordnik.com:80/v4/word.json/curve/definitions?limit=10&includeRelated=true&useCanonical=false&includeTags=false&api_key=a2a73e7b926c924fad7001ca3111acd55af2ffabf50eb4ae5';
    var curver = 'http://api.wordnik.com:80/v4/word.json/curve/relatedWords?useCanonical=false&limitPerRelationshipTypt=10&api_key=a2a73e7b926c924fad7001ca3111acd55af2ffabf50eb4ae5';
    var curvep = 'http://api.wordnik.com:80/v4/word.json/curve/phrases?limit=10&wlmi=0&useCanonical=false&api_key=a2a73e7b926c924fad7001ca3111acd55af2ffabf50eb4ae5';
    word9 = loadJSON(curved);
    word92 = loadJSON(curvep);
    word93 = loadJSON(curver);
    // slim
    var slimd = 'http://api.wordnik.com:80/v4/word.json/slim/definitions?limit=10&includeRelated=true&useCanonical=false&includeTags=false&api_key=a2a73e7b926c924fad7001ca3111acd55af2ffabf50eb4ae5';
    var slimr = 'http://api.wordnik.com:80/v4/word.json/slim/relatedWords?useCanonical=false&limitPerRelationshipTypt=10&api_key=a2a73e7b926c924fad7001ca3111acd55af2ffabf50eb4ae5';
    var slimp = 'http://api.wordnik.com:80/v4/word.json/slim/phrases?limit=10&wlmi=0&useCanonical=false&api_key=a2a73e7b926c924fad7001ca3111acd55af2ffabf50eb4ae5';
    word10 = loadJSON(slimd);
    word102 = loadJSON(slimp);
    word103 = loadJSON(slimr);

}

function setup() {
    createCanvas(windowWidth, windowHeight);
}

function draw() {
  /* Draws lavender coloured bubbles for the word feedback in the size of the objects inside the array
  */
    for (var j = 0; j < Object.keys(word1).length; j++) {
        var def = word1[j].text;
        fill(100, 100, 200, 50);
        ellipse(random(width), random(height), def.length, def.length);
    }
    for (var j = 0; j < Object.keys(word13).length; j++) {
        var relate = word13[j].words;
        fill(50, 100, 200, 50);
        ellipse(random(width), random(height), relate.length, relate.length);
    }

    for (var j = 0; j < Object.keys(word12).length; j++) {
        var phrases = word12[j].gram1 + word12[j].gram2;
        fill(100, 200, 50, 50);
        ellipse(random(width), random(height), phrases.length, phrases.length);
    }
    /* Draws yellow bubbles for the word monkey in the size of the objects inside the array
    */
    for (var j = 0; j < Object.keys(word2).length; j++) {
        var def = word2[j].text;
        fill(255, 255, 153, 50);
        ellipse(random(width), random(height), def.length, def.length);
    }
    for (var j = 0; j < Object.keys(word23).length; j++) {
        var relate = word23[j].words;
        fill(255, 255, 153, 50);
        ellipse(random(width), random(height), relate.length, relate.length);
    }
    for (var j = 0; j < Object.keys(word22).length; j++) {
        var phrases = word22[j].gram1 + word22[j].gram2;
        fill(255, 255, 153, 50);
        ellipse(random(width), random(height), phrases.length, phrases.length);
    }
    /* Draws blue bubbles for the word pepper in the size of the objects inside the array
    */
    for (var j = 0; j < Object.keys(word3).length; j++) {
        var def = word3[j].text;
        fill(204, 255, 255, 50);
        ellipse(random(width), random(height), def.length, def.length);
    }
    for (var j = 0; j < Object.keys(word33).length; j++) {
        var relate = word33[j].words;
        fill(204, 255, 255, 50);
        ellipse(random(width), random(height), relate.length, relate.length);
    }
    for (var j = 0; j < Object.keys(word32).length; j++) {
        var phrases = word32[j].gram1 + word32[j].gram2;
        fill(204, 255, 255, 50);
        ellipse(random(width), random(height), phrases.length, phrases.length);
    }
    /* Draws green bubbles for the word skate in the size of the objects inside the array
    */
    for (var j = 0; j < Object.keys(word4).length; j++) {
        var def = word4[j].text;
        fill(204, 255, 204, 50);
        ellipse(random(width), random(height), def.length, def.length);
    }
    for (var j = 0; j < Object.keys(word43).length; j++) {
        var relate = word43[j].words;
        fill(204, 255, 204, 50);
        ellipse(random(width), random(height), relate.length, relate.length);
    }

    for (var j = 0; j < Object.keys(word42).length; j++) {
        var phrases = word42[j].gram1 + word42[j].gram2;
        fill(204, 255, 204, 50);
        ellipse(random(width), random(height), phrases.length, phrases.length);
    }
    /* Draws peach bubbles for the word roll in the size of the objects inside the array
    */
    for (var j = 0; j < Object.keys(word5).length; j++) {
        var def = word5[j].text;
        fill(255, 204, 204, 100);
        ellipse(random(width), random(height), def.length, def.length);
    }
    for (var j = 0; j < Object.keys(word53).length; j++) {
        var relate = word53[j].words;
        fill(255, 204, 204, 100);
        ellipse(random(width), random(height), relate.length, relate.length);
    }
    for (var j = 0; j < Object.keys(word52).length; j++) {
        var phrases = word52[j].gram1 + word52[j].gram2;
        fill(255, 204, 204, 100);
        ellipse(random(width), random(height), phrases.length, phrases.length);
    }
    /* Draws dark green bubbles for the word eyes in the size of the objects inside the array
    */
    for (var j = 0; j < Object.keys(word6).length; j++) {
        var def = word6[j].text;
        fill(0, 204, 0, 50);
        ellipse(random(width), random(height), def.length, def.length);
    }
    for (var j = 0; j < Object.keys(word63).length; j++) {
        var relate = word63[j].words;
        fill(0, 204, 0, 50);
        ellipse(random(width), random(height), relate.length, relate.length);
    }

    for (var j = 0; j < Object.keys(word62).length; j++) {
        var phrases = word62[j].gram1 + word62[j].gram2;
        fill(0, 204, 0, 50);
        ellipse(random(width), random(height), phrases.length, phrases.length);
    }
    /* Draws purple bubbles for the word gym in the size of the objects inside the array
    */
    for (var j = 0; j < Object.keys(word7).length; j++) {
        var def = word7[j].text;
        fill(102, 51, 153, 50);
        ellipse(random(width), random(height), def.length, def.length);
    }
    for (var j = 0; j < Object.keys(word73).length; j++) {
        var relate = word73[j].words;
        fill(102, 51, 153, 50);
        ellipse(random(width), random(height), relate.length, relate.length);
    }
    for (var j = 0; j < Object.keys(word72).length; j++) {
        var phrases = word72[j].gram1 + word72[j].gram2;
        fill(102, 51, 153, 50);
        ellipse(random(width), random(height), phrases.length, phrases.length);
    }
    /* Draws dark pink bubbles for the word dart in the size of the objects inside the array
    */
    for (var j = 0; j < Object.keys(word8).length; j++) {
        var def = word8[j].text;
        fill(255, 51, 204, 50);
        ellipse(random(width), random(height), def.length, def.length);
    }
    for (var j = 0; j < Object.keys(word83).length; j++) {
        var relate = word83[j].words;
        fill(255, 51, 204, 50);
        ellipse(random(width), random(height), relate.length, relate.length);
    }

    for (var j = 0; j < Object.keys(word82).length; j++) {
        var phrases = word82[j].gram1 + word82[j].gram2;
        fill(255, 51, 204, 50);
        ellipse(random(width), random(height), phrases.length, phrases.length);
    }
    /* Draws grey bubbles for the word curve in the size of the objects inside the array
    */
    for (var j = 0; j < Object.keys(word9).length; j++) {
        var def = word9[j].text;
        fill(221, 221, 221, 50);
        ellipse(random(width), random(height), def.length, def.length);
    }
    for (var j = 0; j < Object.keys(word93).length; j++) {
        var relate = word93[j].words;
        fill(221, 221, 221, 50);
        ellipse(random(width), random(height), relate.length, relate.length);
    }

    for (var j = 0; j < Object.keys(word92).length; j++) {
        var phrases = word92[j].gram1 + word92[j].gram2;
        fill(221, 221, 221, 50);
        ellipse(random(width), random(height), phrases.length, phrases.length);
    }
    /* Draws orange bubbles for the word slim in the size of the objects inside the array
    */
    for (var j = 0; j < Object.keys(word10).length; j++) {
        var def = word10[j].text;
        fill(255, 102, 102,50);
        ellipse(random(width), random(height), def.length, def.length);
    }
    for (var j = 0; j < Object.keys(word103).length; j++) {
        var relate = word103[j].words;
        fill(255, 102, 102,50);
        ellipse(random(width), random(height), relate.length, relate.length);
    }

    for (var j = 0; j < Object.keys(word102).length; j++) {
        var phrases = word102[j].gram1 + word102[j].gram2;
        fill(255, 102, 102,50);
        ellipse(random(width), random(height), phrases.length, phrases.length);
    }
    noLoop();
}
