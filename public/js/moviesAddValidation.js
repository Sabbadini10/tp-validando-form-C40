window.addEventListener('load', () => {

    let titulo = document.querySelector('.moviesAddTitulo')
    let formulario = document.querySelector('#formulario');
    let article = document.querySelector('article');
    titulo.innerHTML = 'AGREGAR PELÍCULA';
    titulo.classList.add('titulo');
    article.classList.add('fondoTransparente');
    formulario.classList.add('fondoCRUD');

//------DESDE AQUÍ CONTINÚE CON LAS VALIDACIONES DEL FORMULARIO //
//-------------------DE REGISTRO DE PELÍCULAS------------------//    
let form = document.querySelector('#form');
let inputTitulo = document.getElementById('inputTitle')
let inputRating = document.getElementById('rating')
let inputAwards = document.getElementById('awards')
let inputLength = document.getElementById('length')
let inputRelease_date = document.getElementById('release_date')
let inputGenre_id = document.getElementById('genre_id')


//--------ERROR SPAN ---------------//
let formularioError = document.getElementById('formularioError')
let tituloErrores = document.getElementById('tituloErrores')
let ratingErrores = document.getElementById('ratingErrores')
let awardsErrores = document.getElementById('awardsErrores')
let lengthError = document.getElementById('lengthError')
let release_dateError = document.getElementById('release_dateError')
let genre_idError = document.getElementById('genre_idError')
let erroresUl = document.querySelector('.errores')




console.log('MOLOTOOVV')

inputTitulo.focus();

inputTitulo.addEventListener("blur", function() {
    switch (true) {
      case !this.value:
         inputTitulo.classList.add('is-invalid')
         erroresUl.classList.add('alert-warning')
         erroresUl.innerHTML += "<li>" +  "El campo titulo es obligatorio" + "</li>"
        break;
      default:
        erroresUl.innerHTML = " ";
        erroresUl.classList.remove('alert-warning')
        inputTitulo.classList.add('is-valid')
        inputTitulo.classList.remove('is-invalid')
        break;
    }
  });

  inputRating.addEventListener("blur", function() {
    switch (true) {
      case !this.value:
         inputRating.classList.add('is-invalid');
         erroresUl.classList.add('alert-warning')
         erroresUl.innerHTML += "<li>" +  "El campo rating es obligatorio" + "</li>";
        break;
        case this.value < 0:
         inputRating.classList.add('is-invalid')
         erroresUl.classList.add('alert-warning')
         erroresUl.innerHTML += "<li>" +  "El campo rating tiene que ser mayor a 0" + "</li>";
        break;
        case this.value >= 10:
         inputRating.classList.add('is-invalid')
         erroresUl.classList.add('alert-warning')
         erroresUl.innerHTML += "<li>" +  "El campo rating tiene que ser menor o igual a 10" + "</li>";
        break;
      default:
        erroresUl.innerHTML = " ";
        erroresUl.classList.remove('alert-warning')
        inputRating.classList.add('is-valid')
        inputRating.classList.remove('is-invalid')
        break;
    }
  });

  inputAwards.addEventListener("blur", function() {
    switch (true) {
      case !this.value:
         inputAwards.classList.add('is-invalid')
         erroresUl.classList.add('alert-warning')
         erroresUl.innerHTML += "<li>" +  "El campo awards es obligatorio" + "</li>";
        break;
        case this.value < 0:
        erroresUl.classList.add('alert-warning')
        erroresUl.innerHTML += "<li>" +  "El campo awards tiene que ser mayor a 0" + "</li>";
         inputAwards.classList.add('is-invalid')
        break;
        case this.value >= 10:
        erroresUl.classList.add('alert-warning')
         erroresUl.innerHTML += "<li>" +  "El campo awards tiene que ser menor o igual a 10" + "</li>";
         inputAwards.classList.add('is-invalid')
        break;
      default:
        erroresUl.innerHTML = " ";
        erroresUl.classList.remove('alert-warning')
        inputAwards.classList.add('is-valid')
        inputAwards.classList.remove('is-invalid')
        break;
    }
  });


  inputLength.addEventListener("blur", function() {
    switch (true) {
      case !this.value:
        erroresUl.classList.add('alert-warning')
        erroresUl.innerHTML += "<li>" +  "El campo duracion es obligatoria" + "</li>";
        inputLength.classList.add('is-invalid')
        break;
      default:
        erroresUl.innerHTML = " ";
        erroresUl.classList.remove('alert-warning')
        inputLength.classList.add('is-valid')
        inputLength.classList.remove('is-invalid')
        break;
    }
  });

  inputRelease_date.addEventListener("blur", function() {
    switch (true) {
      case !this.value:
        erroresUl.classList.add('alert-warning')
        erroresUl.innerHTML += "<li>" +  "El campo fecha es obligatoria" + "</li>";
         inputRelease_date.classList.add('is-invalid')
        break;
      default:
        erroresUl.innerHTML = " ";
        erroresUl.classList.remove('alert-warning')
        inputRelease_date.classList.add('is-valid')
        inputRelease_date.classList.remove('is-invalid')
        break;
    }
  });

  inputGenre_id.addEventListener("blur", function() {
    switch (true) {
      case !this.value:
        erroresUl.classList.add('alert-warning')
        erroresUl.innerHTML += "<li>" +  "El campo genero es obligatorio" + "</li>";
         inputGenre_id.classList.add('is-invalid')
        break;
      default:
        erroresUl.innerHTML = " ";
        erroresUl.classList.remove('alert-warning')
        inputGenre_id.classList.add('is-valid')
        inputGenre_id.classList.remove('is-invalid')
        break;
    }
  });


  


  form.addEventListener("submit", (e) => {
    e.preventDefault();

const elements = form.elements;
console.log(elements)
console.log(form)
  for (let i = 0; i < elements.length - 1; i++) {
      if((!elements[i].value.trim() || elements[i].classList.contains('is-inValid')) && elements[i].getAttribute("type") != "reset"){
            elements[i].classList.add('is-invalid')
        formularioError.innerHTML = 'Debes completar los campos';
      }
  }
  alert('La película se guardó satisfactoriamente')
  return form.submit()
});

})