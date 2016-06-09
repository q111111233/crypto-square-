
$(document).ready(function() {
  $("#roman form").submit(function(event) {
    var number = $("#number").val();
    var romanNum = cryptosquare(number);
    $(".output").text(romanNum);
    event.preventDefault();
  });
});

function cryptosquare(words){
  words = words.replace(/\W/g, '').toLowerCase();
  var column = Math.ceil(Math.sqrt(words.length));
  words = splitWords(words,column);
  for(var i=0; i<words.length;i++){
    words[i] = splitWords(words[i],1);
  }

  var newArray = words[0].map(function(col, i) {
    return words.map(function(row) {
      return row[i];
    })
  });

  for(var i=0; i<newArray.length; i++){
    newArray[i] = newArray[i].join("");
  }
  newArray = newArray.join("");
  return splitWords(newArray,5);
}

function splitWords(words,size){
  var result = [];
  for (var i = 0; i < words.length; i += size) {
      result.push(words.substring(i, i + size));
  }
  return result;
}
