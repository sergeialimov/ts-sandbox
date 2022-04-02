function merge<Names extends string[], Scores extends number[]>(
  names: [...Names],
  scores: [...Scores],
): ['a', 'b', 1, 2] {
  // return ['a', 'b', 1, 2];
  return [...names, ...scores];
}

const res = merge(['a', 'b'], [1, 2]);
console.log(res);
