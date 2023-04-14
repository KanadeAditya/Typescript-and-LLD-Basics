"use strict";
const score = [];
const names = [];
function identityone(val) {
    return val;
}
function identitytwo(val) {
    return val;
}
function identitythre(val) {
    return val;
}
function identityfour(val) {
    return val;
}
identityfour({ brand: "something", type: 5 });
function getSearchProds(prods) {
    return prods[2];
}
const getArrowSearchProds = (prods) => {
    return prods[2];
};
function anotherFunction(val1, val2) {
    return {
        val1,
        val2
    };
}
anotherFunction("", { connection: "data", password: "pass", username: "user" });
class Sellable {
    constructor() {
        this.cart = [];
    }
    addTocart(prod) {
        this.cart.push(prod);
    }
}
