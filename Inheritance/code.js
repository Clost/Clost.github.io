//Exercice 1
//Using String Object to make filter
String.prototype.filter = function(arr){
    let str;
    for(let i=0; i<arr.length; i++){
        str= this.replace(arr[i], "");
    }
    return str;
};

console.log("This house is not nice!".filter(['not']));
/************************************************************************************************************ */

//Exercice 2
//Using Array Object to make bubbleSort
Array.prototype.bubbleSort = function(){
    let arr= this;
    let len= arr.length;
    for(let i=0; i<len; i++){
        for(let j=0; j<len; j++){
            if(arr[j]>arr[j+ 1]){
                let temp=arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1]= temp;
            }
        }
    }
    return arr;
}

console.log([6,4,0,3,-2,1].bubbleSort());
/************************************************************************************************************ */

//Exercice 3

var Person = function() {};

Person.prototype.initialize = function(name, age)
{
    this.name = name;
    this.age = age;
}

Person.prototype.describe = function()
{
    return this.name + ", " + this.age + " years old.";
}

var Student = function() {};
Student.prototype = new Person();

Student.prototype.learn = function(subject)
{
    console.log(this.name + " just learned " + subject);
}

var me = new Student();

me.initialize("John", 25);
me.learn("Inheritance");

var Teacher = function(){};
 Teacher.prototype= new  Person();

 Teacher.prototype.teach = function(subject)
 {
     console.log(this.name + " is now teaching "+ subject);
 }

 var tc= new Teacher();
 tc.initialize("Mohammed", 30);
 tc.teach("WAP");