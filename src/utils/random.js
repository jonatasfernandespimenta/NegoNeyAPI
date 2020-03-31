exports.randomInt = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

exports.randomChoice = (arr) => {
  return arr[this.randomInt(0, arr.length -1)];
};
