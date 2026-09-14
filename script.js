// let obj = {
//     a:1,
//     b:"harry"
// }

// console.log(obj)

// let animal = {
//     eats: true
// };

// let rabbit = {
//     jumps:true
// };

// rabbit.__proto__ = animal;

class Animal {
    constructor(name){
        this.name = name
        console.log("object is created...")
    }

    eats(){
        console.log("kha raha hu")
    }

    jumps(){
        console.log("kood raha hu")
    }
}

class lion extends Animal {
     constructor(name){
        super(name)
        console.log("object is and he is a lion...")
    }
       eats(){
        super.eats()
        console.log("kha raha hu roar")
    }
}

let a = new Animal("bunny");
console.log(a)

let l = new lion ("shera")
console.log(l)