type hotels =  "3Star" | "5Star" | "Resort" 

class Users {
    constructor(
        public id : number,
        public name : string,
        protected email : string,
        protected password : string ,//we can add hashing in this contructor but I havent added it here 
        protected role : "Admin" | "Customer"
    ){

    }
}



class Admin extends Users{
    constructor(
        public id : number,
        public name : string,
        protected email : string,
        protected password : string ,//we can add hashing in this contructor but I havent added it here 
        protected role : "Admin" = "Admin"
    ){
            super(id,name,email,password,role)
    }

    
}

class Customer extends Users {
    constructor(
        public id : number,
        public name : string,
        protected email : string,
        protected password : string ,//we can add hashing in this contructor but I havent added it here 
        protected role : "Customer" = "Customer"
    ){
        super(id,name,email,password,role)
    }

    // isCustomer(iid : number){

    // }
}

abstract class Hotel {
    
    constructor(
        protected id : number ,
        public name : string,
        public location : string,
        protected type : hotels
    ){
        if(!id || !name || !location || !type){
            throw new Error("Please provide correct details ")
        }
    }
}

type rooms = "Standard" | "Delux" | "Premium"

class ThreeStar extends Hotel{
    private Hotels : Hotel [] = [];
    constructor(
        protected id : number ,
        public name : string,
        public location : string,
        protected type : "3Star" = "3Star",
        public  rooms : Array <PremiumRoom | DeluxRoom | StandardRoom> 
    ){
        super(id,  name, location,type)
        if(!id || !name || !location || !type){
            throw new Error("Please provide correct details ")
        }
    }

    viewRooms(us:Customer):Array<PremiumRoom|DeluxRoom|StandardRoom>{
        
        let arr = this.rooms.filter((val,ind)=>{
            if(val.isBooked === false){
                return true
            }else{
                false
            }
        })

        return arr
    }
    addRoom(ro : PremiumRoom|DeluxRoom|StandardRoom,us:Admin):void{
        if(ro.hotelType === "3Star"){
            this.rooms.push(ro)
            
        }else{
            throw new Error("This is not a 3Star hotel room")
        }
    }

}




class Resort extends Hotel{
    private Hotels : Hotel [] = [];
    constructor(
        protected id : number ,
        public name : string,
        public location : string,
        public  rooms : Array <PremiumRoom | DeluxRoom | StandardRoom> ,
        protected type : "Resort" = "Resort"
    ){
        super(id,  name, location,type)
        if(!id || !name || !location || !type){
            throw new Error("Please provide correct details ")
        }else{
            this.Hotels.push(this)
        }
    }

    viewRooms(us:Customer):Array<PremiumRoom|DeluxRoom|StandardRoom>{
        let arr = this.rooms.filter((val,ind)=>{
            if(val.isBooked === false){
                return true
            }else{
                false
            }
        })

        return arr
    }
    addRoom(ro : PremiumRoom|DeluxRoom|StandardRoom,us:Admin):void{
        if(ro.hotelType === "Resort"){
            this.rooms.push(ro)
            
        }else{
            throw new Error("This is not a Resort hotel room")
        }
    }

}

class FiveStar extends Hotel{
    private Hotels : Hotel [] = [];
    constructor(
        protected id : number ,
        public name : string,
        public location : string,
        protected type : "5Star" = "5Star",
        public  rooms : Array <PremiumRoom | DeluxRoom | StandardRoom> 
    ){
        super(id,  name, location,type)

        for(let i = 0 ; i<this.rooms.length ; i++){
            if(this.rooms[i].hasAc === false){
                throw new Error( ' All rooms of 5star hotels should have AC')
            }
        }
        if(!id || !name || !location || !type){
            throw new Error("Please provide correct details ")
        }else{
            this.Hotels.push(this)
        }
    }

    viewRooms(us:Customer):Array<PremiumRoom|DeluxRoom|StandardRoom>{
        let arr = this.rooms.filter((val,ind)=>{
            if(val.isBooked === false){
                return true
            }else{
                false
            }
        })

        return arr
    }

    addRoom(ro : PremiumRoom|DeluxRoom|StandardRoom,us:Admin):void{
        if(ro.hotelType === "5Star" && ro.hasAc===true){
            this.rooms.push(ro)
            
        }else{
            throw new Error("This is not a 5Star hotel room")
        }
    }

}

abstract class Room {
    constructor (
        public noOfBeds : number, 
        public hasAc: boolean,
        public price : number,
        public hotelID : number,
        public hotelType : hotels
    ){

    }

}

class DeluxRoom extends Room{
    public roomType : "Delux" = "Delux"
    private Rooms : DeluxRoom [] = []
    public isBooked : boolean = false
    constructor (
        public id : number ,
        public noOfBeds : number, 
        public hasAc: boolean,
        public price : number,
        public hotelID : number,
        public hotelType : hotels
    ){
        super(noOfBeds,
            hasAc,
            price,
            hotelID,
            hotelType)

            this.Rooms.push(this)
    }

    book(us:Customer){
        for(let val of this.Rooms){
            if(val.isBooked === false){
                val.isBooked = true
                return true
            }
        }

        return false
    }
}
class StandardRoom extends Room{
    public isBooked : boolean = false
    public roomType : "Standard" = "Standard"
    private Rooms : StandardRoom [] = []
    constructor (
        public id : number ,
        public noOfBeds : number, 
        public hasAc: boolean,
        public price : number,
        public hotelID : number,
        public hotelType : hotels
    ){
        super(noOfBeds,
            hasAc,
            price,
            hotelID,
            hotelType)

            this.Rooms.push(this)
    }

    book(us:Customer){
        for(let val of this.Rooms){
            if(val.isBooked === false){
                val.isBooked = true
                return true
            }
        }

        return false
    }
}
class PremiumRoom extends Room{
    public isBooked : boolean = false
    public roomType : "Premium" = "Premium"
    private Rooms : PremiumRoom [] = []
    // public hasAc: boolean = true
    constructor (
        public id : number ,
        public noOfBeds : number, 
        public price : number,
        public hotelID : number,
        public hotelType : hotels,
        public hasAc : true = true,
    ){
        super(noOfBeds,
            hasAc,
            price,
            hotelID,
            hotelType)

            this.Rooms.push(this)
    }
    
    book(us:Customer){
        for(let val of this.Rooms){
            if(val.isBooked === false){
                val.isBooked = true
                return true
            }
        }

        return false
    }
   
}

// let r = new PremiumRoom(2,2,2,"as")
// let l = new PremiumRoom(2,2,2,"as")
// let f = new PremiumRoom(2,2,2,"as")





// let h = new ThreeStar(5,"grand central","MH")
// console.log(h)