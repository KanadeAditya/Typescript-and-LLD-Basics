let greet : string = "Hello ADI"

let mynum = 6;

// it doesent allow function of a certain datatypes if you use them on another data type ex. you cant use  toUpperCase on mynum
console.log(greet.toUpperCase());


// number

let userId = 50800.57;
userId.toFixed()
// if you asssign it to a certain datatype without tellling it ts will set the datatype of the value that you gave to that variable
// you dont always need to use (: settype) to set type 

// boolean

let isLoggedin : boolean= false;

// any

let hero 

function getHero(){
    return "thor";
}

hero = getHero()

// here the datatype of hero is set to any as ts doesent know what to set the datatype

export{}