class Duck {

    constructor(flying=false, quacking=false, xPos=0, yPos=0){

        this.flying = flying;

        this.quacking =quacking;

        this.xPos = xPos;

        this.yPos = yPos;

    }

   takeOff(){

        this.flying = true;
   }

   land() {

       this.flying = false;

   }

   startQuacking(){

       this.quacking = true;

   }

   stopQuacking(){

       this.quacking = false;

   }



    moveTo(x, y) {

        this.xPos = x;

        this.yPos = y;

        let flyingStatus = this.flying ? "flying" : "swimming";

        let quackState = this.quacking ? " while quacking" : "";

        console.log(`Duck is ${flyingStatus} to ${this.xPos}, ${this.yPos}${quackState}`)

    }

}



module.exports = Duck;