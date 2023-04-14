function detectType (val:number | string){
    if(typeof val === "string"){
       return val.toLowerCase()
    }

    return val + 3
}

function provideID (id : string | null){
    if(!id){
        console.log("please provide ID")
        return
    }

    id.toLowerCase()
}

function printAll(strs: string | string[] | null) {
    // !!!!!!!!!!!!!!!!
    //  DON'T DO THIS!
    //   As if an empty string is provided it will give a falsy value 
    // !!!!!!!!!!!!!!!!
    if (strs) {
      if (typeof strs === "object") {
        for (const s of strs) {
          console.log(s);
        }
      } else if (typeof strs === "string") {
        console.log(strs);
      }
    }
  }


interface User {
    name : string ,
    email : string
}

interface Admin {
    name : string ,
    email : string,
    isAdmin : boolean 
}

// use of in operator for type narrowing 

function ifAdmin (account : User | Admin){
    if("isAdmin" in account){
        return account.isAdmin
        // verifies if a property is present in the  interface
    }
}

// use instance of for typenarrowing
// it checks if an object is a instance of a class or interface 

function logValue(x: Date | string) {
  if (x instanceof Date) {
    console.log(x.toUTCString());
  } else {
    console.log(x.toUpperCase());
  }
}


type Fish = {
  swim: () => void
}
type Bird = {
  fly: () => void
}

// is word in TS actually narrows the pet as fish instead of just returning a boolean getFood function cant be sure what boolean value will be there , so is helps there , how exactly i dont know will look into it 

function isFish(pet: Fish | Bird) : pet is Fish{
  return (pet as Fish).swim !== undefined;
}

function getFood(pet: Fish | Bird){
  if(isFish(pet)){
    pet
    return "fish food"
  }else{
    pet
    return "Fly food"
  }
}

// discriminated unions 

// using kind is a hacky way of narrowing where you can just use if else or switch case statements to get the type of interface you are dealing with 

interface Circle{
  kind : "circle",
  radius : number
}
interface Square{
  kind : "square"
  side : number
}
interface Rectangle {
  kind : "rectangle",
  length : number,
  width : number
}

type Shape = Circle | Square | Rectangle

function getTrueShape(shape : Shape){
  if(shape.kind === "circle"){
    return Math.PI * shape.radius ** 2
  }else if (shape.kind === "square"){
    return shape.side*shape.side
  }

  return shape.length * shape.width
}

function getArea(shape:Shape){
  switch(shape.kind){
    case "circle": return Math.PI * shape.radius ** 2
    case "square": return shape.side*shape.side
    case "rectangle" : return shape.length * shape.width

    // if you use a default method it checks if there are any cases you missed it will show a red line or error as it will try to asign a type to never , so we can know we missed something 

    default :
    const  defaultshape : never = shape
    return defaultshape
  }
}