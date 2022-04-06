/** If function parameters are a subset of the parameters of another function,
 * it can be assigned to it. */

let add = (a: number, b: number, c: number): number => a + b + c;
const sum = (x: number, y: number): number => x + y;

add = sum;
