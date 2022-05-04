//finding sum
function sum(...arr)
{
    if(arr.length === 0) return 0;

    return arr.reduce(function (prevValue, elem) {
        return prevValue + elem;
    });
}


//multiplying all element of an array
function multiply(...arr){
    if(arr.length === 0) return 0;

    return arr.reduce(function (prevValue, elem) {
        return prevValue * elem;
    });
}


//reverse a string
function reverse(str)
{
    return str.split('').reduce(function (prevValue, elem) {
        return elem + prevValue;
    });
}

//filter words by a specific length
function filterLongWords(arr, len) {
    if(arr.length === 0) return 0;
    
    return arr.filter(function (elem) {
        return elem.length > len;
    });
}


