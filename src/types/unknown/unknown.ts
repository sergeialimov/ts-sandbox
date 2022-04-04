function fun1(str: string) {
  console.log(str);
}

function fun2(param: unknown) {
  if (typeof param === 'function') { // the check is cruitial
    param('smth');
  }
}

fun2(fun1);

// without check
// error TS2349: This expression is not callable. Type '{}' has no call signatures.
