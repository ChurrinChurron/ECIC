let btnMenu = document.querySelector("#btnNav");
let btnCerrar = document.querySelector("#btnCer");
let menuMob = document.querySelector("#menuMob");

btnMenu.addEventListener("click", () => {

    menuMob.classList.add("abrir");
})

btnCerrar.addEventListener("click", () => {

    menuMob.classList.remove("abrir");
});



let slider = document.querySelector(".galeria__img");
let sliderImg = document.querySelectorAll(".galeria__img img");
let sliderIzq = document.querySelector("#btnIzq");
let sliderDer = document.querySelector("#btnDer");
let contador = 1;
let tamañoSlider = sliderImg[0].clientWidth;
let certifTit = document.querySelector("#certificTit");

/*FUNCION SLIDER*/

slider.style.transform = `translateX(${-tamañoSlider * contador}px)`;

sliderDer.addEventListener("click", () => {

    slider.style.transition = "none";
    contador++;
    slider.style.transform = `translateX(${-tamañoSlider * contador}px)`;
})

sliderIzq.addEventListener("click", () => {

    slider.style.transition = "none";
    contador--;
    slider.style.transform = `translateX(${-tamañoSlider * contador}px)`;
})

slider.addEventListener("transitionend", () => {

    if(sliderImg[contador].id === "ultimaImg") {

        slider.style.transition = "none";
        contador = sliderImg.length - 2;
        slider.style.transform = `translateX(${-tamañoSlider * contador}px)`;
        certifTit.innerHTML = "Certificado Autodesk -";
    }

    if(sliderImg[contador].id === "primeraImg") {

        slider.style.transition = "none";
        contador = sliderImg.length - contador;
        slider.style.transform = `translateX(${-tamañoSlider * contador}px)`;
        certifTit.innerHTML = "Certificado ECIC -";
    }

    else {

        certifTit.innerHTML = "Certificado Cype -";
    }
})