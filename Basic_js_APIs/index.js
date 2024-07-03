//  callbacks, map, filter, find, sort 
class Animal{
    constructor(name,legCount){
        this.name = name;
        this.legCount = legCount;
    }

    display(){
        console.log(`My name is ${this.name}`);
        console.log(`I have ${this.legCount} legs`);
    }
    static name_call(Animal){
        console.log(`My name is ${Animal.name}`);
    }
}

//  Class Objects 
const dog = new Animal(`Dog_Boss`,4);
const cat = new Animal(`Cat_Don`,4);

cat.display();
dog.display();
Animal.name_call(dog)
