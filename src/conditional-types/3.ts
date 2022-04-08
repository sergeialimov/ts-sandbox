type NullableString = string | null;

let firstName: NullableString;
firstName = null;
firstName = 'Bob';

console.log(firstName);

type RemoveNull<T> = T extends null ? never: T;

type RemovedNull = RemoveNull<NullableString>;

/**
 * Nice! We have just created a very similar type to a standard utility type called NonNullable.
 * The definition of NonNullable is below:
 */

type NoneNullable<T> = T extends null | undefined ? never : T;
