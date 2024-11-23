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
    console.log(preisBasis);

    const basisPrice = document.querySelector('.basis-price');
    const totalPrice = document.querySelector('.total-price');

    if (preisBasis.length > 0) {
        basisPrice.innerHTML = `${preisBasis[0].toFixed(2) + '€'}`;
    } else {
        basisPrice.innerHTML = '0.00€';
    }

    if (priceTotal > 0) {
        totalPrice.innerHTML = `${priceTotal[0].toFixed(2) + '�