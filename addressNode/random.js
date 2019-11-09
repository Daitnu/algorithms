const getRandomInteger = (max = 2) => {
  const random = (Math.random() * max) >> 0;
  return random;
};

module.exports = getRandomInteger;
