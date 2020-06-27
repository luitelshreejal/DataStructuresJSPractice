//Given {1,2,6,6,6,10,14,14}; Return {1,2,6,10,14}


//Two ways to address 1, Binary Search Tree, For Loop

// var identifyDuplicates = function(inputtedArray) {
//   var pushedArray = [];
//   for (i=0; i < inputtedArray.length; i++){
//     for (x = i + 1; x < inputtedArray.length; x++){
//       if (inputtedArray[i] === inputtedArray[x]) {
//         pushedArray.push(inputtedArray[x]);
//         inputtedArray.splice(inputtedArray[x],1);
//       }
//     }
//   }

// }

// identifyDuplicates([1,2,6,6,6,10,14,14]);

// var isDuplicate = function() {
//     var helloWorld = [1,2,3,4,3,4];
//     var doubleValue = [];
//     for (i = 0; i < helloWorld.length; i++) {
//       for (x = i + 1; x < helloWorld.length; x++) {
//         if (helloWorld[i] === helloWorld[x]) {
//           doubleValue.push(helloWorld[x]);
//         }
//       }
//     }
//     // console.log(doubleValue);
//   };

// isDuplicate();



var swap = function(input, index_A, index_B) {
    //input, 6, 2
    // [1, 6, 2]
  console.log(input);
  for (var i = 0; i < input.length; i++){
    if (input[i] === index_A) {
      var indexAChanged = i;
    }
    if (input[i] === index_B) {
      var indexBChanged = i;
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
  return inputtedArray;
  // console.log(inputtedArray);
};

sortArray([1, 10, 2, 15, 9]);
//1,2,10,15,9

// var DistinctValues = function(inputtedArray2){
//   inputtedArray2.sort((a, b) => a - b);
  
//   console.log(inputtedArray2);
//   var highestValue = inputtedArray2.length - 1;
//   console.log(highestValue);
//   var lowestValue = 0;
//   var helloBitch = 1 + Math.floor((highestValue + lowestValue)/2);
//   console.log(helloBitch);
//   while (lowestValue < highestValue) {
//     var midpoint = 1 + Math.floor((highestValue + lowestValue)/2);
//     if(inputtedArray2[midpoint] === inputtedArray2[lowestValue]){
//       inputtedArray2.splice(inputtedArray[midpoint], 1);
//     }else if (inputtedArray2[midpoint] > inputtedArray2[lowestValue]){
//       //if 6 is greater than 1
//       lowestValue = lowestValue + 1;
//     }else if (inputtedArray2[midpoint] < inputtedArray2[highestValue]) {
      
//       highestValue = highestValue - 1;
//     }
//   return false;
//   }
// };

// DistinctValues([1,2,6,6,6,10,14,14]);