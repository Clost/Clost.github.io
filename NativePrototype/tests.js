window.onload = function(){
    tester();
}

function tester(){
    describe("Native Prototypes", () => {
        it("Should return Hello, ", () =>{
            assert.equal(f.defer(1000), "Hello!")
        })
    
        it("Should return 3 in 1 second ", () =>{
            assert.equal(f2.defer(1000(1,2)), 3)
        })
    });

    mocha.run();
}