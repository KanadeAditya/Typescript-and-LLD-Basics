"use strict";
function detectType(val) {
    if (typeof val === "string") {
        return val.toLowerCase();
    }
    return val + 3;
}
function provideID(id) {
    if (!id) {
        console.log("please provide ID");
        return;
    }
    id.toLowerCase();
}
function printAll(strs) {
    // !!!!!!!!!!!!!!!!
    //  DON'T DO THIS!
    //   As if an empty string is provided it will give a falsy value 
    // !!!!!!!!!!!!!!!!
    if (strs) {
        if (typeof strs === "object") {
            for (const s of strs) {
                console.log(s);
            }
        }
        else if (typeof strs === "string") {
            console.log(strs);
        }
    }
}
// use of in operator for type narrowing 
function ifAdmin(account) {
    if ("isAdmin" in account) {
        return account.isAdmin;
        // verifies if a property is present in the  interface
    }
}
// use instance of for typenarrowing
// it checks if an object is a instance of a class or interface 
function logValue(x) {
    if (x instanceof Date) {
        console.log(x.toUTCString());
    }
    else {
        console.log(x.toUpperCase());
    }
}
// is word in TS actually narrows the pet as fish instead of just returning a boolean getFood function cant be sure what boolean value will be there , so is helps there , how exactly i dont know will look into it 
function isFish(pet) {
    return pet.swim !== undefined;
}
function getFood(pet) {
    if (isFish(pet)) {
        pet;
        return "fish food";
    }
    else {
        pet;
        return "Fly food";
    }
}
function getTrueShape(shape) {
    if (shape.kind === "circle") {
        return Math.PI * shape.radius ** 2;
    }
    else if (shape.kind === "square") {
        return shape.side * shape.side;
    }
    return shape.length * shape.width;
}
function getArea(shape) {
    switch (shape.kind) {
        case "circle": return Math.PI * shape.radius ** 2;
        case "square": return shape.side * shape.side;
        case "rectangle": return shape.length * shape.width;
        // if you use a default method it checks if there are any cases you missed it will show a red line or error as it will try to asign a type to never , so we can know we missed something 
        default:
            const defaultshape = shape;
            return defaultshape;
    }
}
