//Elementos del DOM a utilizar.
let gallery     = document.getElementById('gallery')
let container   = document.getElementById('container')
let list_images = [...document.getElementsByClassName('gallery__item')]


//Control de images al mostrarlas.
let currentImage    = null;   //Guarda imagen clickeada, actual
let nextImage       = null;   //Guarda imagen siguiente a clickeada
let preiousImage    = null;   //Guarda imagen anterior  a clickeada


//guarda el evento al dar click sobre cualquier imagen. con delegacion de eventos [gallery]
let eventImage = null;     

/*Si La pantalla tiene al menos 1000 píxeles de ancho */
if (window.matchMedia("(min-width: 1000px)").matches) {


//Evento para todas las imagenes. [gallery]
gallery.addEventListener('click', e =>{
    let htmlClass = e.target.classList.contains('gallery__item')

    if(htmlClass){
        viewImage(e)
        eventImage = e
        //currentImage = indexOfImage(e.target.getAttribute('src'))
        console.log(currentImage)
    }
})

container.addEventListener('click', (e,)=>{
    let button_overview = e.target.classList.value

    switch(button_overview){
        case "icon__gallery--close":
            container.style.visibility= 'hidden';
            break;
        case "icon__gallery--previous":

            break;

        case "icon__gallery--next":

            break;

        case "img__view":
            break;

        default:
            container.style.visibility= 'hidden';
    }
})

}

function viewImage(e){
    let image = e.target.getAttribute('src')
    container.style.visibility= 'visible'
    container.innerHTML = `                
    <div id="iconGalleryClose" class="icon__gallery--close" ></div>
    <img src="${image}" class="img__view">`
}


//Busca el indice donde esta la imagen clickeada, apartir del src, para saber cual esta antes y dspues en el array
/* No funciona si las imagenes tienen el mismo nombre. index of regresa la primera conincidencia.
function indexOfImage(srcImg){
    for(let i =0; i< list_images.length; i++){
        if(list_images[i].getAttribute('src') == srcImg){
            let actual=0
            let siguiente=0
            let anteior=0

            actual = i
            siguiente = actual +1
            anteior = actual -1;
            
            if(i==0){
                anteior = list_images.length-1
            }else if(i == list_images.length-1){
                siguiente = 0
            }
            return {current: actual, previous: anteior, next: siguiente}
        }
    }
}*/
