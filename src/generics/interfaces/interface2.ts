// https://www.typescriptlang.org/docs/handbook/2/generics.html

function identity<T>(arg: T): T {
  return arg;
}

const myIdentity: <T>(arg: T) => T = identity;

const res = myIdentity<string>('test');

console.log(res);
