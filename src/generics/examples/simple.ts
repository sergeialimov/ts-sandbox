function testGen<T>(name: T): T {
  return name;
}

// const res = testGen<string>('john');
const res = testGen('john'); // works too

console.log('-- ', res);

function identity<Type>(arg: Type): Type {
  return arg;
}

const output = identity<string>('myString');
console.log('-- ', output);
