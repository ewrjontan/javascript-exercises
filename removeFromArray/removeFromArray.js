const removeFromArray = function(array) {
    //console.log("Array: " + array);
    
    let args = [...arguments];
    
    //console.log(args);
    
    for (let i=1; i< args.length; i++){
      //console.log("Current arg: " + args[i]);
      
      for (let j=0; j <array.length; j++){
        //console.log("current array: " + array[j]);
        
        if (array[j] === args[i]){
          let tempArrIndex = array.indexOf(array[j]);
          //console.log("index of: " + array[j] + " is " + tempArrIndex); 
          array.splice(tempArrIndex, 1);
        }  
      } 
    }
    //var args = [...arguments];
    //console.log("new arr");
    //console.log(array);
    
    return array;
  }
  
  module.exports = removeFromArray