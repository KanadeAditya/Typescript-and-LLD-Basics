const heros: string []  = []; // always use this type of syntax or ts gives datatype never to the array and you cant push any values to it
const heros_strength: Array<number>  = []; //this is another syntax you can use 

// you can also create an array of custom types 

type User ={
    name : string,
    isActive : boolean,
    email?: string
}

// const allusers: Array<User> = [] 
const allusers: User[] = [] 

heros.push("spiderman")
heros_strength.push(2)

allusers.push({name:"adi",isActive:true})
