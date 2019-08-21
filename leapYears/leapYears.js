const leapYears = function(year) {
    //console.log(year%400);
    
    if (year%4 == false){
      if (year%400 == false && year%100 == false){
        console.log(year + " is divisible by 4 and is a leap year");
        return true;  
      }else if (year%100 == false){
        console.log(year + " is a century year but not a leap year");
        return false
      }
      
      console.log(year + " is divisible by 4 and is a leap year");
      return true;
    }else{
      console.log(year + " is not a leap year");
      return false;
    }
  }
  
  module.exports = leapYears
  
  //leapYears(1996);//true
  //leapYears(1997);//toEqual(false);
  //leapYears(34992);//toEqual(true);
  //leapYears(1900);//toEqual(false);
  //leapYears(1600);//toEqual(true);
  //leapYears(700);//toEqual(false);