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