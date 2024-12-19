const btnCart = document.getElementById('cart');
const belegContainer = document.querySelector('.beleg-background');
const body = document.body;


btnCart.addEventListener('click', (e) => {
    belegContainer.classList.remove('hidden');
    body.classList.add('no-scroll');

    showPrice();
    
});


document.addEventListener('click', (e) => {
    if (!belegContainer.classList.contains('hidden') && e.target !== btnCart && e.target == belegContainer) {
        belegContainer.classList.add('hidden');
        body.classList.remove('no-scroll');
    }
});


function showPrice() {
    updateTotal()

    const basisPriceText = document.querySelector('.basis-price');
    const fluessigkeitPriceText = document.querySelector('.fluessigkeit-price');


    if (preisBasis > 0) {
        priceContainer1.classList.remove('hidden');
        basisPriceText.innerHTML = `${preisBasis.toFixed(2) + '€'}`;
    } else {
        priceContainer1.classList.add('hidden');
    }

    if (preisFluessigkeit > 0) {
        priceContainer6.classList.remove('hidden');
        fluessigkeitPriceText.innerHTML = `${preisFluessigkeit.toFixed(2) + '€'}`;
    } else {
        priceContainer6.classList.add('hidden');
    }
}

