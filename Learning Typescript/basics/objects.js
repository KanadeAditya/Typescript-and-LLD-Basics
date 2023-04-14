"use strict";
// const user = {
//     name : "aditya",
//     email : "a@a",
//     isActive : true 
// }
Object.defineProperty(exports, "__esModule", { value: true });
// function createUser({name:string , isPaid:boolean}){
// }
// let newuser = {name : "aditya" , isPaid:false,email:"a@a"}
// createUser({name : "aditya" , isPaid:false,email:"a@a"}) // it will give an error here but not if another variable is passed which contains same content ex. newuser is same as {name : "aditya" , isPaid:false,email:"a@a"}
// createUser(newuser)
function createCourse() {
    return { name: "nxm", price: 399 };
}
// let newuser:User = {_id: "1" ,name : "aditya" , isPaid:false,email:"a@a",isActive: false}
var newuser = { _id: "1", name: "aditya", email: "a@a", isActive: false };
newuser.email = "aditya@123.com";
newuser._id = "3"; // we cant change it 
function createUser(user) {
    return user;
}
// createUser({name : "aditya" , isPaid:false,email:"a@a",isActive: false})
createUser(newuser);
