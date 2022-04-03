/* eslint-disable max-classes-per-file */
/* eslint-disable no-underscore-dangle */

// https://stackoverflow.com/questions/51134172/what-is-the-usage-of-private-and-protected-constructors-in-typescript

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

// class ExtendedSingleton extends SingletonExample { // error because of private parent constructor
// }
