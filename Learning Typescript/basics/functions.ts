function add2 (num:number):number{
    
    return num + 2;
    // return "hello"

}

function getUppercase(val:string){
    return val.toUpperCase()
}

function signUP(name:string,email:string,password:string, age:number , isUser:boolean){

}

let login =(email:string,password:string, isUser:boolean = false)=>{}

let myval = add2(5);

getUppercase("aditya")
signUP("aditya","adi@123","1234",25,true)
login("a@a","a123")


// function getValue (myVal: number): string | boolean{
//     if(myVal>5){
//         return true
//     }
//     return "200 OK"
// }

let getHello = (s:string):string =>{
    return "";
}

// const heroes = ["batman","ironman","deadpool"];
const heroes = [1,2,3];

heroes.map((hero):string =>{
    return `hero is ${hero}`
})

function consoleerror(errmsg : string): void{
    console.log(errmsg);
    // return 1
}
function handleerror(errmsg : string): never{
    throw new Error(errmsg);
    // return 1
    // The never type represents values which are never observed. In a return type, this means that the function throws an exception or terminates execution of the program. 
}



export{}