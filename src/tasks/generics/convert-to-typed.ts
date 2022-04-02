export {};

// How can we make this strongly-typed?
// function countDisinct(itemToCount, array) {
//   return array.filter(item => item === itemToCount).length
// }

function countDisinct<T>(itemToCount: T, array: T[]): number {
  return array.filter((item) => item === itemToCount).length;
}
