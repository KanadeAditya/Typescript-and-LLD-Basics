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
