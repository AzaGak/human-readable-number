module.exports = function toReadable (number) {
    const ones = ["", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];
    const teens = ["", "eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen", "nineteen"];
    const tens = ["", "ten", "twenty", "thirty", "forty", "fifty", "sixty", "seventy", "eighty", "ninety"];

    if (number === 0) {
        return "zero";
    }

    if (number < 10) {
        return ones[number];
    }

    if (number >= 11 && number < 20) {
        return teens[number - 10];
    }

    if (number < 100) {
        const tenDigit = Math.floor(number / 10);
        const oneDigit = number % 10;
        return `${tens[tenDigit]} ${oneDigit !== 0 ? ones[oneDigit]:""}`.trim();
    }

    if(number < 1000) {
        const hundredDigit = Math.floor(number / 100);
        const remainder = number % 100;
        return `${ones[hundredDigit]} hundred ${remainder !==0 ? toReadable(remainder): ""}`.trim();
    }
}


