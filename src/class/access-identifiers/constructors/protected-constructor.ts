/* eslint-disable max-classes-per-file */
/* eslint-disable no-underscore-dangle */

class SingletonExample {
  protected constructor() {
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

// const singleton = SingletonExample.instance(); // no error, instance is created
// console.log(singleton.prop);

class ExtendedSingleton extends SingletonExample {
}

const extendedSingleton = ExtendedSingleton.instance();
console.log(extendedSingleton.prop);

