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