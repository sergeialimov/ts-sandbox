export {};

interface User<UserIdType> {
  id: UserIdType;
  name: string;
  email: string
}

const user: User<number> = {
  id: 1,
  name: 'John',
  email: 'john@gmail.com',
};

const user2: User<string> = {
  id: '1',
  name: 'John',
  email: 'john@gmail.com',
};

console.log('-- user', user);
console.log('-- user2', user2);
