//variables 
const carrito = document.getElementById('carrito');
const cursos = document.getElementById('lista-cursos');

cargarEventListeners();

//listeners

function cargarEventListeners() {
    //Dispara cuando se presiona "Agregar Carrito"
    cursos.addEventListener('click', comprarCurso);
}

//Funciones
function comprarCurso(e){
    e.preventDefault();

    if(e.target.classList.contains('agregar-carrito')){
        const curso = e.target.parentElement.parentElement;
        console.log(curso);
    }

}
