export {};

// function logName(object: any) {
//   console.log("My name is " + object.name);
// }

interface Tp {
  name: string,
}

function logName<T extends Tp>(object: T) {
  console.log(`My name is ${object.name}`);
}

logName({ name: 'sting', age: 10 });
