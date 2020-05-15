// Generate Random Whole Numbers within a Range
function randomRange(myMin, myMax) {
   //Math.floor gets the whole number
   //Math.random is multiplied by the result of the two parameters and 1 is added
   // we add myMin parameter to the rouned whole number

   return Math.floor(Math.random() * (myMax - myMin + 1)) + myMin;
}

//profile Lookup Function
// giving some objects with data to use for the looping of contacts
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

// Card Counting function
// var count = 0; //variable to save the count

var count = 0;

function cc(card) {
   // function cc(card) {
   //    if (card >= 2 <= 6) {
   //       //should I use an and operator &&
   //       return count++ + " Bet"; //add the count plus one
   //    } else if (card == 7 <= 9) {
   //       //and operator?
   //       return (count = count + " Bet"); // count stays
   //    } else if ((card === 10, "J", "Q", "K", "A")) {
   //       //strict operator?
   //       return count-- + " Bet"; //decremetning the count
   //    }
   // }
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
