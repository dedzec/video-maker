const readline = require('readline-sync');
const state = require('./state.js');

function robot() {
    const content = {
        maximumSentences: 7,
    };

    content.searchTerm = askAndReturnSearchTerm();
    content.prefix = askAndReturnPrefix();
    state.save(content);

    function askAndReturnSearchTerm() {
        return readline.question('Type a Wikipedia search term: ');
    }

    function askAndReturnPrefix() {
        const prefixes = ['Who', 'What is', 'The history of'];
        const selectPrefixIndex = readline.keyInSelect(prefixes, 'Choose one option: ');
        const selectPrefixText = prefixes[selectPrefixIndex];

        return selectPrefixText;
    }
}

module.exports = robot;
