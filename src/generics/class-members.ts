class TestClass<T> {
  // static field: T;

  usualField: T;
}

// static
// let f = <string>TestClass.field; // string
// f = 'test'; // error TS2302: Static members cannot reference class type parameters
// console.log(f);

const testClass = new TestClass<boolean>();
testClass.usualField = true;
console.log(testClass.usualField);

