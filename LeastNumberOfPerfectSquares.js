/*
Given a positive integer n, find the least number of perfect square numbers (for example, 1, 4, 9, 16, ...) which sum to n.

//https://leetcode.com/problems/perfect-squares/

Example 1:

Input: n = 12
Output: 3 
Explanation: 12 = 4 + 4 + 4.
Example 2:

Input: n = 13
Output: 2
Explanation: 13 = 4 + 9.

*/

//16

var rangeFunction = function(num) {
    rangeArray = [];
    for (i = 1; i <= num; i++) {
      rangeArray.push(i)
    }
    return rangeArray;
  };
  
  rangeFunction(12);
  
  //[1,2,3,4,5,6,7,8,9,10,11,12]
  
  
  var numSquares = function(num){
  
  
    pushedArray = []; //empty array that will later be pushed
  
  
    var high = num; //declares the high to be num;
    var low = 1;
    for (i = 0; i <= rangeArray.length; i++){
      //Start at zeo, when i is less than the length of rangeArray; increment by 1. num = 10; 
      while (i <= high) { //2 <= high
        //while i is less than the high (10)
        var midpoint = 1 + Math.floor((high+low)/2);
        //establishes the midpoint (8)
        if (midpoint * midpoint >= num) {
          high = midpoint - 1;
          //high = 7;
          if (midpoint * midpoint === num) {
            pushedArray.push(i);
            console.log(pushedArray);
          }
        } else if (midpoint * midpoint <= num) {
          low = midpoint + 1;
          if (midpoint * midpoint === num) {
            pushedArray.push(i);
          }
        }
      
  
      }
      console.log(pushedArray);
    }
  }
  
  numSquares(12);
  
  
  //Identify if the specific number is a perfect square for the particular variable "n" and push it in to an array. 