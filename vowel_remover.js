const vowels = ['a', 'e', 'i', 'o', 'u'];
const shortcut = (string) => {
  const stringArr = string.split('');
  const newArr = stringArr.filter((el) => {
    return !vowels.includes(el);
  });
 const result = newArr.join('');
 return result;
};
console.log(shortcut('hello'));
console.log(shortcut('codewars'));
console.log(shortcut('goodbye'));
console.log(shortcut('HELLO'));