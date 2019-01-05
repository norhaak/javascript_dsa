const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function processInput() {
    let lines = [];
    rl.on('line', (line) => {
        lines.push(line.trim());
    });
    return lines;
}

lines = processInput();
for (var i = 0; i < lines.length; i++) {
    console.log(lines[i]);
}




