//FRUECHTE   FRUECHTE   FRUECHTE   FRUECHTE   FRUECHTE   FRUECHTE   FRUECHTE

let nameFruechte = [];
let preisFruechte = [];

const priceContainer2 = document.querySelector('.price-container2');

const fruechteList = {
    containerId: '#fruechte',
    nameArray: nameFruechte,
    preisArray: preisFruechte,
    priceContainer: priceContainer2,
    fase: 'fruechte'
};

const bttnFruechte = productListFruechte.querySelectorAll('.hinzufuegen');
bttnFruechte.forEach(button => {
    button.addEventListener('click', (event) => addAndRemove(event, fruechteList));
});


const plusFruechte = productListFruechte.querySelectorAll('.plus');
plusFruechte.forEach(element => {
    element.addEventListener('click', function() {buttonPlus(this, fruechteList);});
});


const minusFruechte = productListFruechte.querySelectorAll('.minus');
minusFruechte.forEach(element => {
    element.addEventListener('click', function() {buttonMinus(this, fruechteList);});
});



//SUESS   SUESS   SUESS   SUESS   SUESS   SUESS   SUESS   SUESS   SUESS   SUESS   


let nameSuess = [];
let preisSuess = [];

const priceContainer3 = document.querySelector('.price-container3');

const suessList = {
    containerId: '#suess',
    nameArray: nameSuess,
    preisArray: preisSuess,
    priceContainer: priceContainer3,
    fase: 'suess'
};

const bttnSuess = productListSuess.querySelectorAll('.hinzufuegen');
bttnSuess.forEach(button => {
    button.addEventListener('click', (event) => addAndRemove(event, suessList));
});



const plusSuess = productListSuess.querySelectorAll('.plus');
plusSuess.forEach(element => {
    element.addEventListener('click', function() { buttonPlus(this, suessList);});
});


const minusSuess = productListSuess.querySelectorAll('.minus');
minusSuess.forEach(element => {
    element.addEventListener('click', function() {buttonMinus(this, suessList);});
});



//NUESSE   NUESSE   NUESSE   NUESSE   NUESSE   NUESSE   NUESSE   NUESSE   NUESSE   

let nameNuesse = [];
let preisNuesse = [];

const priceContainer4 = document.querySelector('.price-container4');

const nuesseList = {
    containerId: '#nuesse',
    nameArray: nameNuesse,
    preisArray: preisNuesse,
    priceContainer: priceContainer4,
    fase: 'nuesse'
};

const bttnNuesse = productListNuesse.querySelectorAll('.hinzufuegen');
bttnNuesse.forEach(button => {
    button.addEventListener('click', (event) => addAndRemove(event, nuesseList));
});


const plusNuesse = productListNuesse.querySelectorAll('.plus');
plusNuesse.forEach(element => {
    element.addEventListener('click', function() { buttonPlus(this, nuesseList);});
});


const minusNuesse = productListNuesse.querySelectorAll('.minus');
minusNuesse.forEach(element => {
    element.addEventListener('click', function() {buttonMinus(this, nuesseList);});
});





//SUPERFOODS   SUPERFOODS   SUPERFOODS   SUPERFOODS   SUPERFOODS   SUPERFOODS   

let nameSuperfoods = [];
let preisSuperfoods = [];

const priceContainer5 = document.querySelector('.price-container5');

const superfoodsList = {
    containerId: '#superfoods',
    nameArray: nameSuperfoods,
    preisArray: preisSuperfoods,
    priceContainer: priceContainer5,
    fase: 'superfoods'
};

const bttnSuperfoods = productListSuperfoods.querySelectorAll('.hinzufuegen');
bttnSuperfoods.forEach(button => {
    button.addEventListener('click', (event) => addAndRemove(event, superfoodsList));
});


const plusSuperfoods = productListSuperfoods.querySelectorAll('.plus');
plusSuperfoods.forEach(element => {
    element.addEventListener('click', function() { buttonPlus(this, superfoodsList);});
});


const minusSuperfoods = productListSuperfoods.querySelectorAll('.minus');
minusSuperfoods.forEach(element => {
    element.addEventListener('click', function() {buttonMinus(this, superfoodsList);});
});