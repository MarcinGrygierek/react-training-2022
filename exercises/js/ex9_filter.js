const arr4 = arr.filter((element) => element % 2 === 0);
// lub trochę szerzej
const arr5 = arr.filter((element) => {
  if (element % 2 === 0) return true;
  return false;
});

// arr4 i arr5 będą zawierać w sobie tylko i wyłącznie parzyste wartości
