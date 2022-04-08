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
type FunctionReturnType<T> = T extends (...args: any) => infer R ? R : T;

type Returned1 = FunctionReturnType<AddPersonType>;
type Returned2 = FunctionReturnType<RemovePersonType>;

type Action = Returned1 | Returned2;

const person = { name: 'Fred' };
type PersonType = FunctionReturnType<typeof person>;
