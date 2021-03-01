
let img_dom = document.getElementById('img_cam');

/*
** Comentario de la funcion: Las imagenes dependen del contador, 
** que es un number entero las imaganes tienen un nombre de cam[numero].svg
** Los numeros van del 0 al 3 en el nombre de las imagenes, por lo que que si
** se modifica la variable cont en el codigo. puede dar error porque podria 
** no encontrar el recurso o imagen en este caso. se permite por ser un trabajo pequeño.
*/
var bandera = false
function moveImg(){
    let cont =1;
    bandera = true

    let change_img = setInterval(() => {
        img_dom.setAttribute('src', `assets/img/cam${cont}.svg`)
        if(cont == 3){
            clearInterval(change_img)
            bandera = false
        }
        cont++
    }, 1500);
}

//Evento disparador de la función anterior...
img_dom.onmouseover = (e) =>{
  
    if(!bandera){
        moveImg()
    }

}



function menuResponsive(){

    let boton = document.getElementById('btn_menu')
    let lista = document.getElementById('lista')
    boton.onclick = function(){

      lista.classList.toggle('show_menu')

    }


}












/* Quitar border top cuando esta pequeña la pantalla y activar cuando esta grande. */
/* Pasos:
1. Ver en que tamaño estoy. variable bandera que indique si esta activo el modo responsive o no.
2. si esta activo, quitar top border y agrandar alto del elemento lista.
3. si esta desactivado, colocar border-top al elemento li.
*/


const list_li = [...document.getElementsByClassName('nav__link')]
function changeBorderList(obj){
    
    let {border, height} = obj
    
    list_li.forEach((li)=>{

        li.style.borderTop = border;
        li.style.height = height;
    })

}

const match_list = window.matchMedia('(max-width: 660px)')
window.addEventListener('resize', ()=>{
    if(match_list.matches){

        let obj = {border: '0px', height: '55px'}
        changeBorderList(obj)

    }else{

        let obj = {border: "", height: ""}
        changeBorderList(obj)
    }

})


if(match_list.matches){
    let obj = {border: '0px', height: '55px'}
    changeBorderList(obj)
}else{

    let obj = {border: "", height: ""}
    changeBorderList(obj)
}


menuResponsive()