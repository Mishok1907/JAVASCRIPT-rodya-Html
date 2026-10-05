const btnThemes = document.getElementById("btnTheme");
let isNIGHT = false;

btnThemes.addEventListener("click", () => {
   isNIGHT = !isNIGHT;
   document.body.classList.toggle("night" , isNIGHT);
    document.body.classList.toggle("light" , !isNIGHT);
});
