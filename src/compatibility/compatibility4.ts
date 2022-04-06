type Dog = {
  name: string;
};
type Shape = {
  name: 'Circle' | 'Square';
};
let ben: Dog = {
  name: 'Ben',
};
let circle: Shape = {
  name: 'Circle',
};
ben = circle;
