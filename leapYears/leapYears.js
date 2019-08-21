const leapYears = function(year) {
    console.log(year%400);
    
    if (year%400 == false && year%100 == false && year&4 == false){
      console.log(year + " is a leap year");
      return true;
    }else{
      return false;
    }
  }
  
  
  //leapYears(700);
  module.exports = leapYears