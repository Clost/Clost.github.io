window.onload = function(){
    tester();
}

function tester(){
    describe("Prototype Methods", () => {
        it("Should return Rabbit, because the value of this is the Rabbit, behind the dot", () =>{
            assert.equal(rabbit.sayHi(), "Rabbit")
        })
        it("Should return undefined, because the value of this is Rabbit.prototype, behind the dot", () =>{
            assert.equal(Rabbit.prototype.sayHi(), undefined)
        })
        it("Should return undefined, because the value of this is Rabbit.prototype, behind the dot", () =>{
            assert.equal(Object.getPrototypeOf(rabbit).sayHi(), undefined)
        })
        it("Should return undefined, because the value of this is Rabbit.prototype, behind the dot", () =>{
            assert.equal(rabbit.__proto__.sayHi(), undefined)
        })

    });

    mocha.run();
}