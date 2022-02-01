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

function monthGen (){
  var monthArray = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
  var month = generate(monthArray);
  var day = getRandomInt(1,28);
  return month + " " + day + ", ";
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
  var firstEnglishM = ["John", "James", "Jonathon", "Stephen", "William", "Robert", "Ian", "Aaron", "Abe", "Abner", "Abraham", "Ace", "Adam", "Addison", "Adrian", "Aidan", "Al", "Alan", "Albert", "Aldous", "Alec", "Alex", "Alexander", "Alexis", "Alfie", "Alfred", "Alger", "Alonzo", "Aloysius", "Alphonso", "Alton", "Alvin", "Ambrose", "Amos", "Andy", "Andre", "Andrew", "Angus", "Ansel", "Anthony", "Anton", "Antony", "Archer", "Archibald", "Ariel", "Arlo", "Arnold", "Art", "Arthur", "Ash", "Asher", "Ashley", "Ashton", "Aston", "Aubrey", "August", "Augustine", "Austin", "Avery", "Axel", "Azure", "Bailey", "Baker", "Baldric", "Baldwin", "Barclay", "Barnabas", "Barnaby", "Barret", "Basil", "Baxter", "Beau", "Beaumont", "Beckett", "Ben", "Benjamin", "Bennett", "Benny", "Benedict", "Bernard", "Bernie", "Bert", "Bertie", "Bertram", "Bertrand", "Beverly", "Biff", "Bill", "Billie", "Bishop", "Blaine", "Blair", "Blake", "Blaze", "Blythe", "Bob", "Bobby", "Boyd", "Braden", "Brad", "Brady", "Brand","Brendon", "Brent", "Brett", "Brian","Briar", "Bryce", "Brigham", "Brock", "Brodie", "Brody", "Brook", "Brooklyn", "Bruce", "Bryan", "Bryce", "Bryant", "Buck", "Bud", "Burke", "Burt", "Burton", "Byrne", "Byron", "Cairo", "Caleb", "Cal", "Cameron", "Campbell", "Carl", "Carol", "Carter", "Carver", "Cary", "Casey", "Cash", "Cass", "Cassidy", "Cat", "Cecil", "Cedar", "Cedric", "Chad", "Chadwick", "Chance", "Chandler", "Charles", "Charlie", "Charlton", "Chaz", "Chester", "Chip", "Chris", "Christian", "Christopher", "Chuck", "Clair", "Clancy", "Clarence", "Clark", "Claude", "Clay", "Clayton", "Clement", "Cleo", "Cletus", "Cleve", "Cliff", "Clifford", "Clint", "Clinton", "Clive", "Clyde", "Cody", "Colby", "Cole", "Colin", "Colt", "Connor", "Conrad", "Cooper", "Corey", "Cornelius", "Cory", "Courtney", "Cosmo", "Craig", "Crawford", "Curt", "Curtis", "Cy", "Cyan", "Cyril", "Cyrus", "Dale", "Dallas", "Dalton", "Damon", "Dan", "Dane", "Daniel", "Dannie", "Darcy", "Daren", "Darian", "Darius", "Darren", "Darryl", "Darwin", "David", "Dave", "Davin", "Davis", "Dean", "Dell", "Den", "Dennis", "Denny", "Denver", "Denzel", "Derek", "Desmond", "Devin", "Dylan", "Dirk", "Dominic", "Don", "Donald", "Donnie", "Donovan", "Dorian",  "Doug", "Douglas", "Doyle", "Drake", "Drew", "Driscoll", "Duke", "Duncan", "Dustin", "Dusty", "Dwight", "Dwayne", "Dylan", "Earl", "Earnest", "Ed", "Eddie", "Edgar", "Edmund", "Edward", "Edwin", "Eli", "Elias", "Elijah", "Elliot", "Ellis", "Elmer","Elwood", "Emil", "Emmanuel", "Emmet", "Eric",  "Ernest", "Ernie", "Errol", "Eugene", "Eustace", "Evan", "Ethan", "Everett", "Ezekiel", "Ezra", "Fabian", "Felix", "Fenton", "Ferdinand", "Felix", "Fisher", "Fitz", "Flint", "Florence", "Floyd", "Flynn", "Forrest", "Fortune", "Foster", "Francis", "Frank", "Franllin", "Frazier", "Fred","Frederick", "Gabe", "Gabriel", "Gale", "Gage", "Gary", "Garnet", "Garth", "Gary", "Gavin", "Geoff", "Geoffrey", "Gerodie", "George", "Georgie", "Gerald", "Gerard", "Gideon", "Gil", "Gilbert",  "Giles", "Glen", "Gordon", "Graham", "Grant", "Greg", "Gregory", "Guy", "Hal", "Hank", "Harlan", "Harold", "Harper", "Harris", "Harry", "Harvey", "Haydon", "Hector", "Henry", "Herbert", "erman", "Hilary", "Hiram", "Holden", "Hollis", "Horatio", "Houston", "Howard", "Hugh", "Hugo", "hunter", "Humphrey", "Ian", "Iggy", "Ike", "Indigo","Irving", "Irwin", "Isaac", "Isaiah",  "Ivan", "Izzy", "Jace", "Jack", "Jacob", "Jade", "Jaden", "Jake", "James", "Jamie", "Jared", "Jarvis", "Jason", "Jasper", "Jeff", "Jeffrey", "Jenson", "Jeremiah", "Jeremy", "Jericho", "Jerome", "Jesse", "Jett", "Jim", "Jimmu", "Joe", "Jody", "Joel", "Joey", "John", "Johnny", "Jojo", "Jon", "Jonah", "Jordan", "Joseph", "Josh", "Joshua", "Joyce", "Jude", "Jules", "Julian", "Julius", "Justin", "Justice", "Keith", "Kelly", "Kelvin", "Kendrick", "Kenneth", "Kerry", "Kevin", "Kim", "King", "Kirk", "Kit", "Kyle", "Lamar", "Lance", "Larry", "Laurie", "Lawrence", "Lee", "Lenny", "Leo", "Leon", "Leonard", "Leopold", "Lesley", "Lester", "Levi", "Lewis", "Lex", "Liam", "Lindsay", "Lionel", "Logan", "London", "Lonny", "Lou", "Louis", "Lucius", "Lucky", "Luke", "Luther", "Lyle", "Marcus", "Mark", "Marlon", "Marshall", "Martin", "Marty", "Marvin", "Mason",  "Matt", "Matthew", "Maurice", "Max", "Maximilian", "Melvin", "Merv","michael", "Mick", "Mike", "Mikey", "Miles", "Milo", "Mitch", "Mo", "Monroe",  "Monty", "Morgan", "Morris", "Mort", "Mortimer", "Morty", "Moses", "Nash", "Nate", "Nat", "Nathan", "Nathaniel", "Ned", "Neal", "Neville", "Newt", "Newton", "Nicholas", "Nigel", "Niles","Noah", "Noel", "Nolan", "Norbert", "Norman", "Norris", "Norton", "Ocean", "Ollie", "Oliver",  "Orville", "Oscar", "Oswald", "Otto", "Owen", "Page", "Parry", "Patrick", "Paul", "Percival", "Percy", "Perry", "Pete", "Peregrine", "Peter", "Phil", "Philip", "Pierce", "Piers", "Price", "Prince", "Quentin", "Quincy", "Quinn", "Ralph", "Randy", "Ray", "Reed", "Red", "Raymond", "Richard", "Rick", "Rickie", "Riley", "Rob", "Robert", "Robin", "Rocky", "Rod", "Roderick", "Rodney", "Roger", "Roland", "Rolland", "Roman", "Ron", "Ronald", "Ronan", "Ronny", "Rory", "Ross", "Rowan", "Roy", "Rupert", "Russel", "Rusty", "Ryan", "Ryder", "Rylan", "Sage", "Sal", "Sam", "Sammy", "Samuel", "Sandy", "Scott", "Sean", "Sebastian", "Seth", "Seymour", "Shane", "Shannon", "Shaun", "Sheldon", "Shelley", "Sid", "Sidney", "Silas", "Silver", "Silvester", "Simon", "Skylar", "Slade", "Solomon", "Sonny", "Spencer", "Spike", "Stan", "Stanley", "Stephen", "Steve", "Stuart", "Syd", "Sydney", "Sylvan", "Sylvester", "Tate", "Taylor", "Ted", "Terrence", "Terry", "Thaddeus", "Theo", "Theobald", "Theodrore", "Thomas", "Tim", "Thomothy", "Tobias", "Todd", "Tony", "Travis", "Trevor", "Tristan", "Tristram", "Troy", "Truman", "Ty", "Tyler", "Tyrone", "Tyson", "Ulric", "Ulysses", "Val", "Valentine", "Van", "Vance", "Vernon", "Vic", "Victor", "Vincent", "Vinnie", "Virgil", "Vivian", "Wade", "Walt", "Walter", "Ward", "Wayne", "Wesley", "Will", "Wilbur", "Wildred", "William", "Willis", "Winfred", "Wolf", "Woodrow", "Wright", "Wyatt", "Xavier", "Zach", "Zachariah", "Zachary"];
  var firstEnglishF = ["Jane", "Jamie", "Sarah", "Jean", "Kate", "Laura", "Isabel", "Adrienne", "Abbie", "Abigail", "Acacia", "Ada", "Addie", "Addison", "Adelaide", "Adele", "Agatha", "Aggie", "Agnes", "Alanis", "Alanna", "Alex", "Alexa", "Alxandra", "Alexandria", "Alexis", "Alice", "Alicia", "Alison", "Alicia", "Allison", "Allie", "Amanda", "Amber", "Amerly", "Amethyst", "Ababella", "Anastasia", "Angel", "Angela", "Angelica", "Angelina", "Angie", "Anise", "Anita", "Ann", "Anna", "Annabel", "Annabella", "Anne", "Annie", "Antonia", "April", "Ariel", "Artie", "Ash", "Ashley", "Athena", "Aubrey", "Audrey", "Augusta", "Aurora", "Autumn", "Ava", "Avalon", "Aveline", "Avery", "Azalea", "Azura", "Azure", "Bailey", "Barb", "Barbara", "Beatrice",  "Beatrix", "Becca", "Beckah", "Becky", "Belinda", "Bella", "Belle",  "Berenice", "Bernadette", "Beryl", "Beth", "Bess", "Bethany", "Betsy", "Betty", "Bev", "Beverly",  "Billie", "Birdie", "Blair", "Blake", "Blakely", "Blache", "Blessing", "Blondie", "Blossom", "Blythe", "Bobbi", "Bonnie", "Brandy", "Breanna", "Bree", "Brenda", "Briana", "Briar", "Bridget", "Bridgette", "Brielle", "Brielle", "Britannia", "Britney", "Brittany", "Brook", "Brookyln", "Bunny", "Cadence", "Burgundy", "Caitlin", "Callie", "Cameron", "Camille", "Candice", "Candy", "Caprice", "Carey", "Carlie", "Carmel",  "Carmen", "Carol", "Carolina", "Caroline", "Casey", "Cassandra", "Cassidy", "Cat", "Catherine", "Cathy", "Cecilia", "Cedar", "Celandine", "Celeste", "Celestine", "Celia", "Celine", "Chanel", "Charity", "Charlie", "Charlotte", "Charmaine", "Chastity", "Cherry", "Cheryl", "Chloe", "Chris", "Chrissie","Christina", "Cindy", "Claire",  "Clara", "Clarice", "Clarissa", "Clarity", "Claudia", "Clemence", "Clementine", "Cleo", "Clover", "Colleen", "Comfort", "Connie", "Constance", "Cora", "Coral", "Cordelia", "Corinne", "Cornelia", "Courtney", "Cyrstal", "Cyan", "Cynthia", "Daffodil", "Dahlia", "Daisy", "Dale", "Dana", "Danica", "Daniellla", "Danielle", "Daphne", "Darcy", "Darlene", "Dawn", "Deb", "Debbie", "Deborah", "Debra", "Dee", "Deidre", "Delia", "Delilah", "Della", "Delora", "Delphia", "Denice", "Desiree", "Destiny", "Di", "Diamond", "Diana", "Diane", "Dinah", "Dionne", "Dolly", "Dolores", "Donna", "Doris", "Dorothea", "Dorothy", "Dory", "Dottie", "Dot", "Dove", "Dream", "Dusty", "Eartha", "Eden", "Edie", "Edith", "Edna", "Edwina", "Effie", "Eileen", "Eglantine", "Elaine", "Eleanor", "Elena", "Elisa", "Elisabeth", "Elise", "Eliza", "Elizabeth", "Ella", "elle", "Ellen", "Ellie", "Elodie", "Eloise", "Elsa", "Elsabeth", "Elsie", "Em", "Ember",  "Emerald","Emilia", "Emily",  "Emma", "Emmaline", "Emmy", "Enid", "Enola", "Erica", "Erin", "Esme", "Ermintrude", "Esmeralda", "Estelle", "Esther",  "Ethel", "Ettie", "Euphemia", "Eva", "Evaline", "Evangeline", "Eve", "Evelyn", "Fae", "Faith", "Fancy", "Fanny", "Fawn", "Gaye", "Felicia", "Felicity", "Fern", "Fiona", "Fleur", "Fleurette", "Flo", "Flora", "Florence", "Flower", "Fortune", "Fran", "Frances", "Francine", "Francis", "Frankie", "Franny", "Freddie", "Frederica", "Freya", "Gabby", "Gabriella", "Gabrielle", "Gail", "Gale", "Garnet",  "Gemma", "Genevieve", "Georgia", "Georgiana", "Georgie", "Georgina", "Gertrude", "Gillian", "Ginger", "Ginny", "Giselle", "Gladys", "Glenda", "Gloria", "Gloriana", "Glory", "Grace", "Gracie", "Gretchen", "Greta", "Griselda", "Gwen", "Gweldolyn", "Gwyneth", "Haley", "Hannah", "Harley", "Harmony", "Harper", "Harriet", "Hattie", "Haven", "Hayley",  "Hazel", "Heather", "Heaven", "Heidi", "Helen", "Helena", "Henrietta","Hettie", "Hilary", "Hilda", "Holly",  "Honey", "Honora", "Hope", "Hortense", "Hunter", "HYacinth", "Ida", "Imogen", "India", "Indiana", "Indigo", "Irene", "Iris", "Irma", "Isabel", "Isadora", "Ivy", "Izzy", "Jacinda", "Jacklyn", "Jackie", "Jacqueline", "Jade", "Jaime", "Jamie", "Jan", "Jane", "Janelle", "Janessa", "Janet","Janie", "Janice", "Jasmine",  "Jean", "Jeannette", "Jen"]
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
  var generationArray = ["8th (Pretender Elder)","9th (Ancilla)", "8th (Pretender Elder)","9th (Ancilla)", "8th (Pretender Elder)","9th (Ancilla)", "10th (Ancilla)", "11th (Neonate)", "12th (Neonate)", "13th (Neonate)", "10th (Ancilla)", "11th (Neonate)", "12th (Neonate)", "13th (Neonate)","10th (Ancilla)", "11th (Neonate)", "12th (Neonate)", "13th (Neonate)","10th (Ancilla)", "11th (Neonate)", "12th (Neonate)", "13th (Neonate)",  "10th (Ancilla)", "11th (Neonate)", "12th (Neonate)", "13th (Neonate)", "14th (Thin-Blooded)","15th (Thin-Blooded)", "10th (Ancilla)", "11th (Neonate)", "12th (Neonate)", "13th (Neonate)", "14th (Thin-Blooded)","15th (Thin-Blooded)"]
  var generation = generate(generationArray);
  return generation;
}

function archetypeGen(){
  var archetypeArray = ["Architect", "Autocrat", "Bon Vivant", "Bravo", "Caregiver", "Celebrant", "Child", "Competitor", "Conformist", "Conniver", "Curmudgeon", "Deviant", "Director", "Fanatic", "Gallant", "Judge", "Loner", "Martyr", "Masochist", "Monster", "Pedagogue", "Penitent", "Perfectionist", "Rebel", "Rogue", "Survivor", "Thrill-Seeker", "Traditionalist", "Trickster", "Visionary"]
  var archetype = generate(archetypeArray);
  return archetype;
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

function bornGen(generation){
  if (generation ==="8th (Pretender Elder)"){
    var embraced = getRandomInt(202, 253);
    return embraced;
  } else if (generation ==="9th (Ancilla)"){
    var embraced = getRandomInt(100, 253);
    return embraced;
  } else if (generation ==="10th (Ancilla)"){
    var embraced = getRandomInt(50, 253);
    return embraced;
  } else if (generation ==="11th (Neonate)"){
    var embraced = getRandomInt(50, 253);
    return embraced;
  } else if (generation ==="12th (Neonate)"){
    var embraced = getRandomInt(0, 253);
    return embraced;
  } else if (generation ==="13th (Neonate)"){
    var embraced = getRandomInt(0, 253);
    return embraced;
  } else if (generation ==="14th (Thin-Blooded)"){
    var embraced = getRandomInt(0, 153);
    return embraced;
  } else if (generation ==="15th (Thin-Blooded)"){
    var embraced = getRandomInt(0, 101);
    return embraced;
  }else {
    return "error";
  }
}

function malkavianWeakness(pronoun1,pronoun2, pronoun3) {
  var hearArray = ["a bell", "a certain song", "the sound of a piano", "the sound of a violin", "birdsong", "thunder roll", "the sound of someone shouting", "human screaming"]
  var seeArray = ["a bird", "fire", "a body of water", "flashing lights", "a spider", "insects"]
  var feelArray = ["pain", "fear", "anger", "trapped"]
  var smellArray = ["the scent of lavender", "the scent of human food","the scent of cooking meat", "the scent of ash", "the scent of roses"]
  var incapacArray = ["hears " + generate(hearArray), "sees " + generate(seeArray), "feels " + generate(feelArray), "smells " + generate(smellArray)]
  var prayerTrigger = ["anyone commits a sin, no matter how small", pronoun1 + " commits a sin, no matter how small", "anyone refers to God or religion", "anyone swears"]
  var compelArray = ["count any group of similarly-shaped items " + pronoun1 + " encounters", "recite a lengthy prayer whenever " + generate(prayerTrigger), "steal any small, unattended valuables"]
  var phobiaArray = ["dogs", "rats", "birds", "cats", "insects", "heights", "small spaces", "open spaces", "crowds", "being touched", "disease", "disorder", "being alone", "ugliness", "water", "fire", "electricity", "dirt", "snakes", "children", "the moon", "thunder", "animals",]
  var obsessArray = ["gemstones", "gold", "diamonds", "birds", "trains", "snakes", "bats", "spiders", "food", "silver", "clockworks", "time", "watches and clocks", "mirrors"]
  var beliefArray = ["in a byzantine conspiracy centered around " + pronoun2 + " personally", pronoun1 + " is the most qualified person to lead in any given situation", "that everyone is talking about " + pronoun2 + " behind " + pronoun3 + " back at all times", ]
  var derangementTypeArray = ["is sent into a fugue state if " + pronoun1 + " " + generate(incapacArray), "feels compelled to " + generate(compelArray), "has a phobia of " + generate(phobiaArray), "is obsessed with " + generate(obsessArray), "believes " + generate(beliefArray)]
  var derangementType = generate(derangementTypeArray);
  return derangementType;
}

function nosferatuWeakness(pronoun1,pronoun2, pronoun3) {
  var nosArray = [pronoun3 + " body is grotesquely swollen beyond all human limits", pronoun3 + " face and body are covered in boils", pronoun3 + " face resembles a skull, with sunken eyes, gaunt cheeks, and a hole where " + pronoun3 + " nose should be", pronoun1 + " is bone-thin and emaciated, looking like a walking skeleton", pronoun3 + " limbs and digits are weirdly thin and elongated", pronoun1 + " looks like a decomposing corpse", pronoun3 + " skin and features appear melted like wax", pronoun3 + " face resembles that of a vampire bat, with a recessed nose and sharp fangs", pronoun1 + " exudes slime constantly from " + pronoun3 + " skin", pronoun3 + " skin is red and purple as if every inch was covered with bruises", pronoun3 + " skin is dried into a stony solid that cracks to reveal bleeding flesh",]
  var nos = generate(nosArray);
  return nos;
}


function ventrueWeakness(pronoun1,pronoun2, pronoun3) {
  var genderArray = ["men", "women",]
  var zodiacArray = ["Virgos","Sagittariuses", "Capricorns", "Aquariuses", "Libras", "Scorpios", "Arieses", "Tauruses", "Pisceses", "Leos", "Geminis", "Cancers"]
  var ventArray = ["virgins", "priests", "nuns", "soldiers", "Christians", "Catholics", "Protestants", "alcoholics", "German " + generate(genderArray), "Russian " + generate(genderArray), "Spanish " + generate(genderArray), "French " + generate(genderArray), generate(zodiacArray)]
  var vent = generate(ventArray);
  return vent;
}

function gangrelWeakness (pronoun3){
  var animalTail = ["a wolf", "a serpent", "a cat", "a lion", "a fox", ]
  var animalEye = ["an eagle", "an owl", "a serpent", "a cat", "a wolf", "a lion"]
  var animalClaw = ["an eagle", "a cat", "a wolf"]
  var animalFur = ["striped", "long", "ragged", "patchy",]
  var animalColor = ["red", "ginger", "white", "grey", "black", "brown", "golden"]
  var animalEar = ["cat", "wolf", "lion", "fox", ]
  var traitArray = ["eyes like " + generate(animalEye) + "'s", generate(animalTail) + "'s tail", "fingers tipped with " + generate(animalClaw) + "'s claws", generate(animalFur) + " " + generate(animalColor) + " fur covering " + pronoun3 + " body", generate(animalEar) + " ears", "scales"]
  var trait = generate(traitArray);
  return trait;
}

function bloodlineGen(sect,clan, gender){
  if (clan === "Banu Haqim"){
    var bloodlines = ["","", "","","","Vizier", "Sorcerer"]
  } else if (clan === "Brujah"){
    var bloodlines = ["","", "","True Brujah"]
  } else if (clan === "Followers of Set"){
    var bloodlines = ["","", "Vipers","Tlacique"]
  } else if (clan === "Gangrel"){
    var bloodlines = ["","", "Coyote", "","", "Coyote","","", "Coyote", "","", "Coyote", "","", "Coyote", "Noiad"]
    if (sect === "Camarilla"){
      var bloodlines = ["","", "Coyote", "","", "","", "","", "","", "Coyote", "Noiad"]
    }
    if (gender === "Female"){
      bloodlines.push("Ahrimanes");
    }
  } else if (clan === "Giovanni"){
    var bloodlines = ["","","","","","Premascine"]
  } else if (clan === "Lasombra"){
    var bloodlines = ["","","","","","","","","Kiasyd"]
  } else if (clan === "Malkavian"){
    var bloodlines = ["Ananke", "Knights of the Moon", "","","",]
  }  else if (clan === "Toreador"){
    var bloodlines = ["Volgirre", "Ishtarri","Ishtarri","Ishtarri", "","","","","","",]
  } else if (clan === "Tremere" && sect === "Sabbat"){
    var bloodlines = ["Telyav", "","","","","","",]
  } else if (clan === "Tremere"){
    var bloodlines = ["Telyav", "","","","","","","","","","","","","","","","","","","","","","","","",]
  }  else if (clan === "Tzimisce"){
    var bloodlines = ["Koldun","Carpathian","Carpathian", "","","","","","",]
  } else if (clan === "Ventrue"){
    var bloodlines = ["Crusader", "","","","","","",]
  } else {
    var bloodlines = [""]
  }
  var bloodline = generate(bloodlines);
  if (bloodline != ""){
      var bloodline = " (" + bloodline + ")";
  }

  return bloodline;
}

function clanGen(sect, generation){
  var clanCamArray = ["Caitiff","Banu Haqim", "Brujah", "Gangrel", "Hecata",  "Malkavian", "Nosferatu","Toreador", "Tremere", "Ventrue", "Banu Haqim", "Brujah", "Gangrel", "Hecata",  "Malkavian", "Nosferatu", "Toreador", "Tremere", "Ventrue", "Banu Haqim", "Brujah", "Gangrel", "Hecata",  "Malkavian", "Nosferatu", "Toreador", "Tremere", "Ventrue", "Banu Haqim", "Brujah", "Gangrel", "Hecata",  "Malkavian", "Nosferatu",  "Toreador", "Tremere", "Ventrue", "Lasombra",]
  var clanSabArray = ["Caitiff","Banu Haqim", "Brujah", "Gangrel", "Hecata",  "Malkavian", "Nosferatu", "Ravnos", "Toreador", "Tremere", "Ventrue", "Lasombra", "Tzimisce","Lasombra", "Tzimisce","Lasombra", "Tzimisce","Lasombra", "Tzimisce","Lasombra", "Tzimisce",]
  var clanRareArray = ["Baali", "Cappadocians", "Salubri","Daughters of Cacophony","Gargoyles", "Followers of Set"]
  var clanFlatArray = ["Caitiff","Banu Haqim", "Brujah", "Gangrel", "Hecata",  "Malkavian", "Nosferatu", "Ravnos", "Toreador", "Tremere", "Ventrue", "Lasombra", "Tzimisce", generate(clanRareArray), ]
  if (generation=== "14th (Thin-Blooded)" || generation === "15th (Thin-Blooded)"){
    var clan = "Caitiff";
  }
  else if (sect === "Camarilla") {
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
      bornYear:"error",
      sect: sectGen(),
      nature: archetypeGen(),
      demeanor: archetypeGen(),
      nation: nationGen(),
      lang: "error",
      gender: genderGen(),
      species: "Vampire",
      generation: generationGen(),
      clan: "error",
      bloodline: "",
      // skinColor: "error",
      // eyeColor: "error",
      // hairColor: "error",
      // description: "error",
      // extraDesc: "",
      prounoun1: "",
      pronoun2: "",
      pronoun3: "",
      pronoun4: "",
      clanWeakness:"",
      // bodyType: generate(humanBodyArray),
      // height: generate(humanHeightArray),
      // ifMulticlass:"no",
    }
    console.log(char1.gender);


char1.lang = langGen(char1.nation);
char1.name = firstNameGen(char1.lang, char1.gender);
char1.surname = lastNameGen(char1.lang);
char1.clan = clanGen(char1.sect, char1.generation);
char1.bloodline = bloodlineGen(char1.sect, char1.clan, char1.gender);
// char1.clan = "Ventrue";

char1.bloodline = bloodlineGen(char1.sect, char1.clan,char1.gender);

char1.born = bornGen(char1.generation);
char1.bornYear = 2022-char1.born;
char1.embracedYear = char1.bornYear + char1.ageHuman;

// char1.embraced = embracedGen(char1.generation);
// char1.embracedYear = 2022-char1.embraced;
// char1.born = char1.embracedYear - char1.ageHuman;
// console.log(2002-char1.embraced);




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

var paintingType = ["watercolor", "oil", "Cubist", "Impressionist", "Surrealist", "realistic", "pop art", "abstract","minimalist"]
var musicType = ["rock", "pop", "classical", "folk", "acapella", "choral", "punk", "opera", "jazz", "rap", "blues", "bluegrass", "country"]
var danceType = ["modern", "ballet", "ballroom", "jazz", "hip hop"]
var toreadorWeakness = [generate(paintingType) + " paintings",  "comics", "novels", generate(musicType) + " music", "beautiful humans", "beautiful vampires", generate(danceType) + " dance", "jewelry", "fashion", "beautiful architecture", "natural beauty", "body art"]
var earthPlace = [" was Embraced", " was born"]
var eyeNumber = ["three", "four", "five", "six", "eight", "myriad"]
var eyeColorArray = ["scarlet", "purple", "magenta", "black", "white", "silver", "gold", "blue"]
var eyeType = ["that resemble a spider's", "that resemble a cat's", "that resemble a snake's", "that resemble a cuttlefish's", "with " +  generate(eyeColorArray) + " irises", "of varying different sizes, colors, and types"]
var visType = [" has made " + char1.pronoun4 + " inhumanly beautiful", " has made " + char1.pronoun4 + " unnaturally average and uninteresting to look at", " has formed " + char1.pronoun3 + " skull up into a bone crown jutting up over " + char1.pronoun3 + " forehead"," has formed " + char1.pronoun3 + " skin up into a fleshy crown jutting up over " + char1.pronoun3 + " forehead", " has " + generate(eyeNumber) + " eyes " + generate(eyeType)]

if (char1.clan ==="Gangrel") {
  char1.clanWeakness = char1.pronoun1 + " has " + gangrelWeakness(char1.pronoun3);
} else if (char1.clan ==="Malkavian") {
  char1.clanWeakness = char1.pronoun1 + " " + malkavianWeakness(char1.pronoun1, char1.pronoun2, char1.pronoun3);
} else if (char1.clan ==="Nosferatu") {
  char1.clanWeakness = nosferatuWeakness(char1.pronoun1, char1.pronoun2, char1.pronoun3);
} else if (char1.clan ==="Toreador") {
  char1.clanWeakness = char1.pronoun1 + " is obsessed with " + generate(toreadorWeakness);
} else if (char1.clan ==="Tzimisce"){
  char1.clanWeakness = char1.pronoun1 + " must rest in the proximity of at least two handfuls of earth from the place where " + char1.pronoun1 + generate(earthPlace) + ". Through the use of Vicissitude, " + char1.pronoun1 + generate(visType);
} else if (char1.clan ==="Ventrue") {
  char1.clanWeakness = char1.pronoun1 + " can only feed on the blood of " + ventrueWeakness();
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
    $(".bloodline").text(char1.bloodline);
    $(".age").text(monthGen() + char1.bornYear);
    $(".sect").text(char1.sect);
    $(".embraced").text("In " + char1.embracedYear + " at age " + char1.ageHuman);
    $(".nation").text(char1.nation);
    $(".nature").text(char1.nature);
    $(".demeanor").text(char1.demeanor);
    $(".generation").text(char1.generation);
    $(".subclass").text(" (" + char1.subClass + ")");
    $(".gender").text(char1.gender);
    $(".background").text(char1.background);
    $(".species").text(char1.species);
    $(".alignment").text(char1.alignment);
    $(".subrace").text(char1.subSpec);
    $(".description").text(char1.clanWeakness);



    event.preventDefault();
  })



});
