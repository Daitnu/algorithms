const getRandomInteger = (max = 2) => {
  const random = (Math.random() * max) >> 0;
  return random;
};

export default getRandomInteger;
