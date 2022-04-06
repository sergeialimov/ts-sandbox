interface Test <T> {
  field: T;
}

const test: Test<boolean> = { field: true };

console.log(test);
