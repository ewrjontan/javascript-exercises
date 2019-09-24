const ftoc = function(input) {
  let converted = ((input-32) * (5/9));
  let output = Math.round(converted * 10 ) / 10;
  console.log(output);
  return output;
}

const ctof = function(input) {
  let converted = ((input * (9/5)) + 32);
  let output = Math.round(converted * 10 ) / 10;
  console.log(output);
  return output;  
}


module.exports = {
  ftoc,
  ctof
}