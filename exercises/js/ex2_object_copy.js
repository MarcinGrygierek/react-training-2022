function foo(obj) {
  const obj2 = obj;
  obj2.lorem = 1000;
  return obj2;
}

const o1 = { a: 10 };
const o2 = foo(o1);

// obiekty są identyczne, ponieważ wskazują na to samo miejsce w pamięci
