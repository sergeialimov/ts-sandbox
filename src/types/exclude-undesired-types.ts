export {};

// https://stackoverflow.com/questions/42291811/use-of-never-keyword-in-typescript
// With never type we can exclude some undesired types:

type NonNullable<T> = T extends null | undefined ? never : T;

type A = NonNullable<boolean>;
type B = NonNullable<null | number | string>;
type C = NonNullable<undefined>;

const tmp: A = true;
const tmp2: B = undefined;
const tmp3: C = undefined;  // Type 'undefined' is not assignable to type 'never'.

console.log(tmp);
console.log(tmp2);
console.log(tmp3);
