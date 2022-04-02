function merge<Names extends string[], Scores extends number[]>(
  names: Names,
  scores: Scores,
) {
  return [...names, ...scores];
}

const res = merge(['a', 'b'], [1, 2]);
console.log('-- ', res);
