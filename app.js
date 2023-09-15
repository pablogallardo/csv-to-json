let csvToJson = require('convert-csv-to-json');
const fs = require('fs');
const { exit } = require('process');

const args = process.argv.slice(2);
if(args.length < 2 || !fs.existsSync(args[0])) {
    console.error("ERRO: Uso correto – app.js [arquivoCsv] [arquivoOutput]");
    exit(1);
}
if(fs.existsSync(args[1])) {
    console.error(`ERRO: O arquivo ${args[1]} já existe`);
    exit(1);
}
let fileInputName = args[0];
let fileOutputName = args[1];

csvToJson.generateJsonFileFromCsv(fileInputName,fileOutputName);