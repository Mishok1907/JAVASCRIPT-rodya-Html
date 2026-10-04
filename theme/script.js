const btnThemes = document.getElementByID("btnTheme");
const isNIGHT = false;

btnThemes.addEventListener("click", () => {
    if (isNIGHT ==  false) {
        btnThemes.classList.remove("light");
         btnThemes.classList.toggle("night");
         isNIGHT = true;
    }
    else{
         btnThemes.classList.remove("night");
         btnThemes.classList.toggle("light");
         isNIGHT = false;
    }
});
