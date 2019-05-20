const lineReader = require('readline').createInterface({
    input: require('fs').createReadStream('lista-jogos.csv')
});


const pad = 12;
console.log(`| ${'Player 1'.padEnd(pad)} | ${'Player 1'.padEnd(pad)} | ${' Vencedor '.padEnd(pad)} | Vantagem `);
console.log(`| ${''.padEnd(pad, '-')} | ${''.padEnd(pad, '-')} | ${''.padEnd(pad, '-')} | :${''.padEnd(pad - 2, '-')}: `);

lineReader.on('line', function (line) {
    const [player1, player2] = line.split(',');
    console.log(`| ${player1.padEnd(pad)} | ${player2.padEnd(pad)} | ${''.padEnd(pad)} | [ ] `);
});