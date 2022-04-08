interface Animal {
  live(): void,
}

interface Dog extends Animal {
  woof(): woof,
}

type Example = Dog extends Animal ? number : string;
