
$(document).ready(function() {

  require('dotenv').config()

  const CONFIG = require("config.json")

  let words = ["Hello", "Wlrld"]
  let chosenWord = words[1]
  let splitWord = chosenWord.split("")
  let guesses = 0;


  //Below Code is for firebase


  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: CONFIG.apiKey,
    authDomain: "myhangman-26740.firebaseapp.com",
    databaseURL: "https://myhangman-26740.firebaseio.com",
    projectId: "myhangman-26740",
    storageBucket: "",
    messagingSenderId: "707022305326",
    appId: "1:707022305326:web:66139d951b7143674747bf",
    measurementId: "G-HZTTVYCR6H"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();
console.log(firebase)


///Connecting to database
let database = firebase.database();

let ref = database.ref('scores')

let data = {
  name : "Cesar Gomez",
  score : 5

}

ref.push(data);


  //Grabs the letter from the input
  let inputLetter = $("input").keyup( function() {
    let value = $( this ).val();
    console.log(inputLetter)
  })
  
  //appends divs to the dom based on word
  for(let i = 0; i < splitWord.length; i++ ) {
    $('#displayWord').append('<div id=' + i + ' class="box"></div>')
  }
  
  //Checks if the user clicks submit or hits enter.
  $(document).on("keypress", function(e) {
    if(e.which === 13) {
      let letterEntered = $("input").val();
      //Checks how many times the inputted letter is in the word.
      if( chosenWord.indexOf(letterEntered) > -1) {
        for (let j = 0 ; j < splitWord.length; j++) {

          if (splitWord[j] === letterEntered) {
            $("#"+j).append("<span class=alignLet >" + letterEntered + "</span>");
          }
        }
      }else {
        $("#wrongGuess").append("<span class='wrong'>" + letterEntered + "<span>")
        guesses++
        $("#numberOfGuesses").html(guesses);
      }
     };
    });  
});