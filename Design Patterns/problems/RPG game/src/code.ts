export class Entity{
    constructor(
        public health : number,
        public strength : number,
        public defense : number,
        public name : string
    ){

    }

    movement (){

    }
}


// Different Player Characters
export class Player extends Entity{
    constructor(
        public health : number,
        public strength : number,
        public defense : number,
        public name : string,
        public level : number = 1
    ){
        super(health,strength,defense,name);
    }
    
    attack(){

    }
}

// let p = new Player(5,5,5,"",1)

export class Swordsman extends Player{
    constructor(
        public health : number,
        public strength : number,
        public defense : number,
        public name : "Swordsman" = "Swordsman",
        public level : number = 1
    ){
        super(health,strength,defense,name);
    }
    
    attack(){

    }

    slashAttack(){

    }

}
export class Mage extends Player {
    constructor(
        public health : number,
        public strength : number,
        public defense : number,
        public name : "Mage" = "Mage",
        public level : number = 1
    ){
        super(health,strength,defense,name);
    }
    
    attack(){

    }

    magicAttack(){

    }

}

export class Spearman extends Player{
    constructor(
        public health : number,
        public strength : number,
        public defense : number,
        public name : "Spearman" = "Spearman",
        public level : number = 1
    ){
        super(health,strength,defense,name);
    }
    
    attack(){

    }

    stabAttack(){

    }
}

// All Enemies
export class Enemy   extends Entity{
    constructor(
        public health : number,
        public strength : number,
        public defense : number,
        public name : string
    ){
        super( health, strength, defense, name)
    }

    followPlayer(){

    }
}

export class Zombies  extends Enemy{

    constructor(
        public health : number,
        public strength : number,
        public defense : number,
        public name : "Zobmie" = "Zobmie"
    ){
        super( health, strength, defense, name)
    }

    poisonAttack(){

    }
}

export class Werewolf  extends Enemy{
    constructor(
        public health : number,
        public strength : number,
        public defense : number,
        public name : "Werewolf" = "Werewolf"
    ){
        super( health, strength, defense, name)
    }
    biteAttack (){

    }
    roar(){
        
    }
}
