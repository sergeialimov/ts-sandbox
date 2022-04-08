type User = {
  name: string,
  age: number,
};

const user: User = {
  name: 'Jane',
  age: 22,
};

const anotherUser: typeof user = {
  name: 'John',
  age: 23,
};
