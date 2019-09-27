$(document).ready(function() {

  let words = ["Hello", "World"]
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
      
      if( chosenWord.indexOf(letterEntered) > -1) {
        $("div>:nth-child(1)").append("<p>Hello</p>")
      }else {
        alert("Letter does not exist")
      }
     };
    });  
});