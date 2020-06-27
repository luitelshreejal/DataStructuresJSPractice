//Given a string s consists of upper/lower-case alphabets and empty space characters ' ', return the length of last word (last word means the last appearing word if we loop from left to right) in the string.

//https://leetcode.com/problems/length-of-last-word/


LengthOfLastWord = (string) => {
    var splittedString = string.split(" ");
    console.log(splittedString[splittedString.length - 1]);
    var lastWord = splittedString[splittedString.length - 1];
    var emptyNumber = 0;
    for (i = 0; i < lastWord.length; i++){
      emptyNumber++
    };
    return emptyNumber;
  }
  
  LengthOfLastWord("hELLO World Dawg Babesss");
  
S  