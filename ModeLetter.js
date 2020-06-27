// Given a string, find the length of the longest substring without repeating characters.

// Example 1:

// Input: "abcabcbb"
// Output: 3 
// Explanation: The answer is "abc", with the length of 3. 
// Example 2:

// Input: "bbbbb"
// Output: 1
// Explanation: The answer is "b", with the length of 1.

var highestFrequency = (array) => {
    var occurenceStored = new Map();
    for (i = 0; i < array.length; i++){
      j = i + 1;
      if (array[i] === array[j]){
        var occurrence = 0;
        occurenceStored.map(array[i], occurrence++)
      } else {
        return false;
      }
    }
  
    console.log(occurenceStored);
  }
  
  
  var longestSubstring = (stringInput) => {
    var emptyArray = [];
    for (var i = 0; i < stringInput.length; i++){
      emptyArray.push(stringInput[i]);
    }
    console.log(emptyArray);
    var mappedArray = emptyArray.map((entry) => {
      return entry.charCodeAt(0);
    })
    console.log(mappedArray);
    mappedArray.sort((a, b) => { return a - b});
    console.log(mappedArray);
    highestFrequency(mappedArray);
  
    // var mappedArray = 
  }
  
  longestSubstring("hellow");