class Computer {
    constructor(ram, cpu, storage) {
        this.ram = ram;
        this.cpu = cpu;
        this.storage = storage;
    }

    runProgram(program) {
        console.log("running: " + program);
    }
}

class laptop extends Computer {
    constructor(ram, cpu, storage, battery) {
        super(ram, cpu, storage);
        this.battery = battery;
    }

    carryAround() {
        console.log("carrying laptop: cpu " + this.cpu +" ram: " + this.ram + " storage: " + this.storage + " battery: " + this.battery);
    }
}

var lp = new laptop("256GB", "i7", "2TB", "KJ");
lp.carryAround();

