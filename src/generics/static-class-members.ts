class TestClass<T> {
  static field: T;
}

const f = <string>TestClass.field; // string
const f2 = <boolean>TestClass.field; // boolean
