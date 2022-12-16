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


function findEvenIndex(arr){
    let left = 0;
    let right = 0;
    const reducer = (accumulator, currentValue) => accumulator + currentValue;

    if(arr.length == 0){
        return -1;
    }

    for(let i = 0; i < arr.length; i++){
        if(i == 0){
            right = arr.slice(1).reduce(reducer, 0);
            if(right === i){
                return i;
            }
        }else{
            left = arr.slice(0, i).reduce(reducer, 0);
            right = arr.slice(i+1).reduce(reducer, 0);
            if(left == right){
                return i;
            }
        }
    }

    return -1;
}

