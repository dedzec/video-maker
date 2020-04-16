const readline = require('readline-sync')

function start() {
    const content = {}

    content.searchTerm = askAndReturnSearchTerm()
    content.prefix = askAndReturnPrefix()

    function askAndReturnSearchTerm() {
        return readline.question('Type a Wikipedia search term: ')
    }

    function askAndReturnPrefix() {
        const prefixes = ['Who', 'What is', 'The history of']
        const selectPrefixIndex = readline.keyInSelect(prefixes, 'Choose one option: ')
        const selectPrefixText = prefixes[selectPrefixIndex]

        return selectPrefixText
    }

    console.log(content)
}

start()