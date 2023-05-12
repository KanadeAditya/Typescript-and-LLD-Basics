"use strict";
class Hotel {
    constructor(id, name, location, type) {
        this.id = id;
        this.name = name;
        this.location = location;
        this.type = type;
        if (!id || !name || !location || !type) {
            throw new Error("Please provide correct details ");
        }
    }
}
class ThreeStar extends Hotel {
    constructor(id, name, location, type = "3Star", rooms) {
        super(id, name, location, type);
        this.id = id;
        this.name = name;
        this.location = location;
        this.type = type;
        this.rooms = rooms;
        this.Hotels = [];
        if (!id || !name || !location || !type) {
            throw new Error("Please provide correct details ");
        }
    }
    viewRooms() {
        let arr = this.rooms.filter((val, ind) => {
            if (val.isBooked === false) {
                return true;
            }
            else {
                false;
            }
        });
        return arr;
    }
    addRoom(ro) {
        if (ro.hotelType === "5Star") {
            this.rooms.push(ro);
        }
        else {
            throw new Error("This is not a 3Star hotel room");
        }
    }
}
class Resort extends Hotel {
    constructor(id, name, location, rooms, type = "Resort") {
        super(id, name, location, type);
        this.id = id;
        this.name = name;
        this.location = location;
        this.rooms = rooms;
        this.type = type;
        this.Hotels = [];
        if (!id || !name || !location || !type) {
            throw new Error("Please provide correct details ");
        }
        else {
            this.Hotels.push(this);
        }
    }
    viewRooms() {
        let arr = this.rooms.filter((val, ind) => {
            if (val.isBooked === false) {
                return true;
            }
            else {
                false;
            }
        });
        return arr;
    }
    addRoom(ro) {
        if (ro.hotelType === "5Star") {
            this.rooms.push(ro);
        }
        else {
            throw new Error("This is not a 3Star hotel room");
        }
    }
}
class FiveStar extends Hotel {
    constructor(id, name, location, type = "5Star", rooms) {
        super(id, name, location, type);
        this.id = id;
        this.name = name;
        this.location = location;
        this.type = type;
        this.rooms = rooms;
        this.Hotels = [];
        for (let i = 0; i < this.rooms.length; i++) {
            if (this.rooms[i].hasAc === false) {
                throw new Error(' All rooms of 5star hotels should have AC');
            }
        }
        if (!id || !name || !location || !type) {
            throw new Error("Please provide correct details ");
        }
        else {
            this.Hotels.push(this);
        }
    }
    viewRooms() {
        let arr = this.rooms.filter((val, ind) => {
            if (val.isBooked === false) {
                return true;
            }
            else {
                false;
            }
        });
        return arr;
    }
    addRoom(ro) {
        if (ro.hotelType === "5Star" && ro.hasAc === true) {
            this.rooms.push(ro);
        }
        else {
            throw new Error("This is not a 3Star hotel room");
        }
    }
}
class Room {
    constructor(noOfBeds, hasAc, price, hotelID, hotelType) {
        this.noOfBeds = noOfBeds;
        this.hasAc = hasAc;
        this.price = price;
        this.hotelID = hotelID;
        this.hotelType = hotelType;
    }
}
class DeluxRoom extends Room {
    constructor(id, noOfBeds, hasAc, price, hotelID, hotelType) {
        super(noOfBeds, hasAc, price, hotelID, hotelType);
        this.id = id;
        this.noOfBeds = noOfBeds;
        this.hasAc = hasAc;
        this.price = price;
        this.hotelID = hotelID;
        this.hotelType = hotelType;
        this.roomType = "Delux";
        this.Rooms = [];
        this.isBooked = false;
        this.Rooms.push(this);
    }
    book() {
        for (let val of this.Rooms) {
            if (val.isBooked === false) {
                val.isBooked = true;
                return true;
            }
        }
        return false;
    }
}
class StandardRoom extends Room {
    constructor(id, noOfBeds, hasAc, price, hotelID, hotelType) {
        super(noOfBeds, hasAc, price, hotelID, hotelType);
        this.id = id;
        this.noOfBeds = noOfBeds;
        this.hasAc = hasAc;
        this.price = price;
        this.hotelID = hotelID;
        this.hotelType = hotelType;
        this.isBooked = false;
        this.roomType = "Standard";
        this.Rooms = [];
        this.Rooms.push(this);
    }
    book() {
        for (let val of this.Rooms) {
            if (val.isBooked === false) {
                val.isBooked = true;
                return true;
            }
        }
        return false;
    }
}
class PremiumRoom extends Room {
    // public hasAc: boolean = true
    constructor(id, noOfBeds, price, hotelID, hotelType, hasAc = true) {
        super(noOfBeds, hasAc, price, hotelID, hotelType);
        this.id = id;
        this.noOfBeds = noOfBeds;
        this.price = price;
        this.hotelID = hotelID;
        this.hotelType = hotelType;
        this.hasAc = hasAc;
        this.isBooked = false;
        this.roomType = "Premium";
        this.Rooms = [];
        this.Rooms.push(this);
    }
    book() {
        for (let val of this.Rooms) {
            if (val.isBooked === false) {
                val.isBooked = true;
                return true;
            }
        }
        return false;
    }
}
// let r = new PremiumRoom(2,2,2,"as")
// let l = new PremiumRoom(2,2,2,"as")
// let f = new PremiumRoom(2,2,2,"as")
// let h = new ThreeStar(5,"grand central","MH")
// console.log(h)
