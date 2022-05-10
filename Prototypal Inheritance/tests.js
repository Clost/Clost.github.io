window.onload = function(){
    tester();
}

function tester(){
    describe("Prototypal Inheritance Exercises", () => {
        it("Should return true, value in rabbit", () =>{
            assert.equal(rabbit.jumps, true)
        })
        it("Searching algorithm - Should return 3, because of prototypical chaining", () =>{
            assert.equal(pockets.pen, 3)
        })
        it("Searching algorithm - Should return 1, because of prototypical chaining", () =>{
            assert.equal(bed.glasses, 1)
        })

        it("Where does it write - The this refers to the object behind the dot, so rabbit wil be used", () =>{
            assert.equal(rabbit2.full, true)
        })
        it("Where does it write - The this refers to the object behind the dot, so rabbit wil be used, and animal's full attribute will be undefined", () =>{
            assert.equal(animal2.full, undefined)
        })

        it("Why are both hamsters full - Each hamster object should have its own stomach property, speedy hamster should have apple in its stomach", () =>{
            assert.equal(arrToString(speedy.stomach), "apple")
        })
        it("Why are both hamsters full - Each hamster object should have its own stomach property lazy hamster should not have apple in its stomach", () =>{
            assert.equal(arrToString(lazy.stomach), "")
        })


    });

    mocha.run();
}

function arrToString(arr){
    let i = 0; 
    let res  = "";
    if(arr.length > 0){
        for(; i < arr.length -1; i++){
            res += arr[i]+end;
        }
        res += arr[i];
    }
    return res.trim();
}