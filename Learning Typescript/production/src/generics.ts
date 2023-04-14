const score : Array<number> = []
const names  : Array<string> = []

function identityone (val : number | boolean): number | boolean {
    return val;
}

function identitytwo (val :any):any {
    return val;
}
function identitythre<Type>(val :Type):Type {
    return val;
}

function identityfour <Mytype>(val : Mytype):Mytype{
    return val
}

interface Mytype {
    brand : string,
    type : number
}

identityfour<Mytype>({brand:"something",type:5 })

function getSearchProds<T>(prods : T[]): T{
    return prods[2]
}
const getArrowSearchProds = <T>(prods : T[]): T =>{
    return prods[2]
}

interface Database {
    connection : string,
    username:string,
    password : string
}

function  anotherFunction <T,U extends Database>(val1 :T,val2:U): object {
        return {
            val1,
            val2
        }
}

anotherFunction("",{connection:"data",password:"pass",username:"user"})

interface Quiz {
    name : string,
    type  : string
}

interface Course {
    name : string,
    author : string,
    subject : string
}

class Sellable <T>{
    public cart : T []=[]

    addTocart(prod:T){
        this.cart.push(prod)
    }
}