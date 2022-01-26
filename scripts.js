function generate(array) {
  var genNum = Math.floor(Math.random() * array.length);
  var gen = array[genNum];
  return gen;
}

function scarGen(pronoun3){
  var ifScarArray = ["no", "no","no", "no","yes"];
  var ifScar = generate(ifScarArray);

  if (ifScar === "yes"){
    var positionArray = [" on " + pronoun3 + " left cheek.", " on " + pronoun3 + " right cheek.", " on " + pronoun3 + " forehead.", " across the bridge of " + pronoun3 + " nose.",]
    var position = generate(positionArray);
    var scarTypeArray = ["There is a thin scar" + position, "There is a stitched scar" + position, "There is a long scar" + position, "There is a large burn scar" + position, "There are pockmarks all over " + pronoun3 + " face.",];
    var scarType = generate(scarTypeArray);
  } else {
    var scarType = "";
  }
  return scarType;
}

function firstNameGen(lang, gender){
  if (lang === "English"){
    var firstname = engFirstGen(gender);
  } else if (lang === "Spanish"){
    var firstname = spanFirstGen(gender);
  }
  return firstname;
}

function lastNameGen(lang){
  if (lang === "English"){
    var name = engLastGen();
  } else if (lang === "Spanish"){
    var name = spanLastGen();
  }
  return name;
}

function engFirstGen (gender){
  var firstEnglishM = ["John", "James", "Jonathon", "Stephen", "William", "Robert", "Ian"];
  var firstEnglishF = ["Jane", "Jamie", "Sarah", "Jean", "Kate", "Laura", "Isabel", "Adrienne"]
  if (gender === "Male"){
    var firstname = generate(firstEnglishM);
  } else if (gender === "Female"){
    var firstname = generate(firstEnglishF);
  } else {
    var nbEngArray = firstEnglishM.concat(firstEnglishF);
    var firstname = generate(nbEngArray);
  }
return firstname;
}

function spanFirstGen (gender){
  var firstSpanM = ["Lucas", "Hugo","Martin", "Daniel", "Pablo","Santiago", "Sebastian", "Matias"];
  var firstSpanF = ["Lucia", "Sofia", "Maria", "Martina", "Paula", "Isabella", "Camila", "Valentina"]
  if (gender === "Male"){
    var firstname = generate(firstSpanM);
  } else if (gender === "Female"){
    var firstname = generate(firstSpanF);
  } else {
    var nbSpanArray = firstSpanM.concat(firstSpanF);
    var firstname = generate(nbSpanArray);
  }
return firstname;
}

function spanLastGen (){
  var surnames = ["Lopez", "Garcia", "Morales", "Hernandez", "Perez", "Gonzalez", "Rodriguez", "De Leon"];
  var name = generate(surnames);
return name;
}

function engLastGen (){
  var englishSurnames = ["Brown", "Smith", "Hardy", "Webber", "Fisher", "Johnson", "Jones"];
  var firstname = generate(englishSurnames);
return firstname;
}

function genderGen (){
  var genderArray = ["Female", "Male", "Female", "Male","Female", "Male","Female", "Male","Female", "Male","Nonbinary"]
  var gender = generate(genderArray);
  return gender;
}

function nationGen (){
  var nationArray = ["USA", "UK","Canada", "Australia", "New Zealand", "Spain", "Mexico"]
  var nation  = generate(nationArray);
  return nation;
}

function langGen(nation) {
  if (nation==="USA"){
    var langArray = ["English", "English", "Spanish"]
  } else if (nation==="UK"){
    var langArray = ["English",]
  }  else if (nation==="Canada"){
    var langArray = ["English",]
  }  else if (nation==="Australia"){
    var langArray = ["English",]
  }  else if (nation==="New Zealand"){
    var langArray = ["English",]
  }  else if (nation==="Spain"){
    var langArray = ["Spanish"]
  } else if (nation==="Mexico"){
    var langArray = ["Spanish"]
  } else {
    console.log("Nation/Lang error");
  }
  var lang = generate(langArray);
  return lang;
}

function generationGen() {
  var generationArray = ["8th","9th", "8th","9th", "8th","9th", "10th", "11th", "12th", "13th", "10th", "11th", "12th", "13th","10th", "11th", "12th", "13th","10th", "11th", "12th", "13th",  "10th", "11th", "12th", "13th", "14th","15th", "10th", "11th", "12th", "13th", "14th","15th"]
  var generation = generate(generationArray);
  return generation;
}

function sectGen(){
  var sectArray = ["Sabbat", "Camarilla","Anarch"]
  var sect = generate(sectArray);
  return sect;
}

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
}

function ageGen(){
  var age = getRandomInt(18,65);
  return age;
}

function embracedGen(generation){
  if (generation ==="8th"){
    var embraced = getRandomInt(202, 1201);
    return embraced;
  } else if (generation ==="9th"){
    var embraced = getRandomInt(0, 901);
    return embraced;
  } else if (generation ==="10th"){
    var embraced = getRandomInt(0, 801);
    return embraced;
  } else if (generation ==="11th"){
    var embraced = getRandomInt(0, 701);
    return embraced;
  } else if (generation ==="12th"){
    var embraced = getRandomInt(0, 601);
    return embraced;
  } else if (generation ==="13th"){
    var embraced = getRandomInt(0, 501);
    return embraced;
  } else if (generation ==="14th"){
    var embraced = getRandomInt(0, 301);
    return embraced;
  } else if (generation ==="15th"){
    var embraced = getRandomInt(0, 101);
    return embraced;
  }else {
    return "error";
  }
}

function clanGen(sect){
  var clanCamArray = ["Banu Haqim", "Brujah", "Gangrel", "Hecata",  "Malkavian", "Nosferatu", "Ravnos", "Toreador", "Tremere", "Ventrue", "Banu Haqim", "Brujah", "Gangrel", "Hecata",  "Malkavian", "Nosferatu", "Ravnos", "Toreador", "Tremere", "Ventrue", "Banu Haqim", "Brujah", "Gangrel", "Hecata",  "Malkavian", "Nosferatu", "Ravnos", "Toreador", "Tremere", "Ventrue", "Banu Haqim", "Brujah", "Gangrel", "Hecata",  "Malkavian", "Nosferatu", "Ravnos", "Toreador", "Tremere", "Ventrue", "Lasombra",]
  var clanSabArray = ["Banu Haqim", "Brujah", "Gangrel", "Hecata",  "Malkavian", "Nosferatu", "Ravnos", "Toreador", "Tremere", "Ventrue", "Lasombra", "Tzimisce","Lasombra", "Tzimisce","Lasombra", "Tzimisce","Lasombra", "Tzimisce","Lasombra", "Tzimisce",]
  var clanFlatArray = ["Banu Haqim", "Brujah", "Gangrel", "Hecata",  "Malkavian", "Nosferatu", "Ravnos", "Toreador", "Tremere", "Ventrue", "Lasombra", "Tzimisce",]
  if (sect === "Camarilla") {
    var clan = generate(clanCamArray);
  } else if (sect === "Sabbat"){
    var clan = generate(clanSabArray);
  } else {
    var clan = generate(clanFlatArray);
  }
  return clan;
}

$(document).ready(function() {
  $("form").submit(function(event) {



    var classArray = ["Barbarian", "Cleric", "Druid", "Fighter", "Monk", "Paladin", "Ranger", "Rogue", "Sorcerer", "Warlock", "Wizard", "Artificer","MultiClass","MultiClass",];


    var humanSkinArray = ["dark brown", "pale", "brown", "tanned", "light brown", "black", "very dark"];
    var humanEyeArray = ["dark brown", "brown", "red-brown", "golden-brown", "light brown", "black","dark brown", "brown", "red-brown", "golden-brown", "light brown", "black","dark brown", "brown", "red-brown", "golden-brown", "light brown", "black", "blue", "green", "hazel", "grey",];
    var humanHairColorArray = ["brown", "dark brown", "light brown", "black","brown", "dark brown", "light brown", "black","brown", "dark brown", "light brown", "black","brown", "dark brown", "light brown", "black","brown", "dark brown", "light brown", "black", "brown", "dark brown", "light brown", "black", "brown", "dark brown", "light brown", "black", "brown", "dark brown", "light brown", "black", "blond", "white", "grey", "ginger","brown", "dark brown", "light brown", "black", "blond", "white", "grey", "ginger","brown", "dark brown", "light brown", "black", "blond", "white", "grey", "ginger", "scarlet", "blue", "green", "purple", "rainbow", "pastel rainbow", "pink", "pastel blue", "mint", "lavender",];
    var humanBodyArray = ["fat", "chubby", "muscular", "skinny", "lean","average-weight"];
    var humanHeightArray = ["tall", "short", "average-height", "very tall", "very short"];

    var char1 = {
      name: "error",
      surname: "error",
      embraced:"error",
      born:"error",
      ageHuman:ageGen(),
      embracedYear:"error",
      sect: sectGen(),
      nation: nationGen(),
      lang: "error",
      gender: genderGen(),
      species: "Vampire",
      generation: generationGen(),
      clan: "error",
      // background: generate(backArray),
      // subSpec: "error",
      // specVal: "error",
      // alignment: generate (lawArray)+ " "  + generate (goodArray),
      // skinColor: "error",
      // eyeColor: "error",
      // hairColor: "error",
      // description: "error",
      // extraDesc: "",
      // prounoun1: "",
      // pronoun2: "",
      // pronoun3: "",
      // pronoun4: "",
      // bodyType: generate(humanBodyArray),
      // height: generate(humanHeightArray),
      // ifMulticlass:"no",
    }
    console.log(char1.gender);


char1.lang = langGen(char1.nation);
char1.name = firstNameGen(char1.lang, char1.gender);
char1.surname = lastNameGen(char1.lang);
char1.clan = clanGen(char1.sect);
char1.embraced = embracedGen(char1.generation);
char1.embracedYear = 2022-char1.embraced;
char1.born = char1.embracedYear - char1.ageHuman;
console.log(2002-char1.embraced);



if (char1.gender==="Male") {
  char1.pronoun1 = "he";
  char1.pronoun2 = "him";
  char1.pronoun3 = "his";
  char1.pronoun4 = "himself";
} else if (char1.gender==="Female") {
  char1.pronoun1 = "she";
  char1.pronoun2 = "her";
  char1.pronoun3 = "her";
  char1.pronoun4 = "herself";
} else {
  char1.pronoun1 = "xe";
  char1.pronoun2 = "xir";
  char1.pronoun3 = "xir";
  char1.pronoun4 = "xirself";
}


// char1.extraDesc = extraDescGen(char1.species,char1.pronoun1,char1.pronoun2, char1.pronoun3);


//
// if (char1.hairColor === "error") {
//   char1.description = char1.pronoun1 + " is " + char1.height + " and " + char1.bodyType + ", with " + char1.skinColor + " " + specVal3.type + " and " + char1.eyeColor + " eyes.";
// } else {
//   char1.description = char1.pronoun1 + " is " + char1.height + " and " + char1.bodyType + ", with " + char1.skinColor + " " + specVal3.type + ", " + char1.eyeColor + " eyes, and " + char1.hairColor + " hair.";
// }
//
// char1.description = char1.description.charAt(0).toUpperCase() + char1.description.slice(1);
//
//
//




    $("#char1").show();
    $(".name").text(char1.name + " "+ char1.surname);
    $(".clan").text(char1.clan);
    $(".age").text(char1.born);
    $(".sect").text(char1.sect);
    $(".embraced").text("In " + char1.embracedYear + " at age " + char1.ageHuman);
    $(".nation").text(char1.nation);
    $(".generation").text(char1.generation);
    $(".subclass").text(" (" + char1.subClass + ")");
    $(".gender").text(char1.gender);
    $(".background").text(char1.background);
    $(".species").text(char1.species);
    $(".alignment").text(char1.alignment);
    $(".subrace").text(char1.subSpec);
    $(".description").text(char1.description + " " + char1.extraDesc);



    event.preventDefault();
  })



});
