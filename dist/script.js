$(document).ready(function() {

  let words = ["Hello", "Wlrld"]
  let chosenWord = words[1]
  let splitWord = chosenWord.split("")
  
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
        alert("Letter does not exist")
      }
     };
    });  
});