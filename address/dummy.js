import getRandomInteger from './random.js';
const domain = ['gmail.com', 'naver.com', 'daum.net'];
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

  const domainNumber = getRandomInteger(domain.length);
  dummy += '@' + domain[domainNumber];

  return dummy;
};

export default createDummyData;
