// Partial<Type>

// Constructs a type with all properties of Type set to optional.
// This utility will return a type that represents all subsets of a given type.

interface Todo {
  title: string;
  description: string;
}

type Todo2 = Record<string, unknown>;

function updateTodo(todo: Todo, fieldsToUpdate: Todo2) {
  return { ...todo, ...fieldsToUpdate };
}

const todo1 = {
  title: 'organize desk',
  description: 'clear clutter',
};

const todo2 = updateTodo(todo1, {
  title: 'throw out trash',
});

console.log('-- -- -- todo', JSON.stringify(todo2, null, 2));
