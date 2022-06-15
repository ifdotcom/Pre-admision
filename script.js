let respuestas = document.getElementsByName("respuesta"),
  formulario = document.getElementById("formulario"),
  respuestas1 = document.getElementsByName("respuesta1"),
  resultados = document.getElementById("results");

/*formulario.addEventListener('change',()=>{
respuestas.forEach(opcion=>{
  if(opcion.checked){
    alert(`la respuesta es ${opcion.value}`)
  }
})
respuestas1.forEach(opcion=>{
  if(opcion.checked){
    alert(`la respuesta es ${opcion.value}`)
  }
})
})*/

document.getElementById("boton1").onclick = function (event) {
  event.preventDefault();
  // alert('La respuestas correctas son; Queen, 1977');
  let aciertos = 0;
  let respuestaUno;
  let respuestaDos;

  respuestas.forEach((opcion) => {
    if (opcion.value === "Queen" && opcion.checked) {
      // alert(`la respuesta es ${opcion.value}`)
      // aciertos = aciertos +1

      aciertos++;
    } else if (opcion.checked) {
      // console.log(opcion.value)
      respuestaUno = opcion.value;
    }
  });
  respuestas1.forEach((opcion) => {
    if (opcion.value === "1997" && opcion.checked) {
      //alert(`la respuesta es ${opcion.value}`)
      aciertos++;
    } else if (opcion.checked) {
      // console.log(opcion.value)
      respuestaDos = opcion.value;
    }
  });
  if (aciertos === 2) {
    resultados.innerHTML = "Felicidades!! Acertaste " + aciertos + "/2";
  } else if (aciertos === 1) {
    resultados.innerHTML = " Acertaste " + aciertos + "/2";
  } else {
    resultados.innerHTML = " Acertaste " + aciertos + "/2";
  }
};

// INGRESAR NOMBRE DE USUARIO
let nombre = document.getElementById("nombre"),
  btn = document.getElementById("jugar"),
  nombreUsuario = document.getElementById("nombreUsuario"),
  seccionNombre = document.getElementById("nom");

btn.onclick = function (e) {
  e.preventDefault();

  nombreUsuario.innerHTML = `Hola, ${nombre.value}.`;
  formulario.style.display = "block";
  seccionNombre.style.display = "none";
};
