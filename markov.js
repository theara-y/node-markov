/** Textual markov chain generator */


class MarkovMachine {

  /** build markov machine; read in text.*/

  constructor(text) {
    let words = text.split(/[ \r\n]+/);
    this.words = words.filter(c => c !== "");
    this.makeChains();
  }

  /** set markov chains:
   *
   *  for text of "the cat in the hat", chains will be
   *  {"the": ["cat", "hat"], "cat": ["in"], "in": ["the"], "hat": [null]} */

  makeChains() {
    let map = {}
    for(let i = 0; i < this.words.length; i++) {
      let word = this.words[i];
      let next = this.words[i + 1] || null;
      if(word in map) {
        if(!map[word].includes(next)) {
          map[word].push(next);
        }
      } else {
        map[word] = [next];
      }
    }
    return map
  }


  /** return random text from chains */

  makeText(numWords = 100) {
    const chains = this.makeChains()
    const keys = Object.keys(chains)
    let word = keys[Math.floor(Math.random() * keys.length)]
    let text = word

    for(let i = 1; i < 100; i++) {
      let words = chains[word]

      if(words.length == 1) {
        word = words[0]
      } else {
        word = words[Math.floor(Math.random() * words.length)]
      }

      if(word == null) {
        break;
      }
      text += ` ${word}`
    }
    return text
  }
}

module.exports = MarkovMachine
