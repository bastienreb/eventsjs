
//FONCTIONNALITE NUMERO UNO 
var clickerButton = document.getElementsByTagName("footer")[0];

let clickNumber = 0

var onButtonClick = function(){
	console.log("ohh clique")
//NUMERO BIS
	console.log(++clickNumber + " joker(s) perdu(s)")
}


clickerButton.addEventListener("click",onButtonClick)

//FONCTIONNALITE NUMERO DOS
var toggleMenu = document.getElementsByClassName("navbar-toggler")[0];
var headerMenu = document.getElementById("navbarHeader");

var onHamburgerClick = function (){
	headerMenu.classList.toggle("collapse")
}

toggleMenu.addEventListener("click", onHamburgerClick)

//FONCTIONNALITE NUMERO TRES
var cardElt = document.getElementsByClassName("card")[0];
var buttonElt = cardElt.getElementsByClassName("btn-outline-secondary")[0];


var onCardClick = function (){
	cardElt.style.color = 'red'
}

cardElt.addEventListener("click", onCardClick)

//FONCTIONNALITE NUMERO CUATRO
var cardDosElt = document.getElementsByClassName("card")[1];
var buttonDosElt = cardDosElt.getElementsByClassName("btn-outline-secondary")[0];


var onCardDosClick = function (){
	if (cardDosElt.style.color === 'green'){
		cardDosElt.style.color = '';
	}
	else{
		cardDosElt.style.color = 'green';
	}
}

cardDosElt.addEventListener("click", onCardDosClick)

//FONCTIONNALITE NUMERO CINCO
var Navbar = document.getElementsByClassName("navbar")[0];

var onNavbarDoubleClick = function (){
	if (document.styleSheets[0].disabled === true) {
    document.styleSheets[0].disabled = false;
  } else{
    document.styleSheets[0].disabled = true;
  }
}

Navbar.addEventListener("dblclick", onNavbarDoubleClick)


