const getPi = pattern => {
  const patternLength = pattern.length;
  const pi = new Array(patternLength).fill(0);

  let j = 0;
  for (let i = 1; i < patternLength; i++) {
    while (0 < j && pattern[i] !== pattern[j]) {
      j = pi[j - 1];
    }

    if (pattern[i] === pattern[j]) {
      pi[i] = ++j;
    }
  }
  return pi;
};

const kmp = (origin, pattern) => {
  const pi = getPi(pattern);
  const originLength = origin.length;

  let j = 0;
  for (let i = 0; i < originLength; i++) {
    while (0 < j && origin[i] !== pattern[j]) {
      j = pi[j - 1];
    }

    if (origin[i] == pattern[j]) {
      if (j == pattern.length - 1) {
        return true;
      }
      j++;
    }
  }

  return false;
};

module.exports = kmp;
