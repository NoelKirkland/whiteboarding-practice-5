/* 
  See prompt at: https://leetcode.com/problems/self-dividing-numbers/
*/

function sdvIdentifier(lowerInt, upperInt){
  let numberArray = [];
  let finalOutput = [];
  for (let i = lowerInt; i <= upperInt; i++){
    numberArray.push(i);
  }
  let temporaryArray = [];
  let temporaryComparisonArray = [];
  temporaryArray.push(testNumber.split(""))
  temporaryArray.forEach(function(j){
    if (testNumber % j === 0){
      temporaryComparisonArray.push(j);
    }
  })
    if (temporaryArray.length === temporaryComparisonArray.length){
      finalOutput.push(testNumber);
    }
  return finalOutput;
}



