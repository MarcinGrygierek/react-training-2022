function bar(obj) {
  const obj2 = { ...obj };
  obj2.lorem = 1000;
  return obj2;
}

const oo1 = { a: 10 };
const oo2 = bar(oo1);

// obiekty są różne - spread operator pozwolił na stworzenie nowego obiektu z taką samą zawartością jak obiekt początkowy

const arr = [1, 2, 3, 4, 6];
const arr2 = [...arr];
