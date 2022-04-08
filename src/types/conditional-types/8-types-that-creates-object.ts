/**
 * Creating a type that creates an object with certain keys from another type.
 * We are going to create another utility type that creates an object type with specific keys
 * from the type passed into it.
 */


// The type will take in a parameter for the object type, T, and the keys to include, K.
// The keys to include must be keys within T

// T – object type – Object
// K - keys to include – Union

// What type should those keys have? Let's assign any, as it's not specified

// K extends keyof T – what does this mean

// Try to release it
type Creator<T, K extends keyof T> = in K { T[K]: any };

type Initial = {
  name: string,
  age: number,
};

type Keys = keyof Initial;


type NewType = Creator<{}, Keys>;
