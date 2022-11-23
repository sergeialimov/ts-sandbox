interface Interface1 {
  name?: string,
  age?: number,
}

interface Interface2 {
  name: string,
  surname: string
}

type User = Omit<Interface1 & Interface2, 'name'> & {
  name: string,
  favoriteMovie: string,
};

const user: User = {
  name: 'John',
  surname: 'Deegweed',
  favoriteMovie: 'Titanic',
};

console.log(user);
