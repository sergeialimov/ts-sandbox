/* eslint-disable @typescript-eslint/no-unused-vars */

type Contact = {
  name: string,
  email: string,
  age: number,
};

/**
 * T[K] gets the corresponding type from the type being mapped from.
 * It is called a lookup type or sometimes an indexed access type.
 */
type RequiredProperties<T> = {
  [K in keyof T]-? : T[K]
};

const bob: RequiredProperties<Contact> = {
  name: 'Bob',
  email: 'bob@somewhere.com',
  age: 30,
};

console.log(bob);


/**
 * Neat! We have actually just created a type
 * that already exists as a standard utility type called Required.
 * The definition of Required is below:
 */

type Required<T> = {
  [K in keyof T]-?: T[K]
};
