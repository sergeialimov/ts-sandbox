type Person = {
  firstName: string;
  surname: string;
  greet: () => void;
}
type PersonKeys = keyof Person;
