const sum = (...args) => {
    console.log(args);
    let sum = 0;
    args.forEach(
        (ele) => {
            sum += ele;
        }
    )
    return sum;
}
const output = sum(1, 2, 3, 4, 5, 6, 7, 8, 89, 90, 12);
console.log(output);

const isDiv = (...args) => {
    console.log(args);
    let arr = [];
    args.forEach(
        (ele) => {
            if (ele % 2 === 0) {
                arr.push(ele);
            }
        }
    )
    return arr;
}
const divisibleByTwo = isDiv(1,2,3,5,6,7,89,43,12,34,32,41,46);
console.log(divisibleByTwo);
