import getRandomNumber from './random.js';
import Trie from './trie.js';
import createDummyData from './dummy.js';

window.addEventListener('DOMContentLoaded', () => {
  const dummys = createDummyData();
  const trie = new Trie();

  for (const dummy of dummys) {
    const splited = dummy.split('@');
    trie.insert(splited[0]);
  }

  const input = document.getElementById('search');
  const view = document.getElementById('view');

  input.addEventListener('input', e => {
    const value = e.target.value;
    if (value === '') {
      view.innerHTML = '';
      return;
    }

    console.time(1);
    const indexes = trie.find(value);
    const map = indexes.map(index => dummys[index]);
    view.innerText = map.join('\n');
    console.timeEnd(1);
  });
});
