

var inputSentence = function(string){
    let reversed = "";
    for (var i = string.length - 1; i >= 0; i--){
        reversed += string[i];
    }
    console.log(reversed);
    return reversed;
    
}

inputSentence("Hello Word");