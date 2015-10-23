export default function (a, b) {

  // ES6 Features Test!
  let nums = [a, b];
  let newNums = nums.map(n => n + 3);

  const str = `You are adding together ${a} and ${b}`;

  return newNums[0] + newNums[1];
}
