window.onload = function(){
    tester();
}

function tester(){
    describe("F - Prototype", () => {
        it("Should return true", () =>{
            assert.equal(rabbit0.eats, true)
        })
        it("Should return true", () =>{
            assert.equal(rabbit1.eats, true)
        })
        it("Should return false", () =>{
            assert.equal(rabbit2.eats, false)
        })
        it("Should return true", () =>{
            assert.equal(rabbit3.eats, true)
        })

        it("Should return undefined", () =>{
            assert.equal(rabbit4.eats, undefined)
        })

    });

    mocha.run();
}