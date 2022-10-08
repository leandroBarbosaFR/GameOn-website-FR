function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += "responsive";
  } else {
    x.className = "topnav";
  }
}

// DOM elements const
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");
const closeBtn = document.querySelectorAll(".close");
const closeMsg = document.querySelector(".message");
const submitBtn = document.querySelector(".btn-submit");


const form = document.getElementById("form");
const firstName = document.getElementById("firstName");
const lastName = document.getElementById("lastName");
const email = document.getElementById("email");
const birthdate = document.getElementById("birthdate");
const tournaments = document.getElementById("tournaments");

// regex
const nameRegex = /^[A-Z a-z]{2,25}$/;
const emailRegex = /^\w+([.-]?\w+)@\w+([.-]?\w+)(.\w{2,3})+$/;
const birthdateRegex = /^\d{4}\-(0?[1-9]|1[012])\-(0?[1-9]|[12][0-9]|3[01])$/;



// messages
const messagesErrors = {
  lastNameMsg1: "Le Nom doit comporter au moins deux caractères",
  lastNameMsg2: "Le Nom doit être composé de lettres",
  firstNameMsg1: "Le Nom doit comporter au moins deux caractères",
  firstNameMsg2: "Le Nom doit être composé de lettres",
  emailMsg: "Veuillez entrer une adresse mail valide",
  birthdateMsg: "Veuillez entrer une date de naissance valide",
  tounamentsMsg: "Veuillez entrer un nombre de tournois",
  locationMsg: "Veuillez séléctionner une ville",
  checkboxMsg: "Veuillez cocher accepter les conditions d'utilisation"
}

// add modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));


// close modal event (désactive le display)
closeBtn.forEach((btn) => btn.addEventListener("click", closeModal));

// "none" pour annuler le "block" au lancement de la modale
// reset() remet à zéro le formulaire
function closeModal() {
  modalbg.style.display = "none";
  form.reset();
}

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}


// confirmation
// désactive le formulaire de base et bloque celui du message de confirmation
function confirmation() {
  document.querySelector(".modal-body").style.display = "none";
  document.querySelector(".confirmation").style.display = "block";
}

// formData[] pour ne pas les lister directement dans le HTML
// lastName
formData[0].addEventListener("input", lastNameValid);
function lastNameValid() {
  if (firstName.value.trim() == "" || firstName.value.length <= 1) {

    let firstNameError = document.getElementById("firstname-message");
    firstNameError.innerHTML = messagesErrors.firstNameMsg1;

    return false;

  } else if (nameRegex.test(firstName.value) == false) {

    let firstNameError = document.getElementById("firstname-message");
    firstNameError.innerHTML = messagesErrors.firstNameMsg2;

    return false;


  } else {
    document.getElementById("firstname-message").innerHTML = "";
    return true;
  }
}

// firstName
formData[1].addEventListener("input", firstNameValid);
function firstNameValid() {
  if (lastName.value.trim() == "" || lastName.value.length <= 1) {

    let lastNameError = document.getElementById("lastname-message");
    lastNameError.innerHTML = messagesErrors.lastNameMsg1;

    return false;


  } else if (nameRegex.test(lastName.value) == false) {

    let lastNameError = document.getElementById("lastname-message");
    lastNameError.innerHTML = messagesErrors.lastNameMsg2;

    return false;


  } else {
    document.getElementById("lastname-message").innerHTML = "";
    return true;
  }
}

// email
formData[2].addEventListener("input", emailValid);
function emailValid() {
  if (emailRegex.test(email.value) == false) {

    let emailError = document.getElementById("email-message");
    emailError.innerHTML = messagesErrors.emailMsg;

    return false;


  } else {
    document.getElementById("email-message").innerHTML = "";
    return true;
  }
}

// birthdate
formData[3].addEventListener("input", birthdateValid);
function birthdateValid() {
  if (birthdateRegex.test(birthdate.value) == false) {

    let birthdateError = document.getElementById("birthdate-message");
    birthdateError.innerHTML = messagesErrors.birthdateMsg;

    return false;


  } else {
    document.getElementById("birthdate-message").innerHTML = "";
    return true;
  }
}

// tournaments
formData[4].addEventListener("input", tournamentsValid);
function tournamentsValid() {
  if (tournaments.value.trim() == "" || tournaments.value.length < 1) {

    let tournamentsError = document.getElementById("tournaments-message");
    tournamentsError.innerHTML = messagesErrors.tounamentsMsg;

    return false;


  } else {
    document.getElementById("tournaments-message").innerHTML = "";
    return true;
  }
}

// location
formData[5].addEventListener("input", locationValid);
function locationValid() {
  if (!form.location.value) {

    let locationError = document.getElementById("location-message");
    locationError.innerHTML = messagesErrors.locationMsg;

    return false;


  } else {
    document.getElementById("location-message").innerHTML = "";
    return true;
  }
}

//checkboxs
formData[6].addEventListener("input", checkboxValid);
function checkboxValid() {
  if (!form.checkbox1.checked) {

    let checkboxError = document.getElementById("checkbox-message");
    checkboxError.innerHTML = messagesErrors.checkboxMsg;

    return false;


  } else {
    document.getElementById("checkbox-message").innerHTML = "";
    return true;
  }
}

// validate
// au clique du bouton, lancer la function validate()
// preventdefault() pour bloquer le comportement du clique par défaut et rester
// sur le formulaire
submitBtn.addEventListener("click", validate);

function validate(e) {
  e.preventDefault();
  if (
    firstNameValid() == true &&
    lastNameValid() == true &&
    emailValid() == true &&
    birthdateValid() == true &&
    tournamentsValid() == true &&
    locationValid() == true &&
    checkboxValid() == true
  ) {
    confirmation();
  }
  // sinon return false et affiche les messages d'erreurs
  else {
    firstNameValid(),
      lastNameValid(),
      emailValid(),
      birthdateValid(),
      tournamentsValid(),
      locationValid(),
      checkboxValid();
  }
}
