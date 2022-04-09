/**
 * Creating a type that creates an object with certain keys from another type.
 * We are going to create another utility type that creates an object type with specific keys
 * from the type passed into it.
 */

// The type will take in a parameter for the object type, T, and the keys to include, K.
// The keys to include must be keys within T

// T – object type – Object
// K - keys to include – Union

// type ObjectWithKeys<T, K extends keyof T> = {
//   [ P in K ]: T[P];
// };

// This is the same type as a standard utility type called Pick.

type ObjectWithKeys<T, K extends keyof T> = {
  [P in K]: T[P];
};

const person = {
  name: 'Fred',
  age: 30,
  email: 'fred@somewhere.com',
};

type Contact = ObjectWithKeys<typeof person, 'name' | 'email'>;
