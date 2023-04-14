"use strict";
class TakePhoto {
    constructor(cameraMode, filter) {
        this.cameraMode = cameraMode;
        this.filter = filter;
    }
    getReelTime() {
        //some calculations 
        // if you dont provide the abstract key word itll still be usable in your inherited class and also you can change the function getReelTime() as well 
        return 8;
    }
}
// const newPhoto = new TakePhoto("test","test") //abstact class cant produce a new object 
class Instagram extends TakePhoto {
    // abstract classes cant create objects , theyare like bluprints for classes which are inheritting it 
    constructor(cameraMode, filter, burst) {
        super(cameraMode, filter);
        this.cameraMode = cameraMode;
        this.filter = filter;
        this.burst = burst;
    }
    getSepia() {
        console.log("Sepia ....");
    }
}
const newPhoto = new Instagram("test", "test", 5);
console.log(newPhoto.getReelTime());
