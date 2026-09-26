function ageControl(age) {
    if (age >= 18) {
            return `ВАШ возвраст: ${age} Идите дальше`
    }
    else{
      return  `ВАШ возвраст: ${age}  Подрости  `
    }

}

console.log(ageControl(21));

function caluculator(numberOne,numberTwo){
    let resaut = numberOne + numberTwo;
    return resaut;
}
console.log(caluculator(21,20));


function greet(name){
    return `Привет, ${name}!`;
}

console.log(greet("Вася"));

const greet = (name = `человек-паук`)  => `Привет ${name}`;

console.log(greet(`АМОГУС`));