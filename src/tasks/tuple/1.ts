// What is the inferred type of scores?

function merge(names: string[], scores: number[]): (string | number)[] {
  return [...names, ...scores];
}

const scores = merge(['Bill', 'Jane'], [8, 9]);

const tp = typeof scores;
// console.log('-- ', scores);
console.log('-- ', tp);
