interface IAnimal {
  name: string;
  age: number;
  feed(food: string, amount: number): void;
}

export class Cat implements IAnimal {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    (this.name = name), (this.age = age);
  }

  feed(food: string, amount: number): void {
    console.log(`Feeding ${this.name} the Cat ${amount}kg of ${food}`);
  }
}
export class Dog implements IAnimal {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    (this.name = name), (this.age = age);
  }

  feed(food: string, amount: number): void {
    console.log(`Feeding ${this.name} the Dog ${amount}kg of ${food}`);
  }
}

// const cat = new Cat("Cosmo", 8);
// const dog = new Dog("Rusty", 18);

// cat.feed("Fish", 0.1);
// dog.feed("Beef", 0.25);
