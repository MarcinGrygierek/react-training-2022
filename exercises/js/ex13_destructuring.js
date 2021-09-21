const foo = {
  a: 100,
  b: 102,
  c: 48,
};

// sposób start
let a = foo.a;
let c = foo.c;

// sposób es6
let { a, c } = foo;
