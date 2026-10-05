const nameHello = document.getElementById("greeting");
const buttonTap = document.getElementById("greetBtn");
const input = document.getElementById("nameInput");
let curentName = "job";
greetBtn.addEventListener("click", () => {
    curentName = input.value;
    nameHello.textContent = "Привет "  + curentName;
    input.value = "";
});

 

