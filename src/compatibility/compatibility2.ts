type Person = {
  name: string;
};
interface IPerson {
  name: string;
}

let bob: Person = {
  name: 'Bob',
};
const fred: IPerson = {
  name: 'Fred',
};

bob = fred;
