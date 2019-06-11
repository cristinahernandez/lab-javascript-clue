// Characters
/*
mrGreen
first_name:   Jacob
last_name:    Green
color:        green
description:  He has a lot of connections
age:          45
image:        https://pbs.twimg.com/profile_images/506787499331428352/65jTv2uC.jpeg
occupation:   Entrepreneur

drOrchid
first_name:   Doctor
last_name:    Orchid
color:        white
description:  PhD in plant toxicology. Adopted daughter of Mr. Boddy
age:          26
image:        http://www.radiotimes.com/uploads/images/Original/111967.jpg
occupation:   Scientist

profPlum
first_name:   Victor
last_name:    Plum
color:        purple
description:  Billionare video game designer
age:          22
image:        https://metrouk2.files.wordpress.com/2016/07/professor-plum.jpg
occupation:   Designer

missScarlet
first_name:   Kasandra
last_name:    Scarlet
color:        red
description:  She is an A-list movie star with a dark past
age:          31
image:        https://metrouk2.files.wordpress.com/2016/07/miss-scarlett.jpg
occupation:   Actor

mrsPeacock
first_name:   Eleanor
last_name:    Peacock
color:        blue
description:  She is from a wealthy family and uses her status and money to earn popularity
age:          36
image:        https://metrouk2.files.wordpress.com/2016/07/mrs-peacock.jpg
occupation:   Socialité

mrMustard
first_name:   Jack
last_name:    Mustard
color:        yellow
description:  He is a former football player who tries to get by on his former glory
age:          62
image:        https://metrouk2.files.wordpress.com/2016/07/colonel-mustard.jpg
occupation:   Retired Football player

// Weapons

name: rope        ---   weight: 10
name: knife       ---   weight: 8
name: candlestick ---   weight: 2
name: dumbbell    ---   weight: 30
name: poison      ---   weight: 2
name: axe         ---   weight: 15
name: bat         ---   weight: 13
name: trophy      ---   weight: 25
name: pistol      ---   weight: 20

// Rooms
name: Dinning Room
name: Conservatory
name: Kitchen
name: Study
name: Library
name: Billiard Room
name: Lounge
name: Ballroom
name: Hall
name: Spa
name: Living Room
name: Observatory
name: Theater
name: Guest House
name: Patio
*/

//Characters

let mrGreen = {
  first_name: "Jacob",
  last_name: "Green",
  color: "green",
  description: "He has a lot of connections",
  age: 45,
  image: (src =
    "https://pbs.twimg.com/profile_images/506787499331428352/65jTv2uC.jpeg"),
  occupation: "Entrepreneur"
};

let drOrchid = {
  first_name: "Doctor",
  last_name: "Orchid",
  color: "white",
  description: "PhD in plant toxicology. Adopted daughter of Mr. Boddy",
  age: 26,
  image: (src = "http://www.radiotimes.com/uploads/images/Original/111967.jpg"),
  occupation: "Scientist"
};

let profPlum = {
  first_name: "Victor",
  last_name: "Plum",
  color: "purple",
  description: "Billionare video game designer",
  age: 22,
  image: (src =
    "https://metrouk2.files.wordpress.com/2016/07/professor-plum.jpg"),
  occupation: "Designer"
};

let missScarlet = {
  first_name: "Kasandra",
  last_name: "Scarlet",
  color: "red",
  description: "She is an A-list movie star with a dark past",
  age: 31,
  image: (src =
    "https://metrouk2.files.wordpress.com/2016/07/miss-scarlett.jpg"),
  occupation: "Actor"
};

let mrsPeacock = {
  first_name: "Eleanor",
  last_name: "Peacock",
  color: "blue",
  description:
    "She is from a wealthy family and uses her status and money to earn popularity",
  age: 36,
  image: (src = "https://metrouk2.files.wordpress.com/2016/07/mrs-peacock.jpg"),
  occupation: "Socialité"
};

let mrMustard = {
  first_name: "Jack",
  last_name: "Mustard",
  color: "yellow",
  description:
    "He is a former football player who tries to get by on his former glory",
  age: 62,
  image: (src =
    "https://metrouk2.files.wordpress.com/2016/07/colonel-mustard.jpg"),
  occupation: "Retired Football player"
};

//Weapons

let rope = {
  name: "rope",
  weight: 10
};

let knife = {
  name: "knife",
  weight: 8
};

let candlestick = {
  name: "dumbbell",
  weight: 2
};

let dumbbell = {
  name: "dumbbell",
  weight: 30
};

let poison = {
  name: "poison",
  weight: 2
};

let axe = {
  name: "axe",
  weight: 15
};

let bat = {
  name: "trophy",
  weight: 13
};

let trophy = {
  name: "trophy",
  weight: 25
};

let pistol = {
  name: "pistol",
  weight: 20
};

// Characters Collection
let charactersArray = [mrGreen, drOrchid, profPlum, missScarlet, mrsPeacock];

// Rooms' Collection
let roomsArray = [
  "Dinning Room",
  "Conservatory",
  "Kitchen",
  "Study",
  "Library",
  "Billiard Room",
  "Lounge",
  "Ballroom",
  "Hall",
  "Spa",
  "Living Room",
  "Observatory",
  "Theater",
  "Guest House",
  "Patio"
];

// Weapons Collection
let weaponsArray = [
  rope,
  knife,
  candlestick,
  dumbbell,
  poison,
  axe,
  bat,
  trophy,
  pistol
];

//Define random selector

function randomSelector(randomCard) {
  return randomCard[Math.floor(Math.random() * randomCard.length)];
}

// character => function randomSelector => variable => object
// weapon => function randomSelector => variable => object
// room => function randomSelector => array

// Define pick mistery
//pickMistery is a function that returns a variable, at the same time an array.

function pickMistery() {
  let misteryEnvelope = [
    randomSelector(charactersArray),
    randomSelector(weaponsArray),
    randomSelector(roomsArray)
  ];
  return misteryEnvelope;
}

// Define reveal Mistery
// Jasmine asks to return an array and pickMistery is a function that returns and array

function revealMistery(pickMistery) {
  console.log(
    `${pickMistery[0].first_name} ${
      pickMistery[0].last_name
    } killed Mr.Boddy using the ${pickMistery[1].name} in the ${
      pickMistery[2].name
    } !!!`
  );
}