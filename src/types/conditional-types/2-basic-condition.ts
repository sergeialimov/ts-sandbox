type Person = {
  name: string;
  age: number;
};
type Example1 = Person extends {} ? string : number;
