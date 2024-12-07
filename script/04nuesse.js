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