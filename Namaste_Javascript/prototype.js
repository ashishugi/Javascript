const animal = {
  eats: true,
};
const rabit = {
  jumps: true,
};
console.log(animal, " and ", rabit);
animal.__proto__ = rabit;

console.log(animal.jumps, " ", rabit);
