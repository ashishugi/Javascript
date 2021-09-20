// class MyClass {
//   MyClass(name) {
//     this.name = name;
//   }
//   get name() {
//     return this.name;
//   }
//   set name(name) {
//     this.name = name;
//   }
// }

// let ob = new MyClass("somenaem");
// console.log(ob.name());

class Animal {
  name = "Ashish";
  category = "Hero";
}

let ob = new Animal();
console.log(ob.name);
console.log(ob.category);

console.log(ob instanceof Animal);
