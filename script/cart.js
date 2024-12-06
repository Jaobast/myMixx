const btnCart = document.getElementById('cart');
const belegContainer = document.querySelector('.beleg-background');
const body = document.body;





document.addEventListener('click', (e) => {
    if (!belegContainer.classList.contains('hidden') && e.target !== btnCart && e.target == belegContainer) {
        belegContainer.classList.add('hidden');
        body.classList.remove('no-scroll');
    }
});


function showPrice() {

    const basisPriceText = document.querySelector('.basis-price');
    const fruechtePriceText = document.querySelector('.fruechte-price');
    const suessPriceText = document.querySelector('.suess-price');
    const nuessePriceText = document.querySelector('.nuesse-price');
    const superfoodsPriceText = document.querySelector('.superfood-price');
    const fluessigkeitPriceText = document.querySelector('.fluessigkeit-price');


    const priceContainer1 = document.querySelector('.price-container1');
    const priceContainer2 = document.querySelector('.price-container2');
    const priceContainer3 = document.querySelector('.price-container3');
    const priceContainer4 = document.querySelector('.price-container4');
    const priceContainer5 = document.querySelector('.price-container5');
    const priceContainer6 = document.querySelector('.price-container6');

    const arrayPriceText = [fruechtePriceText, suessPriceText, nuessePriceText, superfoodsPriceText];
    const arrayPrice = [preisFruechteTotal, preisSuessTotal, preisNuesseTotal, preisSuperfoodsTotal];
    const arrayPriceContainer = [priceContainer2, priceContainer3, priceContainer4, priceContainer5];


    const totalPrice = document.querySelector('.total-price');

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


/*     for (let i = 0; i < arrayPrice.length; i++) {
        if (arrayPrice[i] > 0) {
            arrayPriceContainer[i].classList.remove('hidden');
            arrayPriceText[i].innerHTML = `${arrayPrice[i].toFixed(2)}€`;
        } else {
            arrayPriceContainer[i].classList.add('hidden');
        }
    } */



    if (!isNaN(preisTotal) && preisTotal > 0) {
        totalPrice.innerHTML = `${preisTotal.toFixed(2)}€`;
    } else {
        totalPrice.innerHTML = '0.00€';
    }
}

btnCart.addEventListener('click', (e) => {
    belegContainer.classList.remove('hidden');
    body.classList.add('no-scroll');

    showPrice();
});