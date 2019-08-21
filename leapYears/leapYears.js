const leapYears = function(year) {
    console.log(year%400);
    
    if (year%400 == false && year%100 == false){
      console.log(year + " is divisible by 400 and 100");
      return true;
    }else if (year%4 == false){
      console.log(year + " is divisible by 4");
      return true
    }else{
      return false;
    }
  }
  
  
  //leapYears(1984);
  module.exports = leapYears