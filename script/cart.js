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

    const arrayPriceText = [fruechtePriceText, suessPriceText, nuessePriceText, superfoodsPriceText];
    const arrayPrice = [preisFruechteTotal, preisSuessTotal, preisNuesseTotal, preisSuperfoodsTotal];

    const totalPrice = document.querySelector('.total-price');

    if (preisBasis > 0) {
        basisPriceText.innerHTML = `${preisBasis.toFixed(2) + '€'}`;
    } else {
        basisPriceText.innerHTML = '';
    }

    if (preisFluessigkeit > 0) {
        fluessigkeitPriceText.innerHTML = `${preisFluessigkeit.toFixed(2) + '€'}`;
    } else {
        fluessigkeitPriceText.innerHTML = '';
    }


    for (let i = 0; i < arrayPrice.length; i++) {
        if (arrayPrice[i] > 0) {
            arrayPriceText[i].innerHTML = `${arrayPrice[i].toFixed(2)}€`;
        } else {
            arrayPriceText[i].innerHTML = '';
        }
    }



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