// Readonly<Type>

// Constructs a type with all properties of Type set to readonly, meaning the
// properties of the constructed type cannot be reassigned

interface Props {
  a?: number;
  b?: string;
}

// const obj: Props = { a: 5 };

const obj2: Required<Props> = { a: 5, b: '3' };

// console.log('-- -- -- 1', JSON.stringify(obj, null, 2));
console.log('-- -- -- 2', JSON.stringify(obj2, null, 2));

// Property 'b' is missing in type '{ a: number; }' but required in type 'Required<Props>'.
