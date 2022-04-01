// https://blog.devgenius.io/how-to-use-the-keyof-type-operator-in-typescript-6d5e0ea6740f
export {};

type User = {
  name: string;
  age: number;
  location: string;
};

const users: User[] = [
  {
    name: 'Chad',
    age: 31,
    location: 'Japan',
  },
  {
    name: 'Bob',
    age: 29,
    location: 'USA',
  },
  {
    name: 'Jane',
    age: 30,
    location: 'France',
  },
];

function getData<Type, KeyType extends keyof Type>(
  dataList: Type[],
  dataType: KeyType,
): Type[KeyType][] {
  return dataList.map((data) => data[dataType]);
}

const res = getData(users, 'age');

console.log(res);
