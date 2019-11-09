const readline = require('readline');
const dummy = require('./dummy');
const kmp = require('./kmp');

const data = dummy();

(() => {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  rl.setPrompt('명령하세요 : ');
  rl.prompt();

  rl.on('line', line => {
    if (line === 'q') {
      console.log('종료합니다');
      rl.close();
    }

    console.time('kmp');
    findMatchStringUsingKmp(line);
    console.timeEnd('kmp');

    console.time('indexof');
    findUsingIndexOf(line);
    console.timeEnd('indexof');

    console.time('includs');
    findUsingIncludes(line);
    console.timeEnd('includs');

    rl.prompt();
  });

  rl.on('close', () => {
    process.exit();
  });
})();

const findUsingIncludes = pattern => data.filter(e => e.includes(pattern));
const findUsingIndexOf = pattern => data.filter(e => e.indexOf(pattern));
const findMatchStringUsingKmp = pattern => data.filter(e => kmp(e, pattern));
