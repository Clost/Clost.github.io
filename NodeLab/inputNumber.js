//Exercice 2

const { read } = require('fs');

const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
});

let sum = 0;
const getNumber = function(){
    readline.question("please enter a number or type stop if you want to stop: ", number => {
        if(number !== 'stop'){
            sum += parseInt(number);
            getNumber();
        }
        else{
            console.log(`The sum of the numbers you entered: ${sum}`);
            readline.close()
        }
    })

    return sum;
}
getNumber();
