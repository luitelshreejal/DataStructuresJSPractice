var FactorialFunction = function(number) {
    pushedArray = [];
    for (i = 1; i <= number-1; i++){
      pushedArray.push(i);
    }
    console.log(pushedArray);
    answerArray = [];
    multiplication = 1;
    for (i = 0; i < pushedArray.length; i++){
      multiplication = multiplication * pushedArray[i];
    }
    return multiplication;
  }
  
  FactorialFunction(10);