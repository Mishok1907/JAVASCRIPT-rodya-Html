
const  buttonTap = document.querySelector(".button-clicer")

let counter = 0;


buttonTap.addEventListener("click", () => {
    counter++;
    buttonTap.textContent = `${counter}`;
    console.log(counter);
    
});




