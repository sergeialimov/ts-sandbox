// https://stackoverflow.com/questions/51134172/what-is-the-usage-of-private-and-protected-constructors-in-typescript

/* eslint-disable no-underscore-dangle */
class SingletonExample {
  private constructor() {
    console.log('Instance created');
  }

  private static _instance: SingletonExample | undefined;

  public prop = 'value';

  public static instance() {
    if (this._instance === undefined) {
      this._instance = new SingletonExample();
    }
    return this._instance;
  }
}

const singleton = SingletonExample.instance(); // no error, instance is created
console.log(singleton.prop);
// const oops = new SingletonExample(); // oops, constructor is private

