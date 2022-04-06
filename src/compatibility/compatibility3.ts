type Person = {
  name: string;
};
interface IPerson {
  name: string;
  age: number;
}

let bob: Person = {
  name: 'Bob',
};
const fred: IPerson = {
  name: 'Fred',
  age: 30,
};

bob = fred;

// It's possible to assing wider type no a narrow one
// It's not possibe to assign var with a narrow type to a wider one
