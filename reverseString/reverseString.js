const reverseString = function(input) {
    strAsArr = input.split("");
    
    arrReverse = strAsArr.reverse();
    
    newStr = arrReverse.join(""); 
    console.log(newStr);
    
    return newStr;
  }
  
  //reverseString("hello");
  //reverseString('123! abc!');
  module.exports = reverseString