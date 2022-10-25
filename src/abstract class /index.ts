abstract class Animal {
  abstract name: string;
  age: number;
  constructor(age: number) {
    this.age = age;
  }
}

class Cat extends Animal {
  name: string;
  constructor(name: string, age: number) {
    super(age);
    this.name = name;
  }
}
class Dog extends Animal {
  name: string;
  constructor(name: string, age: number) {
    super(age);
    this.name = name;
  }
}
