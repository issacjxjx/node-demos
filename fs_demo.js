let fs = require('fs');

fs.readFile('fs.log', (err, logData)=> {
    if (err) {
        throw err;
    }

    let txt = logData.toString();
    console.log(txt);
});