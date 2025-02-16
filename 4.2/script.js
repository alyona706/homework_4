let threeDigitNumber = parseInt(prompt('Введіть трьохзначне число', ''));

let threeDigitNumber3 = threeDigitNumber % 10;
threeDigitNumber = (threeDigitNumber - threeDigitNumber3) / 10;
let threeDigitNumber2 = threeDigitNumber % 10;
threeDigitNumber = (threeDigitNumber - threeDigitNumber2) / 10;
let threeDigitNumber1 = threeDigitNumber % 10;

if ( threeDigitNumber1 === threeDigitNumber2 && threeDigitNumber1 === threeDigitNumber3 ) {
    console.log('Всі числа однакові');
} else if (threeDigitNumber1 === threeDigitNumber2 || 
            threeDigitNumber1 === threeDigitNumber3 ||
            threeDigitNumber2 === threeDigitNumber3) {
    console.log('Є два однакові числа');
} else {
    console.log('Всі числа різні');
}