//[1,2,3,9] sum = 8 ==> No
//[1,4,3,4] sum = 8 ==> Yes

//So if given an array of numbers see if two numbers in the array  equals to the sum using BST. 


//Could just subtract the sum by the items in the array to get a certain value back

//[1,2,3,4,5,6,7,8,9,10]

/*

var rangeFunction = function(array){
  sortedArray = array.sort((a, b) => a - b);
  lowestVal = sortedArray[0];
  highestVal = sortedArray.slice(-1)[0];
  rangeArray = [];
  console.log(lowestVal);
  console.log(highestVal);
  for (lowestVal; lowestVal <= highestVal; lowestVal++) {
    rangeArray.push(lowestVal);
  }

  return rangeArray;
};


rangeFunction.prototype.numberChecker = function(){
  let sortedArray = array.sort();
  console.log(sortedArray);
  inputtedArray = [];
  for (let i = 0; i < array.length; i++){
    if (rangeArray[i] - array[i] === sum) {
      inputtedArray.push();
    } else {
      return false;
    }
    console.log(inputtedArray);
  }
};
let inputHello = new rangeFunction([1,4,3,4]);

inputHello.numberChecker();


*/

var rangeFunction = function(array, sum){
    let sortedArray = array.sort((a, b) => a - b);
    //sorts the array numerically
    let lowestVal = sortedArray[0];
    //identifies the lowestVal of the sortedArray;
    let highestVal = sortedArray.slice(-1)[0];
    //identifies the highest value of the sortedArray
    let rangeArray = [];
    for (lowestVal; lowestVal <= highestVal; lowestVal++) {
      rangeArray.push(lowestVal);
    } //when the lowestVal is less than or equal to the highestVal, incremement by 1. 
    let inputtedArray = [];
    //empty array where numbers will be inputted. 
  
    for (let i = 0; i < rangeArray.length; i++) {
      if (rangeArray[i] + sortedArray[i] === sum) {
        inputtedArray.push(rangeArray[i] + sortedArray[i])
        console.log(inputtedArray);
      } //push the numbers that equal to the sum into the array
    }
    for (let i  = 0; i < inputtedArray; i++) {
      if (inputtedArray[i] = sum) {
        return true;
      }
    }
    
    if (inputtedArray === undefined || inputtedArray.length === 0) {
        return false;
    }
  };
  
  
  rangeFunction([1,4,3,10], 8);
  