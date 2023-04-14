"use strict";
// console.log("TYPESCRIPT IS HERE");
// console.log("hiiiiiiiiiiiiiiiiii")
// class User{
//     public email: string
//     private name : string 
//     readonly city:string = "Mumbai"
//     constructor  (email : string , name : string){
//         this.email = email; 
//         this.name = name ;
//     }
// }
class User {
    constructor(email, name, userid) {
        this.email = email;
        this.name = name;
        this.userid = userid;
        this._coursecount = 1;
        this.city = "Mumbai";
        this.email = email;
        this.name = name;
    }
    deleteToken() {
        console.log("tokendeleted");
    }
    get getAppleemail() {
        return `apple ${this.email}`;
    }
    get cousecount() {
        return this._coursecount;
    }
    set cousecount(coursenum) {
        if (coursenum <= 1) {
            throw new Error("Course count should be more than 1");
        }
        this._coursecount = coursenum;
    }
}
// class inheritance 
class SubUser extends User {
    constructor() {
        super(...arguments);
        // extends cannot acquire the properties of private 
        // instead if we use "protected" it can be used in same class as well as the inherited class 
        this.isFamily = true;
    }
    changeCourseCount() {
        this._coursecount = 5;
    }
}
const aditya = new User("a@a", "aditya");
// aditya.city = "delhi"
console.log(aditya);
