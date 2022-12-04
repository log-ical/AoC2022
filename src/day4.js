const fs = require('fs')

fs.readFile('src/inputs/day4.txt', 'utf8' , (err, data) => {
    let c = 0, c2 = 0;
    data = data.split(/\r?\n/);
    data.forEach(x => {
        x = x.split(/[-,]/).map(y=>parseInt(y));
        x[0]<=x[2]&&x[1]>=x[3] ||
            x[2]<=x[0]&&x[3]>=x[1] ?
            c++:[];
        x[0]<=x[3]&&x[1]>=x[2]?c2++:[];
    });
    console.log(c, c2);
})
