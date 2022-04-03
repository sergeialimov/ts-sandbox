import TestClass from './Test-class';

class DerivedTestClass extends TestClass {
  showProtectedField = () => this.protectedField;
}

const derivedTestClass = new DerivedTestClass('derived name');

console.log(derivedTestClass.fullname);
// console.log(derivedTestClass.showProtectedField());
