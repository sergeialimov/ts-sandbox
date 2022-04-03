class SingletonExample {

  private constructor() {
      console.log('Instance created');
  }

  private static _instance: SingletonExample | undefined;

  public prop = 'value';

  public static instance() {
      if (this._instance === undefined) {
          // no error, since the code is inside the class
          this._instance = new SingletonExample();
      }
      return this._instance;
  }

}

const singleton = SingletonExample.instance(); // no error, instance is created
console.log(singleton.prop); // value
// const oops = new SingletonExample(); // oops, constructor is private