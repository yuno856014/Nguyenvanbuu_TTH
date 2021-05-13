const min = 10;
const max = 90
function generateArray(size,min,max) {
    let arr = [];
    for (let i = 0; i < size; i++) {
        arr[i] = Math.floor((Math.random() * (max - min + 1)) + min);
    }
    return arr;
}

function printArray(arr) {
    document.write(`${arr.join("-")}<br>`);
}

function isPrime(number) {
    let squareRoot = Math.floor(Math.sqrt(number));
    if (number == 2) {
        return true;
    } else {
        if (number > 2) {
            for (let i = 2; i <= squareRoot ; i++) {
                if (number % i == 0) {
                    return false
                }
            }
            return true;
        }
        else{
            return false;
        }
    }
}

function printPrimes(arr) {
    let arrNew = [];
    let size = arr.length;
    for (let i =0; i < size; i++) {
        if ( isPrime(arr[i]) == true){
           arrNew.push(arr[i]);
        }
    }
    document.write(`Các số nguyên tố trong mảng là :${arrNew}<br>`);
}

function  sumPrimes(arr){
    let sum = 0;  
    for (let number of arr){
        if (isPrime(number) ==true ){
            sum += number;
        }       
    }
    return sum;
}

function main(){
    let size = +prompt("Hãy nhập vào giá trị size")
    while (size <=0){
        size = +prompt("Hãy nhập lại giá trị size lớn hơn 0")
    }
    let arrNumber = generateArray(size,min,max);
    document.write(`${arrNumber} <br>`)
    printArray(arrNumber);
    printPrimes(arrNumber);
    document.write(`Tổng giá trị các số nguyên tố trong mảng là : ${sumPrimes(arrNumber)}`)
}

main();