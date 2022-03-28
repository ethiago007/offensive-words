$(document).ready(function() {
  $("#OFFENSIVE").submit(function(event) {
    event.preventDefault();
    $(".alert").hide();
    let sentence = $("#input").val();
   
    let offensiveMessage = concealOffensiveWords(sentence);
    if (offensiveMessage === "error: no input") {
      $(".alert").show();
    } else {
      $("#sentence").text(concealOffensiveWords(sentence));
    }
  });
});


function errorCheck(passage) {
  if (!passage) {
    return"error:no input"
  }
}
function concealOffensiveWords (sentence)
 {
   sentence = sentence.toLowerCase();
   let error = errorCheck(sentence);
   if (error) {
     return error
   }
  let rudeArray= ["zoinks", "muppeteer", "biffaroni", "loopdaloop"]
  let bringArray=[];
  let newArray = sentence.split(" ");
  newArray.forEach(function(element) {
    let seen = false;
rudeArray.forEach(function(oElement){
  if (element=== oElement)
{
    element="*****"
    seen=true
  }
});
bringArray.push(element)
seen=false;
  });
  return bringArray.join(" ");
}
function boldPassage(word, passage) {
  if (errorCheck2(word, passage)) {
    return "";
  }
 
}