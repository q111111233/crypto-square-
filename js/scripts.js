
$(document).ready(function() {
  $("#roman").submit(function(event) {
    var number = $("#number").val();
    var romanNum = cryptosquare(number);
      $("#output").text(romanNum);

    event.preventDefault();
  });
});

function cryptosquare(words){
  words = words.replace(/\W/g, '');

  var column = Math.ceil(Math.sqrt(words.length));
  var table = [column][column];
  words = splitWords(words,column);
  //alert(words);
    for(var i=0; i<column;i++){
      words[i] = splitWords(words[i],1);

      alert(words[i]);
    }
return typeof words[0];
  // for(var i=0; i<column; i++){
  //   for(var j=0; j<column; j++){
  //     table[i][j] =
  //   }
  // }
}

function splitWords(words,size){
  var result = [];
  for (var i = 0; i < words.length; i += size) {
      result.push(words.substring(i, i + size));
  }
  return result;
}
