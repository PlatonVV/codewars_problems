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