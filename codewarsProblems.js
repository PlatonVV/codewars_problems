function minMax(arr){
    return [Math.min(...arr), Math.max(...arr)];
}

function calculateYears(principal, interest, tax, desired) {
    let year=0;
    while (principal<desired){year++; principal=principal+((principal*interest)-(principal*interest*tax))}
    return year
}

const doubleChar = (str) => str.split("").map(c => c + c).join("");

function firstNonConsecutive (arr) {
    let result = arr.find((val, index) => val !== index + arr[0]);

    return (Number.isInteger(result)) ? result : null;
}


function isIsogram(str){
    return !/(\w).*\1/i.test(str)
}

function testEven(n) {
    return n % 2 === 0;
}

function goals (laLigaGoals, copaDelReyGoals, championsLeagueGoals) {
    return laLigaGoals + copaDelReyGoals + championsLeagueGoals;
}

function fakeBin(x){
    let output = "";
    for (let i=0; i<x.length; i+=1) {
        if (x[i] < 5) {
            output += 0;
        } else { output += 1; }
    }
    return output;
}

