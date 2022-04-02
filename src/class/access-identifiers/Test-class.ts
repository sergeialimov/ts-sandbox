export default class TestClass {
  constructor(private name = 'defaultName') {
    this.name = name;
  }

  fullname = `${this.name}`;

  protected protectedField = 10;

  static staticField = 'st';
}


const testClass = new TestClass('testName');

// console.log(testClass.fullname);
console.log(TestClass.staticField);
// console.log(testClass.name); // Error
// console.log(testClass.protectedField); // Error

