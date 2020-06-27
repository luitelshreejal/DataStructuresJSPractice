var swap = function(input, index_A, index_B) {
    //input, 6, 2
    // [1, 6, 2]
  for (var i = 0; i < input.length; i++){
    if (input[i] === index_A) {
      var indexAChanged = i;
      break;
    }
  }
  for (var i = 0; i < input.length; i++){
    if (input[i] === index_B) {
      var indexBChanged = i;
      break;
    }
  }
  let temp = input[indexAChanged];
  input[indexAChanged] = input[indexBChanged];
  input[indexBChanged] = temp;
};

var sortArray = function(inputtedArray){
  for (var i = 0; i < inputtedArray.length; i++){
    for (var x = i + 1; x < inputtedArray.length; x++){
      if (inputtedArray[i] < inputtedArray[x]) {
        continue;
      } else if (inputtedArray[i] > inputtedArray[x]){
        swap(inputtedArray, inputtedArray[i], inputtedArray[x]);
      }

    }
  }
  console.log(inputtedArray);
  return inputtedArray;
};

var deleteDuplicate = function(inputtedArray){
  // sortArray(inputtedArray);
  var tempArray = [1,  6, 15, 10, 10, 10, 15, 20, 20];
  pushedArray = [];
  for (var i = 0; i < tempArray.length; i++){
    var x = i + 1;
    if (tempArray[i] === tempArray[x]){
      pushedArray.push(tempArray[i]);
    }

  }
  for (var i = 0; i < tempArray.length; i++){
    for (var x = 0; i < tempArray.length; i++){
      if (tempArray[i] === tempArray[x]){
        tempArray.splice(i, i);
      }
    }
  }
  console.log(pushedArray);
  return temparray;
};
deleteDuplicate();
// deleteDuplicate([1,10,6,15,10,10,15,20,20]);

//First Run:

//1(i),10(x),6,15,10,10,15,20,15,20


//2nd Run:
//1,6(i),10(x),15,10,10,15,20,15,20

//3rd Run:
//1,6,10(i),15(x),10,10,15,20,15,20

//4th Run:
//1,6,10,15(i),10(x),10,15,20,15,20

//4th Run:
//1,6,10,10,10(i),15(x),15,20,15,20


// var removeDuplicates = function(inputArray) {
//   var inputArray = sortArray(inputArray);
//   console.log(inputArray);
//   for (var i = 0; i < inputArray.length; i++){
//     for (var x = i + 1; i < inputArray.length; i++) {
//       if (inputArray[i] === inputArray[x]){
//         inputArray.splice(i, x);
//       }
//     }
//   }
//   return inputArray;
// }

// var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
// for (var i = 0; i < arr.length; i++){ 
//   if (arr[i] === 5) { 
//     arr.splice(i, 1); 
//     }
//   }//=> [1, 2, 3, 4, 6, 7, 8, 9, 0]

