// interface Name {
//   first: string;
//   second: string;
// }
// var name_object: Name;
// name_object = {
//   first: "John",
//   second: "Doe",
// };
// name_object = {
//   // Error:'second is missing
//   first: "John",
// };
// name_object = {
//   // Error:'second'is the wrong type
//   first: "John",
//   second: 1337,
// };
// enum Direction {
//   NORTH = "North",
//   EAST = "East",
//   SOUTH = "South",
//   WEST = "West",
// }
// function move(direction: Direction) {
//   console.log(`Moving towards${direction}`);
// }
// // OK
// move(Direction.EAST);
// // Error
// move(Direction.SomeDirection);

// type Str0rNum=string|number;
// // Usage:just like any other notation
// var sample:Str0rNum;
// sample=123;
// sample="123";
// sample=true;// Error!

// const sum = (a: number, b: number) => a * b;
// console.log(sum(1, 2));

const multiply = (a: number, b: number) => {
  return a * b;
};
let resulMultiply = multiply(4, 5);
console.log(resulMultiply);

// const users = [
//   { type: "admin", name: "Max Mustermann", age: 25 },
//   { type: "user", name: "Kate Müller", age: 23 },
//   { type: "user", name: "Moses", age: 70 },
//   { type: "user", name: "Superman", age: 28 },
//   { type: "user", name: "Inspector Gadget", age: 31 },
// ];

// function logUser(user) {
//   if (!user) {
//     console.log(" - none");
//     return;
//   }
//   console.log(`User: ${user.name}, ${user.age}`);
// }

// logUser(users[0]);

interface UserType {
  type: string;
  name: string;
  age: number;
}

const user: UserType[] = [
  { type: "admin", name: "Max Mustermann", age: 25 },
  { type: "admin", name: "Kate Müller", age: 23 },
  { type: "user", name: "Moses", age: 70 },
  { type: "user", name: "Superman", age: 28 },
  { type: "user", name: "Inspector Gadget", age: 31 },
];

function logUser(Name) {
  if (!Name) {
    console.log(" - none");
    return;
  }
  console.log(`User: ${Name.name}, ${Name.age}`);
}

logUser(Name[0]);
