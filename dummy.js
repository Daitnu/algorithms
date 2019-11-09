const getRandomInteger = require('./random');
const ASCII_OF_LOWER_A = 'a'.charCodeAt();

const createDummyData = (dataNumber = 30000, dataLength = 20) => {
  const dummys = [];

  for (let i = 0; i < dataNumber; i++) {
    const dummy = createRowData(dataLength);
    dummys.push(dummy);
  }

  return dummys;
};

const createRowData = dataLength => {
  let dummy = '';
  for (let j = 0; j < dataLength; j++) {
    const ascii = getRandomInteger(24) + ASCII_OF_LOWER_A;
    dummy += String.fromCharCode(ascii);
  }

  return dummy;
};

module.exports = createDummyData;
