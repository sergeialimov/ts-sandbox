/* eslint-disable max-classes-per-file */
/**
 * A note about terminology: It’s important to note that in TypeScript 1.5, the nomenclature
 * has changed. “Internal modules” are now “namespaces”.
 * “External modules” are now simply “modules”, as to align with ECMAScript 2015’s terminology,
 * (namely that module X { is equivalent to the now-preferred namespace X {).
 */

namespace Validation {
  export interface StringValidator {
    isAcceptable(s: string): boolean;
  }
  const lettersRegexp = /^[A-Za-z]+$/;
  const numberRegexp = /^[0-9]+$/;  
  export class LettersOnlyValidator implements StringValidator {
    isAcceptable(s: string) {
      return lettersRegexp.test(s);
    }
  }
  export class ZipCodeValidator implements StringValidator {
    isAcceptable(s: string) {
      return s.length === 5 && numberRegexp.test(s);
    }
  }
}
// Some samples to try
const strings = ['Hello', '98052', '101'];
// Validators to use
const validators: { [s: string]: Validation.StringValidator } = {};
validators['ZIP code'] = new Validation.ZipCodeValidator();
validators['Letters only'] = new Validation.LettersOnlyValidator();
// Show whether each string passed each validator
for (const s of strings) {
  for (const name in validators) {
    console.log(
      `"${s}" - ${
        validators[name].isAcceptable(s) ? 'matches' : 'does not match'
      } ${name}`,
    );
  }
}
