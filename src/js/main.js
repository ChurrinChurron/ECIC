let btnMenu = document.querySelector("#btnNav");
let btnCerrar = document.querySelector("#btnCer");
let menuMob = document.querySelector("#menuMob");
let sliderimagenes = document.querySelectorAll(".galeria__img img");
let izquierda = document.querySelector("#btnIzq");
let derecha = document.querySelector("#btnDer");
let current = 0;
let certifTit = document.querySelector("#certificTit");


btnMenu.addEventListener("click", () => {

    menuMob.classList.add("abrir");
})

btnCerrar.addEventListener("click", () => {

    menuMob.classList.remove("abrir");
});

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

function changeText() {

    if(current === 0) {

        certifTit.innerHTML = "Certificado AutoDesk -"
    } else if (current === 1) {
    
        certifTit.innerHTML = "Certificado Cype -"
    } else {
    
        certifTit.innerHTML = "Certificado ECIC -"
    }
}

izquierda.addEventListener("click", function () {
if (current === 0) {
  current = sliderimagenes.length;
}
slideLeft();
changeText();
});

derecha.addEventListener("click", function () {
if (current === sliderimagenes.length - 1) {
  current = -1;
}
slideRight();
changeText();
});

startSlide();