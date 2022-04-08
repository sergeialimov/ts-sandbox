export {};

function addPerson(personName: string) {
  return {
    type: 'AddPerson',
    payload: personName,
  };
}

function removePerson(id: number) {
  return {
    type: 'RemovePerson',
    payload: id,
  };
}

type AddPersonType = typeof addPerson;
type RemovePersonType = typeof removePerson;

/**
 * We will create a utility type called FunctionReturnType that will give the return type of a
 * function. We will eventually create a union type consisting of the return types of the two
 * functions using FunctionReturnType.
 */
type FunctionReturnType<T extends (...args: any) => any> =
  T extends (...args: any) => infer R ? R : T;

const person = { name: 'Fred' };
// type PersonType = FunctionReturnType<typeof person>; // error
type PersonType = FunctionReturnType<AddPersonType>; // error


// We have actually just created a type that already exists as a standard utility type
// called ReturnType. The definition of ReturnType is below:
type ReturnType<T extends(...args: any) => any> = T extends(...args: any) => infer R ? R : any;

/** This is similar to our implementation. A difference is in the second branch of the condition
 * T v any), which should never be reached because of the generic parameter constraint.
 * */
