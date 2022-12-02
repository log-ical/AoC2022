const fs = require('fs')

fs.readFile('src/inputs/day2.txt', 'utf8' , (err, data) => {
    //part one

    /*
        A - Rock        X - Rock         1 point
        B - Paper       Y - Paper        2 points
        C - Scissors    Z - Scissors     3 points
        Win - 6
        Draw - 3
        Loss - 0
    */

    const possibilities = {
        "A X": 4,
        "A Y": 8,
        "A Z": 3,
        "B X": 1,
        "B Y": 5,
        "B Z": 9,
        "C X": 7,
        "C Y": 2,
        "C Z": 6,
    } 

    let score = 0;
    data = data.split(/\r?\n/);
    data.forEach(set => {
        score+=possibilities[set];
    });
    console.log(score);

    //part two

    /*
        X - Lose  
        Y - Draw   
        Z - Win  
    */

    const possibilities2 = {
        "A X": 3,
        "A Y": 4,
        "A Z": 8,
        "B X": 1,
        "B Y": 5,
        "B Z": 9,
        "C X": 2,
        "C Y": 6,
        "C Z": 7,
    } 
    score = 0;
    data.forEach(set => {
        score+=possibilities2[set];
    });
    console.log(score);
})