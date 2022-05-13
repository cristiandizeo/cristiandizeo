document.addEventListener("DOMContentLoaded", function () {
  let msjEnviado = document.getElementById("msjEnviado");
  let msjNoEnviado = document.getElementById("msjNoEnviado");
  let submit = document.getElementById("submit");
  let btnInicio = document.getElementById("inicio");

  let tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
  let tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
    return new bootstrap.Tooltip(tooltipTriggerEl)
  })

  // When the user scrolls down 20px from the top of the document, show the button
  window.onscroll = function () { scrollFunction() };

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

  submit.addEventListener('click', function (event) {
    // definimos la accion clic al pulsar el boton submit
    if (formFile.checkValidity()) {

      event.preventDefault(); // anulamos que boton nos lleve a otro lado

      //usamos FormData para compilar los datos a enviar
      const formattedFormData = new FormData(formFile);
      // llamamos a una funcion que enviara los datos,
      // como parametro pasamos los datos del formulario
      postData(formattedFormData);

      submit.disabled = true;
      msjEnviado.style.display = "none";
      msjNoEnviado.style.display = "none";
      document.getElementById("alertaEnviando").style.display = "block";

    }
  });

  // nuestra función personalizada que envia datos y recibe respuesta del servidor
  // usamos async/await para trabajar de mejor manera la respuesta por parte del servidor

  // en fetch especificamos el archivo en el servidor que captura los datos enviados
  async function postData(formattedFormData) {
    const response = await fetch('email.php', {
      // el metodo a usar
      method: 'POST',
      // los datos a ser enviados
      body: formattedFormData
    });

    document.getElementById("alertaEnviando").style.display = "none";
    // data contendra la respuesta del servidor
    const data = await response.text();

    if (data == 1) {
      document.getElementById("form").reset();
      msjEnviado.style.display = "block";
    } else {
      msjNoEnviado.style.display = "block";
    }
    submit.disabled = false;
  }

});