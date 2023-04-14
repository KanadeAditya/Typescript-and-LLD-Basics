// const user = {
//     name : "aditya",
//     email : "a@a",
//     isActive : true 
// }

// function createUser({name:string , isPaid:boolean}){

// }

// let newuser = {name : "aditya" , isPaid:false,email:"a@a"}

// createUser({name : "aditya" , isPaid:false,email:"a@a"}) // it will give an error here but not if another variable is passed which contains same content ex. newuser is same as {name : "aditya" , isPaid:false,email:"a@a"}

// createUser(newuser)

function createCourse():{name:string , price:number}{
    return {name: "nxm" , price : 399}
}


// type alliases 

type User = {
    readonly _id:String // it is used so you cant change it further 
    name : string;
    email : string ;
    isActive : boolean;
    creditcarddetails? : number // ? is to make this field optional
}

// let newuser:User = {_id: "1" ,name : "aditya" , isPaid:false,email:"a@a",isActive: false}
let newuser:User = {_id: "1" ,name : "aditya",email:"a@a",isActive: false}

newuser.email="aditya@123.com"
// newuser._id="3"// we cant change it 

function createUser(user: User):User{
    return user
}

// createUser({name : "aditya" , isPaid:false,email:"a@a",isActive: false})
createUser(newuser)


type cardNumber = {
    cardnumber : string
}

type cardDate = {
    expirydate : string 
}

type cardDetails = cardNumber & cardDate & {
    cvv : number
}



export{}