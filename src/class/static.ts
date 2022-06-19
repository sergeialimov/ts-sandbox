class TestClass {
  static method1() {
    console.log('method1');
  }

  static method2() {
    console.log('method2');
    this.method1();
  }
}

TestClass.method2();
