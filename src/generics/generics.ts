// const last = <T>(arr: T[]): T => {
//   console.log('-- -- -- arr', arr);
//   return arr[arr.length - 1];
// };

// const l = last([1, 2, 3]);
export {};
// const l2 = last<string>(['1', '2', '3']);

// console.log('-- -- -- l', l);
// console.log('-- -- -- l2', l2);

const makeArr = <T, Y = number>(x: T, y: Y): [T, Y] => {
  console.log('-- -- -- x', x, y);
  return [x, y];
};

makeArr('1', 1);
makeArr<string | null, null>(null, null);

// const obj1 = {
//   fn: '1',
//   ln: '2',
// };

// const { fn } = obj1;
// console.log('-- -- -- fn', fn);

const makeFullName = <T extends { firstName: string, lastName: string }>(obj: T) => {
  console.log('-- -- -- obj', obj);
  return {
    ...obj,
    fullName: `${obj.firstName} ${obj.lastName}`,
  };
};

interface Tab<T> {
  id: string,
  position: string,
  data: T,
}

type NumberTab = Tab<number>;

type StringTab = Tab<string>;

const name = makeFullName({ another: 'bob', firstName: 'ttt', lastName: 'dkjsflkdsf' });
console.log('-- -- -- name', name);
