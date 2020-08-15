//  check what type of element was inputed
function checkType(elem) {
   var type = typeof elem;
   return type;
}

//check for the presence of an element using indexOf()

function checkForElement(elem) {
   let hideAndSeek = ["edward", "sarah", "bhavin", "danny", "joe"];

   // function is taking two parameters one array and one element
   if (hideAndSeek.indexOf(elem) != -1) {
      return true;
   } else {
      return false;
   }
}

// add items using splice()
var mindBlownAdd = ["some", "of", "these", "are", "confusing"];
function addItemSplice(minIndex, maxIndex, addThis) {
   // can take up to three parameters which are integers
   // first one sets index to start removal
   // second one determines how many values to delete
   //    third parameter adds values
   //    var startingPoint = minIndex;
   //    var howMany = maxIndex;
   mindBlownAdd.splice(minIndex, maxIndex, addThis);
   // returns new array with removed values and new value added
   return mindBlownAdd;
}

// remove items using splice
var mindBlown = ["some", "of", "these", "are", "confusing"];
function removeItemSplice(minIndex, maxIndex) {
   // can take up to three parameters
   // first one sets index to start removal
   // second one determines how many values to delete
   //    var startingPoint = minIndex;
   //    var howMany = maxIndex;
   var takeAway = mindBlown.splice(minIndex, maxIndex);
   return takeAway;
}

// Generate Random Whole Numbers within a Range
function randomRange(myMin, myMax) {
   //Math.floor gets the whole number
   //Math.random is multiplied by the result of the two parameters and 1 is added
   // we add myMin parameter to the rouned number

   return Math.floor(Math.random() * (myMax - myMin + 1)) + myMin;
}

//profile Lookup Function
var contacts = [
   {
      firstName: "Edward",
      lastName: "plasencio",
      number: "0543236543",
      likes: ["Pizza", "Coding", "Brownie Points"],
   },
   {
      firstName: "Harry",
      lastName: "Potter",
      number: "0994372684",
      likes: ["Hogwarts", "Magic", "Hagrid"],
   },
];
function profileLookup(name, prop) {
   //i have to loop throught the contact list and increment by 1
   // for loop set the position, if its less then the contact list it increments by 1
   for (var i = 0; i < contacts.length; i++) {
      //checking to see if the contact matches the name
      // use dot notation to allocate th efirstname prop and check against the name input
      if (contacts[i].firstName === name) {
         //   checkng to see if the contact has that property
         if (contacts[i].hasOwnProperty(prop)) {
            //returns contact with prop
            return contacts[i][prop];
         } else {
            //if not found displays this message
            return "No such property";
         }
      }
   }
   return "No such contact";
}
// Iterating odd numbers with a for loop
function oddNumberLoop(num) {
   myArray = [];
   for (let i = 1; i <= num; i += 2) {
      myArray.push(i);
   }
   return myArray;
}
// Record Collection
let collection = {
   2548: {
      album: "Slippery When Wet",
      artist: "Bon Jovi",
      tracks: ["Let It Rock", "You Give Love a Bad Name"],
   },
   2468: {
      album: "1999",
      artist: "Prince",
      tracks: ["1999", "Little Red Corvette"],
   },
   1245: {
      artist: "Robert Palmer",
      tracks: [],
   },
   5439: {
      album: "ABBA Gold",
   },
};

function recordCollection(id, prop, value) {
   if (value === "") delete collection[id][prop];
   else if (prop === "tracks") {
      collection[id][prop] = collection[id][prop] || [];
      collection[id][prop].push(value);
   } else {
      collection[id][prop] = value;
   }
   console.log(collection);

   return collection;
}

// Card Counting function
var count = 0;

function cc(card) {
   var msg = "";

   switch (card) {
      case 2:
      case 3:
      case 4:
      case 5:
      case 6:
         count++;
         break;
      case 7:
      case 8:
      case 9:
         count = count;
         break;
      case 10:
      case "J":
      case "Q":
      case "K":
      case "A":
         count--;
         break;
   }

   if (count === 5) {
      msg = "5 Bet";
   } else if (count === 0) {
      msg = "0 Hold";
   } else if (count === -5) {
      msg = "-5 Hold";
   } else if (count === -1) {
      msg = "-1 Hold";
   } else if (count === 1) {
      msg = "1 Bet";
   }

   return msg;
}
