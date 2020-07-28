/* 
  See prompt at: https://leetcode.com/problems/self-dividing-numbers/
*/

function sdvIdentifier(lowerInt, upperInt){
  let numberArray = [];
  let finalOutput = [];
  for (let i = lowerInt; i <= upperInt; i++){
    numberArray.push(i);
  }
  numberArray.forEach(function(j){
    if (sdvIdentifierTorF(j) === true)
    finalOutput.push(j)
  });
  return finalOutput;
}

function sdvIdentifierTorF(number){
  let numberString = number.toString();
  let numberStringArray = numberString.split("");
  let intArray = [];
  let comparisonArray = []; 
  numberStringArray.forEach(function(i){
    intArray.push(parseInt(i))
  });
  intArray.forEach(function(j){
    if (number % j === 0){
      comparisonArray.push(j);
    }
  })
  if (intArray.length === comparisonArray.length){
    return true
  } else {
    return false
  }
}


