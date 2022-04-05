/**
 * The parameters of a common function member of an intersection type are
 * mathematically intersected.
 */


type BaseElement = {
  name: string;
  kind: 'text' | 'number' | 'email';
};
type TextInput = {
  kind: 'text';
};
type Field = BaseElement & TextInput;

const age: Field = {
  name: 'Age',
  kind: 'number',
};

console.log(age);
