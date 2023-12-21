let btnMenu = document.querySelector("#btnNav");
let btnCerrar = document.querySelector("#btnCer");
let menuMob = document.querySelector("#menuMob");
let sliderimagenes = document.querySelectorAll(".galeria__img img");
let izquierda = document.querySelector("#btnIzq");
let derecha = document.querySelector("#btnDer");
let current = 0;
let certifTit = document.querySelector("#certificTit");
let certifLogo = document.querySelector("#certifLogoImg");

/*----FUNCION MENU MOVIL----*/

btnMenu.addEventListener("click", () => {

    menuMob.classList.add("abrir");
})

btnCerrar.addEventListener("click", () => {

    menuMob.classList.remove("abrir");
});

/*----FUNCION GALERIA CERTIFICADO----*/

function reset() {
for (let i = 0; i < sliderimagenes.length; i++) {
  sliderimagenes[i].style.display = "none";

    }
}

function startSlide() {
reset();
sliderimagenes[0].style.display = "block";
}

function slideLeft() {
reset();
sliderimagenes[current - 1].style.display = "block";
current--;
}

function slideRight() {
reset();
sliderimagenes[current + 1].style.display = "block";
current++;
}

function change() {

    if(current === 0) {

        certifTit.innerHTML = "Certificado AutoDesk -"
        certifLogo.src = "../../assets/autodesk-3.png"
        certifLogo.style.width = "15em";

    } else if (current === 1) {
    
        certifTit.innerHTML = "Certificado Cype -"
        certifLogo.src = "../../assets/cype-2.png"
        certifLogo.style.width = "6em";

    } else {
    
        certifTit.innerHTML = "Certificado ECIC -"
        certifLogo.src = "../../assets/ecic-4.png"
        certifLogo.style.width = "12em";
    }
}

izquierda.addEventListener("click", function () {
if (current === 0) {
  current = sliderimagenes.length;
}
slideLeft();
change();
});

derecha.addEventListener("click", function () {
if (current === sliderimagenes.length - 1) {
  current = -1;
}
slideRight();
change();
});

startSlide();