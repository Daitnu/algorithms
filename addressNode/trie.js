class Trie {
  constructor() {
    this.head = Node();
    this.index = 0;
    this.ASCII_MAX_LENGTH = 128;
  }

  insert(string) {
    let head = this.head;

    const length = string.length;
    for (let i = 0; i < length; i++) {
      const index = string[i].charCodeAt();

      if (!head.next[index]) {
        head.next[index] = Node();
      }
      head = head.next[index];
    }

    head.isEnd = true;
    head.index = this.index++;
  }

  find(string) {
    let head = this.head;
    const indexes = [];

    for (const char of string) {
      const index = char.charCodeAt();

      if (!head.next[index]) {
        return indexes;
      }
      head = head.next[index];
    }

    this.findRecursive(head, indexes);
    return indexes;
  }

  findRecursive(head, indexes) {
    if (10 <= indexes.length) {
      return;
    }

    if (head.isEnd) {
      indexes.push(head.index);
    }

    const { ASCII_MAX_LENGTH } = this;
    for (let i = 0; i < ASCII_MAX_LENGTH; i++) {
      if (head.next[i]) {
        this.findRecursive(head.next[i], indexes);
      }
    }
  }
}

const Node = () => {
  return { isEnd: false, next: [], index: 0 };
};

module.exports = Trie;
