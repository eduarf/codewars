const rotate = (string) => {
  const newArr = [];
  for (let i = 1; i <= string.length; i++) {
    const result = string.slice(i) + string.slice(0, i);
    newArr.push(result);
  }
  return newArr;
};
console.log(rotate("Hello"));


// another solution
// function rotate(s) {
//   return s.split("").map((e) => (s = s.slice(1) + s.slice(0, 1)));
// }
// console.log(rotate("Hello"));