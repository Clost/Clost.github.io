
//testing the function
function testFunction(expected, get) {
    if (expected == get()) return 'TEST SUCCEEDED';
    else return 'TEST FAILED. Expected ' + expected + ' found ' + get();
}

//finding the max value
function max(a, b) 
{
    if (a > b) return a;
    else return b;
}

//findind the max of Three
function maxOfThree(a,b,c)
{
  let max=a;
  if (a>=b && a>=c) max=a;
  else if (b>=a && b>=c) max=b;
  else max=c;

  return max;
}

//Is a vowel or not?
function isVowel(char)
{
    if (char.length == 1) {
    return /[aeiou]/.test(char);
  }
}

//testing all the functions above
document.getElementById("max").innerHTML = "Expected output of max(20,10) is 20 and  " + testFunction(20, function () {
    return max(20, 10);
});

console.log("Expected output of max(20,10) is 20 and  " + testFunction(20, function () {
    return max(20, 10);
}));

document.getElementById("maxOfThree").innerHTML = "Expected output of maxOfThree(20,10,5) is 20 and  " + testFunction(10, function () {
    return maxOfThree(20, 10,5);
});

console.log("Expected output of maxOfThree(20,10) is 20 and  " + testFunction(10, function () {
    return maxOfThree(20, 10,5);
}));

document.getElementById("isVowel").innerHTML = "Expected output of isVowel('a') is true and  " + testFunction(true, function () {
    return isVowel('a');
});

console.log("Expected output of isVowel('a') is true and  " + testFunction(true, function () {
    return isVowel('a');
}));

