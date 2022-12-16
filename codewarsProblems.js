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
function sortArray(array) {
    const oddArr = [];
    const evenArr = [];
    const result = [];
    for (let i = 0; i < array.length; i += 1) {
        if (array[i]%2 === 0) {
            evenArr.push(array[i]);
        } else {
            oddArr.push(array[i]);
        }
    }
    oddArr.sort((a, b) => a - b);
    for (let i = 0; i < array.length; i += 1) {
        if (array[i]%2 === 0) {
            result.push(evenArr.shift());
        } else {
            result.push(oddArr.shift());
        }
    }
    return result;
}

function expandedForm(num) {
    // Your code here
    let numStr = num.toString().split('');

    for(let i = 0 ; i < numStr.length; i++ ){

        for(let y = numStr.length - i; y > 1; y--){
            numStr[i] += '0';
            // console.log(y);  use this to debug y, and no y value print out from console
        }
    }


    numStr = numStr.filter(value => !value.startsWith(0));
    return numStr.join(' + ')
}

console.log(expandedForm(23));

function arrayDiff(a,b) {
    // Temporary array, containing all values from a, which are not contained in b
    let diffArray = [];
    // Looping over a
    for(let i = 0; i < a.length; i++) {
        // Per default we say that b does not contain a
        let bContainsAValue = false;
        // Loop over b
        for(let y = 0; y < b.length; y++) {
            // If any value in b is the same as the current value from a, we set bContainsAValue to true
            if(a[i] === b[y]) bContainsAValue = true;
        }
        // Now only if bContainsAValue is still false, meaning it does not contain the a value, we push this value into our temporary array
        if(!bContainsAValue) diffArray.push(a[i]);
    }
    // In the end we return the temporary array
    return diffArray;
}

