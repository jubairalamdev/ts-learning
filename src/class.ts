// oop - class >>> object

class Animal {
    name: string;
    species: string;
    sound: string;

    constructor (name:string, species: string,  sound: string) {
        this.name = name;
        this.species = species;
        this.sound = sound;
    }

    makeSound() {
        return console.log(`${this.name} is making sound: ${this.sound}`)
    }
}

const cat = new Animal ("Luna", "Kingson", "Meow")
const dog = new Animal ("Dogish", "Redstone", "Ghew Ghew")

cat.makeSound()