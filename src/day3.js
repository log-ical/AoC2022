const fs = require('fs')

fs.readFile('src/inputs/day3.txt', 'utf8' , (err, data) => {
    //part one
    let matchedChars = [], values = [];
    data = data.split(/\r?\n/);
    data.forEach(line => {
        compartment1=line.substring(0, line.length/2);
        compartment2=line.substring(line.length/2);
        for(let i=0; i<compartment1.length; i++)
            if(compartment2.includes(compartment1[i])){
                matchedChars.push(compartment1[i]);
                break;
            }
    })
    matchedChars.forEach((char)=>{
        values.push(/^[A-Z]*$/.test(char) ? char.charCodeAt(0) - 38 : char.charCodeAt(0) - 96);
    })
    console.log(Object.values(values).reduce((a, b) => a + b))

    //part two
    let matchedChars2 = [], values2 = [];
    for(let i=0; i<data.length; i+=3)
    {   
        for(let char=0; char<data[i].length; char++)
        {
            if(data[i+1].includes(data[i][char]) && data[i+2].includes(data[i][char]))
            {
                matchedChars2.push(data[i][char]);
                break;
            }
        }
    }
    matchedChars2.forEach((char)=>{
        values2.push(/^[A-Z]*$/.test(char) ? char.charCodeAt(0) - 38 : char.charCodeAt(0) - 96);
    })
    console.log(Object.values(values2).reduce((a, b) => a + b))
})