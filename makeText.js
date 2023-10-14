/** Command-line tool to generate Markov text. */
const fs = require('fs')
const MarkovMachine = require('./markov')

fs.readFile('eggs.txt', 'utf-8', (err, data) => {
    if(err) {
        console.log("Error reading file")
        process.exit(1);
    }

    const mm = new MarkovMachine(data)

    let text = mm.makeText()
    console.log(text)
})