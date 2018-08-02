// const getMeUnique = a => new Set(a);
const print = s => console.log(s)
const getMeUnique = a => [...new Set(a)];
const sumNumbers = (...n) => n.reduce((accumulator, current) => accumulator + current);

export {
  getMeUnique,
  sumNumbers
}