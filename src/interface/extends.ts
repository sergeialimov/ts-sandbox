interface User {
  name: string,
  age: number,
}

interface UserFull extends User {
  surname: string,
}

const user: UserFull = {
  name: 'name',
  age: 1,
  surname: 'surname',
};

console.log(user);
