interface User {
    readonly dbID : number 
    email : string ,
    userId : number 
    googleID? : string 
    // startTrail : ()=>string
    startTrail():string
    getCoupon(couponname:string,value:number) : number
}

//extend the interface 

interface User {
    gitToken : string
}

//inheritance in interface 

interface Admin extends User{
    role : "admin" | "super admin" 
}

const adi : User = {
    dbID : 221 ,
    email: "adi@ad" ,
    gitToken:"kanadeaditya" ,
    userId : 2211,
    startTrail : ()=>{
        return "trial started"
    },
    getCoupon:(name : "adi",val : 5)=>{
        return 2
    }
}

const Adi : Admin ={
    role: "admin",
    dbID : 221 ,
    email: "adi@ad" ,
    gitToken:"kanadeaditya" ,
    userId : 2211,
    startTrail : ()=>{
        return "trial started"
    },
    getCoupon:(name : "adi",val : 5)=>{
        return 2
    }
}

interface Animal {
    name: string
  }
  
  interface Bear extends Animal {
    honey: boolean
  }
  