
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

//finding sum
function sum(arr)
{
  let totalSum=0;

  for(var i=0; i<arr.length; i++)
   { totalSum+=arr[i];}
 
   return totalSum;

}

//multiplying all element of an array
function multiply(arr){
    let total=0;
    for(var i=0; i<arr.length; i++)
    {
       total*=arr[i];
    }

    return total;
}

//reverse a string
function reverse(str)
{
    return str.split("").reverse().join("");
}

//finding the longest word
function findLongestWord(arr)
{
 var longestWord = 0;
  for(var i = 0; i < arr.length; i++){
    if(arr[i].length > longestWord){
	longestWord = arr[i].length;
     }
  }
  return longestWord;
}

//filter words by a specific length
function filterLongWords(arr, i) {
    var newArray = [];
    arr.forEach(function (element) {
        if( element.length > i ) { newArray.push(element)};
    });
    return newArray;
}

//using map to change all element of an array
function map(a) {

    return a.map(function (elem, i, array) {
        return elem * 10;
    });

}

//using filter to filter through an array
function filter(a) {
    return a.filter(function (elem, i, array) {
        return elem == 3;
    });
}

//using reduce to add all element of an array
function reduce(a) {
    return a.reduce(function (prevValue, elem, i, array) {
        return prevValue + elem;
    });
}
//testing all the functions above

console.log("Expected output of max(20,10) is 20 and  " + testFunction(20, function () {
    return max(20, 10);
}));


console.log("Expected output of maxOfThree(20,10) is 20 and  " + testFunction(10, function () {
    return maxOfThree(20, 10,5);
}));


console.log("Expected output of isVowel('a') is true and  " + testFunction(true, function () {
    return isVowel('a');
}));

console.log("Expected output of sum([1,2,3,4]) is 10 and  " + testFunction(10, function () {
    return sum([1, 2, 3, 4]);
}));

console.log("Expected output of multiply([1,2,3,4]) is 24 and  " + testFunction(24, function () {
    return multiply([1, 2, 3, 4]);
}));

console.log("Expected output of reverse('jag testar') is ratset gaj and " +testFunction('ratset gaj', function(){
    return reverse('jag testar');
}));

console.log("Expected output of findLongestWord(['testar', 'Hello', 'Hi']) is 6 and " +testFunction(6, function(){
    return findLongestWord(['testar', 'Hello', 'Hi']);
}));

console.log("Expected output of filterLongWords(['as','bcde','uhher'],3) is 'bcde','uhher'and  " + testFunction(['as','uhher'], function () {
    return filterLongWords(['as', 'bcde', 'uhher'], 3);
}));

console.log("Expected output of map([1,3,5,3,3]) is 10,30,50,30,30 and  " + testFunction([10, 30, 50, 30, 30], function () {
    return map([1, 3, 5, 3, 3]);
}));

console.log("Expected output of filter([1,3,5,3,3]) is 3,3,3 and  " + testFunction([3, 3, 3], function () {
    return filter([1, 3, 5, 3, 3]);
}));

console.log("Expected output of reduce([1,3,5,3,3]) is and 15 " + testFunction(15, function () {
    return reduce([1, 3, 5, 3, 3]);
}));