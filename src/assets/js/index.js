const texto=document.getElementsByClassName("section__texto");
const imagen=document.getElementsByClassName("section__imagen");
const boton=document.getElementsByClassName("section__boton");

for(let i=0;i<boton.length;i++) {
    boton[i].addEventListener('click',()=>{
        if(imagen[i].classList.contains('active')){
            imagen[i].classList.remove('active');
        }
        else{
            imagen[i].classList.add('active')
        }
    })
};

