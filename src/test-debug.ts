interface User {
  name: string,
  age: number,
}

function getUserName(user: User): String {
  return user.name;
}

const res = getUserName({ name: 'John', age: 30 });

console.log(res);
