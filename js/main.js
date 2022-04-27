var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
  return new bootstrap.Tooltip(tooltipTriggerEl)
})

//Get the button
var btnInicio = document.getElementById("inicio");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 500) {
    btnInicio.style.display = "block";
  } else {
    btnInicio.style.display = "none";
  }
}

// FORMULARIO
// definimos el formulario a usar formFile
const formFile = document.getElementById('form');

// definimos el boton a usar submit
const submit = document.getElementById("submit");

// definimos la accion clic al pulsar el boton submit
submit.addEventListener('click', function(event){

    event.preventDefault(); // anulamos que boton nos lleve a otro lado

    //usamos FormData para compilar los datos a enviar
    const formattedFormData = new FormData(formFile); 
    // llamamos a una funcion que enviara los datos,
    // como parametro pasamos los datos del formulario
    postData(formattedFormData);

    document.getElementById("alertaEnviando").style.display = "block";
    document.getElementById("form").reset();

});

// nuestra función personalizada que envia datos y recibe respuesta del servidor
// usamos async/await para trabajar de mejor manera la respuesta por parte del servidor

// en fetch especificamos el archivo en el servidor que captura los datos enviados
async function postData(formattedFormData){
  const response = await fetch('email.php',{
    // el metodo a usar
    method: 'POST',
    // los datos a ser enviados
    body: formattedFormData
  });
   
    document.getElementById("alertaEnviando").style.display = "none";
    document.getElementById("alertaEmail").style.display = "block";
    // data contendra la respuesta del servidor
    // const data = await response.text();

    // y la mostramos en un alert
    // alert(data);

}