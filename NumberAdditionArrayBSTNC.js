//[1,2,3,9] sum = 8 ==> No
//[1,4,3,4] sum = 8 ==> Yes

//So if given an array of numbers see if two numbers in the array  equals to the sum using BST. 


/*

var anotherSumFunction = function(value) {
  let array = [1,9,8,10,15,20];
  let sortedArray = array.sort((a, b)=>a-b);
  console.log(sortedArray);
  for (i = 0; i <= sortedArray.length; i++){
    let incrementI = i + 1;
    if (sortedArray[i] + sortedArray[incrementI] === value) {
      return true;
    } else {
      return false;
    }
  }
}
anotherSumFunction(9);
*/
var sumFunction = function(sum) {
    let array = [1,9,8,10,15,20];
  
    let sortedArray = array.sort((a,b)=>a-b);
    //sorts array
    console.log(sortedArray);
    //1,3,4,4
    let low = 0;
    let anotherLow = 0;
    let high = array.length - 1;
    //console.log(sortedArray[low]);
    //console.log(sortedArray[high]);
    while (low <= high) {
      //let midpoint = 1+ Math.floor((low + high)/2);//array[3] = 4
      if (sortedArray[low] + sortedArray[high] === sum) {
        return true;
      } else if (sortedArray[low] + sortedArray[high] > sum) {
        high = high - 1;
      } else if (sortedArray[low] + sortedArray[high] < sum){
        //console.log(sortedArray[low]);
        low = low + 1;
  
      }
    }
    return false;
  }
  
  
  sumFunction(3);
  