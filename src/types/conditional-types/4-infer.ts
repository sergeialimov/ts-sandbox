type ArrayElementType<T> = T extends (infer E)[] ? E : T;

// type of item1 is number
type Item1 = ArrayElementType<number[]>;

// type of item2 is `name: string`
type Item2 = ArrayElementType<{ name: string }>;
