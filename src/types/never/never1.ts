// "the never type represents the type of values that never occur."

const reportError = function (): never {
  throw Error('my err');
};

const loop = function (): never {
  while (true) {};
};
