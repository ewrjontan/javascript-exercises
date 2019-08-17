const repeatString = function(strInput, repetitions){
    console.log("hello");
    
    let myString = "";
    
    if (repetitions === -1){
      console.log("ERROR");
      return "ERROR";
    }else{
      for (let i=0; i <repetitions; i++){
        myString += strInput;  
      }
    };
    
    console.log("final: " + myString);
    return myString;
  }
  
  module.exports = repeatString