// extend smth
type T1 = {
  name: string,
};

type T2 = {};


type Smth = T1 extends T2 ? T1 : T2; // T1
