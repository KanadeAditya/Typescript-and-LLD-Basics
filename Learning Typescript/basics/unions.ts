let score:number | string = 33 // "|" this allows both the data types 

score = 44

score = "asasasa" 

type User = {
    name : String ,
    id : number
}

type Admin = {
    adminname :string,
    id:number 
}

let newaccount : User | Admin  = {name : "adi" , id: 333}

newaccount = {adminname : "adi" , id: 342}

function getDbId (id : number | string ): void{
    if(typeof id === "string"){
        id.toLowerCase()
    }
    console.log(`DB id is ${id}`);
}

getDbId(3)
getDbId("3")


// arrays 

const data1 : number [] = [1,2,3,4]
const data2 : string [] = ["1","2","3","4"]
const data4 : (string | number) [] = [1,2,3,"four"]

let pi:3.14 = 3.14 // you can strictly set value of a variable 

// some scenario where this strct values are usefull

let seatAllotment : "women" | "children" | "senior citizen"

// seatAllotment = "men" // this will not be allowed
seatAllotment = "women"

export {}