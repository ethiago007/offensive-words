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
let offenseArray = ["biffaroni", "loopdaloop", "zoinks", "muppeteer"];
let wordString = "<p>";
let passageArray = passage.split(" ");
passageArray.forEach(function (element, index) {
  if (wordMatch(element, word)) {
    wordString = wordString.concat("<b>" + element + "</b>");
  }
  else if (element.includes(word) && element !== word) {
    newElement = element.replace(word, "<b>" + word + "</b>");
    wordString = wordString.concat(newElement);
  }
  else {
    wordString = wordString.concat(element);
  }
  offensiveArray.forEach(function (off) {
    if (index !== (passageArray.length - 1 && passageArray.length - 1 !== off)) {
      wordString = wordString.concat(" ");
    }
  });
});
return wordString + "</p>";
$(document).ready(function () {
  $("#BOLDEN").submit(function (event) {
    event.preventDefault();
    let passage = $("#text-passage").val();
    let word = $("#input1").val();
    let boldPassage = boldPassage(word, sentence1);
    let concealBoldPassage = concealOffensiveWord(boldPassage)
    $("#bolded-passage").html(maskedBoldPassage);
  });
});