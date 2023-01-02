const min = Number(prompt("Please min Number"));
const max = Number(prompt("Please max Number"));

const random = Math.floor(
  Math.random() * (Number(max) - Number(min) + 1) + Number(min)
);

console.log(random);
