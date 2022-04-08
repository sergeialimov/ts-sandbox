export {};

const person = {
  name: 'Fred',
  age: 30,
  email: 'fred@somewhere.com',
};

console.log(person);

type Union = keyof typeof person;

type RemoveFromUnion<T, K> = T extends K ? never : T;

type Cleaned = RemoveFromUnion<Union, 'age'>;
