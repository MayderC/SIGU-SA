
let img_dom = document.getElementById('img_cam');

/*
** Comentario de la funcion: Las imagenes dependen del contador, 
** que es un number entero las imaganes tienen un nombre de cam[numero].svg
** Los numeros van del 0 al 3 en el nombre de las imagenes, por lo que que si
** se modifica la variable cont en el codigo. puede dar error porque podria 
** no encontrar el recurso o imagen en este caso. se permite por ser un trabajo pequeño.
*/
function moveImg(){
    let tiempo = 1000
    let cont =1;
    let change_img = setInterval(() => {
        img_dom.setAttribute('src', `assets/img/cam${cont}.svg`)
        if(cont == 3){
            clearInterval(change_img)
        }
        cont++
    }, tiempo);
}

//Evento disparador de la función anterior...
img_dom.onmouseover = () =>{
    moveImg()
}


/*  Quitar border top cuando estq pequeña la pantalla y activar cuando esta grande. */
/* Pasos:
1. Ver en que tamaño estoy. variable bandera que indique si esta activo el modo responsive o no.
2. si esta activo, quitar top border y agrandar alto del elemento lista.
3. si esta desactivado, colocar border-top al elemento li.
*/

const configuracion = {
    IP: 'http://127.0.0.1:5500/assets/img/cam0.svg'
}


let {IP} = configuracion;
const svg_content = document.getElementById('svg_add');
fetch(IP)
    .then(r => r.text())
    .then(text => {

        svg_content.innerHTML = text
        let svg = document.getElementById('eedf7e36-f7ba-41f3-811a-5462d78ed19b')

        svg_content.onclick = () =>{
            svg.childNodes[37].setAttribute('cx', '450' )
        }
    })
    .catch(console.error.bind(console));