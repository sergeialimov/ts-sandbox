function doWorkWithFunction() {
  const result: unknown = () => console.log('fn');
  if (typeof result === 'function') { // error without check
    return result();
  }
  return undefined;
}

// doWorkWithFunction();

// without check
// error TS2349: This expression is not callable. Type '{}' has no call signatures.


function doWorkWithNumber() {
  const result: unknown = 1;
  if (typeof result === 'number') {
    return console.log(result + 0);
  }
  return undefined;
}

doWorkWithNumber();

// without check
// Operator '+' cannot be applied to types 'unknown' and '0'.
