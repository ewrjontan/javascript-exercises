const sumAll = function(input1, input2) {
    let finalSum = 0;
    let num1, num2;
    
    //console.log("typeOf input1: " + typeof input1);
    //console.log("typeOf input2: " + typeof input2);
  
    //decides order and type of inputs
    if (input1 < 0 || input2 < 0 || typeof input1 !== "number" || typeof input2 !== "number"){
      //console.log("ERROR");
      return "ERROR";
    }else if (input1 > input2){
      num1 = input2;
      num2 = input1;
    }else{
      num1 = input1;
      num2 = input2;
    }
    
    for (let i=num1; i <= num2; i++){
      //console.log(i);
      finalSum += i;
    }
    
    //console.log("final Sum: " + finalSum);
    return finalSum;
  }
  
  //sumAll(2, 10);
  //sumAll(1, 4); //toEqual(10);
  //sumAll(1, 4000);//toEqual(8002000);
  //sumAll(123, 1);//toEqual(7626);
  //sumAll(-10, 4);//toEqual('ERROR');
  //sumAll(10, "90");//.toEqual('ERROR');
  //sumAll(10, [90, 1]);//.toEqual('ERROR');
  
  
  module.exports = sumAll