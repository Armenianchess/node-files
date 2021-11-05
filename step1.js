const argv = process.argv;

const fs = require('fs');

const fileName = argv[2];

console.log(argv)


fs.readFile(fileName, 'utf8', function (err, data) {
    if (err) {
        console.log(err)
        process.exit(1)
    }
    console.log(`file contents, ${data}`)
    console.log('reading file');
})