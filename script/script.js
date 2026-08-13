
//Size password
const inputSize = document.getElementById('size');

//Capital letter
const checkCapital = document.getElementById('capital');

//Lowercase letter
const checkLowercase = document.getElementById('lowercase');

//Number
const checkNumbers = document.getElementById('numbers');

//Symbols
const checkSymbols = document.getElementById('symbols');

//Botton to generate password
const generate = document.getElementById('generate');

//Box for password
const outputResult = document.getElementById('result');

generate.addEventListener('click', () => {
    const size = Number(inputSize.value);
    const hasCapital = checkCapital.checked;
    const hasLowerCase = checkLowercase.checked;
    const hasNumber = checkNumbers.checked;
    const hasSymbol = checkSymbols.checked;

    const result = generatePassword(
        size, 
        hasCapital, 
        hasLowerCase, 
        hasNumber, 
        hasSymbol);

    outputResult.value = result;
});

const CHARS = {
    capital: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
    lowercase: "abcdefghijklmnopqrstuvwxyz",
    number: "0123456789",
    symbol: "!@#$%^&*()_+-=[]{}|;:,.<>?"
};

let randomCharacter;

function generatePassword(size, hasCapital, hasLowerCase, hasNumber, hasSymbol){
    let i = 0;
    let result = "";
    while (i < size){
        if(!hasCapital && !hasLowerCase && !hasNumber && !hasSymbol) {
            return "Selecciona almenos una opcion";
        } 
 
        //This generate a option for Capital, Lowercase, number or symbols
        let randomOption = Math.floor(Math.random() * 4) + 1;
        
        if(randomOption == 1 && hasCapital){    //Capital letters
            //Now, we generate a character
            randomCharacter = Math.floor(Math.random() * CHARS.capital.length);
            result += CHARS.capital[randomCharacter];
            i++;
        }else if(randomOption == 2 && hasLowerCase){    //Lowercase letters
            //Now, we generate a character
            randomCharacter = Math.floor(Math.random() * CHARS.lowercase.length);
            result += CHARS.lowercase[randomCharacter];
            i++;
        } else if(randomOption == 3 && hasNumber){  //Numbers
            //Now, we generate a character
            randomCharacter = Math.floor(Math.random() * CHARS.number.length);
            result += CHARS.number[randomCharacter];
            i++;
        }else if(randomOption == 4 && hasSymbol){   //Symbols
            //Now, we generate a character
            randomCharacter = Math.floor(Math.random() * CHARS.symbol.length);
            result += CHARS.symbol[randomCharacter];
            i++;
        }
    }
    return result;
}
