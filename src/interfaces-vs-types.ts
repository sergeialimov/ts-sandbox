export {};

// https://learntypescript.dev/04/l7-interfaces-v-type-aliases
// Let's compare the syntax for both approaches:

// Type aliases can represent primitive types, but interfaces can't.
type Str = string;


// Representing arrays. Type aliases and interfaces can both represent arrays.
type ArrType = string[];

interface Arr {
  [index: number]: string
}


// Representing tuples. Type aliases can represent tuple types, but interfaces can't:
type TupleType = [number, boolean, string];


// Representing functions. Type aliases and interfaces can both represent functions.
type Fun = (msg: string) => void;

interface Func {
  (msg: string): void,
}


// Creating union types. Type aliases can represent union types but interfaces can't:
type Union = 'Apple' | 'Orange' | 'Banana';


/**
 * Representing objects. Type aliases have wiped the floor with interfaces so far.
 * However, the strength of interfaces is representing objects.
 */

type Obj = {
  name: string | boolean,
  age: number,
};

interface Interface2 {
  name: string,
  age: number,
}


// Composing objects
// name will be string only, not boolean
type Composed = Obj & { name: string, exrafield: number };
const testComposed: Composed = { name: 'string', age: 10, exrafield: 1 };


// Composing interfaces
interface Interface3 extends Interface2 { surname: string }

const example: Interface3 = { name: 'testName', surname: 'sur', age: 1 };


// Composing types and interfaces
type Mixed = Composed & Interface3;

interface MixedI extends Composed, Interface3 {}


// Composing Unions. Only type aliases can compose union types though:
type ComposedUnion = ('apple' | 'orange') & ('strawberry' | 'blueberry');


// Declaration merging. Authoring a library.
interface User {
  name: string
}

interface User {
  age: number
}

const MergedDeclaration: User = {
  name: 'John',
  age: 7,
};
