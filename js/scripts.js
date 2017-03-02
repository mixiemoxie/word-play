$(function() {
  $("button#changeSentence").click(function(){
    var output = [];
    var reverseSentance;
    var sentence = $("#sentenceInput").val();
    var splitSentence = sentence.split(" ");
    splitSentence.forEach(function(word){
      if (word.length >= 3){
        output.push(word);
        output.reverse();
        reverseSentance = output.join(" ");
      }
    });
    console.log(reverseSentance);
    $("#outputSentence").text(reverseSentance);
  });
});
