const fs = require('fs')

fs.readFile('src/inputs/day1.txt', 'utf8' , (err, data) => {
    //part one
    let temp=0, total=0;
    data = data.split(/\r?\n/).map(x=>parseInt(x));
    data.forEach(cal => {
        isNaN(cal) ? temp>total ? [total=temp, temp=0] : temp=0 : temp+=cal;
    })
    console.log(total);

    //part two
    temp=0
    let total2=[0, 0, 0];
    data.forEach(cal => {
        isNaN(cal) ? temp>Math.min(...total2) ? [total2[total2.indexOf(Math.min(...total2))]=temp, temp=0] : temp=0 : temp+=cal;
    })
    console.log(total2[0]+total2[1]+total2[2]);
})