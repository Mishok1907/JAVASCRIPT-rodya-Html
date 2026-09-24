// private int x = 1;
// x = "привет";

let a = 1; // можно изменить
a = false;
a = "абру";

const b = "мяу" // когда не изменяется
const c = true // когда не изменяется

// ----- //

const num = 23;
const price = 23.33;
const title = "пять";
const isOpen = true;
const Image = null;


let name; // undefined

// public class User
// {
//      public float speedPlayer = 10f;
//      private string name = "Вася";
//}
// public class Game
// {
//      private User player = new User();
//      player.speedPlayer = 20f;
//}

const user = {name: "Вася", speedPlayer: 32};

user.speedPlayer = 50;
user.name = "Петя";

// private int[] applesCount;

// МАССИВЫ

const fruits = ["яблоко", "банан"];

fruits.length;          // 2
fruits[0];              // "яблоко"
fruits.push("груша");   // добавить в конец
fruits.pop();           // удалить последний
fruits.includes("банан"); // true

let aa = 1;
let bb = "1";

let result = aa * bb;

// if (aa !== bb || aa < bb && aa < bb) {}

// Классический for
for (let i = 0; i < 5; i++) {
    console.log("Шаг", i);
}

// while — пока условие true
let n = 3;
while (n > 0) {
    console.log(n);
    n--;
}

//

function greet(name){
    return `Привет, ${name}!`;
}

console.log(greet("Вася"));

const sum = (a,b) => a + b;

console.log(sum(2,10));



// Пройтись по массиву
fruits.forEach(f => console.log(f));

