const texto = document.getElementsByClassName("section__texto");
const imagen = document.getElementsByClassName("section__imagen");
const boton = document.getElementsByClassName("section__boton");
//Js para funcion Tab
for(let i = 0; i < boton.length; i++)boton[i].addEventListener('click', ()=>{
    if (imagen[i].classList.contains('active')) imagen[i].classList.remove('active');
    else imagen[i].classList.add('active');
});
const punto = document.getElementsByClassName("tablero__puntos");
const personajes = document.getElementsByClassName("personajes__carrusel");
const mapa = document.getElementsByClassName("mapa__carrusel");
for(let i1 = 0; i1 < punto.length; i1++)punto[i1].children[0].addEventListener('click', ()=>{
    let operacion = null;
    if (i1 == 0 || i1 == 3) operacion = "case1";
    else if (i1 == 1 || i1 == 4) operacion = "case2";
    else operacion = "case3";
    if (punto[i1].parentNode.classList.contains("personajes__tablero")) {
        personajes[0].classList.remove("case1");
        personajes[0].classList.remove("case2");
        personajes[0].classList.remove("case3");
        personajes[0].classList.add(operacion);
    } else {
        mapa[0].classList.remove("case1");
        mapa[0].classList.remove("case2");
        mapa[0].classList.remove("case3");
        mapa[0].classList.add(operacion);
    }
});

//# sourceMappingURL=index.bda4afae.js.map
