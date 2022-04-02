function testGen<T>(name: T): T {
  return name;
}

const res = testGen<string>('john');

console.log('-- ', res);

function identity<Type>(arg: Type): Type {
  return arg;
}

let output = identity<string>("myString");
console.log('-- ', output);
