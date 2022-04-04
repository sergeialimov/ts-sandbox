// Omit<Type, Keys>

// Constructs a type by picking all properties from Type and then removing Keys
// (string literal or union of string literals).

interface Todo {
  title: string;
  description: string;
  completed: boolean;
  createdAt: number;
}

type TodoPreview = Omit<Todo, 'description'>;

const todo: TodoPreview = {
  title: 'Clean room',
  completed: false,
  createdAt: 1615544252770,
};

const t = todo;
console.log('t', t);


type TodoInfo = Omit<Todo, 'completed' | 'createdAt'>;

const todoInfo: TodoInfo = {
  title: 'Pick up kids',
  description: 'Kindergarten closes at 5pm',
};

const t2 = todoInfo;
console.log('t2', t2);

