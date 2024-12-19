const productListBasis = document.querySelector('#basis .product-list');
const productListFruechte = document.querySelector('#fruechte .product-list');
const productListSuess = document.querySelector('#suess .product-list');
const productListNuesse = document.querySelector('#nuesse .product-list');
const productListSuperfoods = document.querySelector('#superfood .product-list');
const productListFluessigkeit = document.querySelector('#fluessigkeit .product-list');

const arrayProductList = [arrayBasis, arrayFruechte, arraySuess, arrayNuesse, arraySuperfoods, arrayFluessigkeit];




const carrouselContainer = document.querySelectorAll('.product-list-absolute');
const carrouselBttnNext = document.getElementById('carroussel-next');
const carrouselBttnLast = document.getElementById('carroussel-last');


arrayBasis.forEach(product => {
    productListBasis.innerHTML += `
        <div class="product-container swiper-slide">
            <p class="product-name">${product.name}</p>
            ${product.info ? `<p class="product-name-detail">${product.info}</p>` : ''}
            <div class="product-info">
                <img src = "${product.pic}">
                <div class="preis-container">
                   <p class='menge'>${product.amount}g</p>
                   <p class='preis' data-preis="${product.preis}">${product.preis.toFixed(2)}€</p>
                </div>

                <div class="select-container">
                   <select class="select-menge">
                      <option value = "klein">klein</option>
                      <option value = "medium">medium</option>
                      <option value = "groß">groß</option>
                    </select>
                    <div class="icon-container">   <i class="fa-solid fa-chevron-down"></i>   </div>
                </div>

                <button class="hinzufuegen">hinzufügen</button>
            </div>
        </div>
    `;
});

arrayFruechte.forEach(product => {
    productListFruechte.innerHTML += `
        <div class="product-container swiper-slide">
            <p class="product-name">${product.name}</p>
            ${product.info ? `<p class="product-name-detail">${product.info}</p>` : ''}
            <div class="product-info">
                <img src = "${product.pic}">
                <div class="preis-container">
                   <p class='menge'>${product.amount}g</p>
                   <p class='preis' data-preis="${product.preis}">${product.preis.toFixed(2)}€</p>
                </div>

                <div class="anzahl">
                   <button class="minus">-</button>
                   <p class="nummer">1 Portion</p>
                   <button class="plus">+</button>
                </div>
                <button class="hinzufuegen">hinzufügen</button>
            </div>
        </div>
    `;
});

arraySuess.forEach(product => {
    productListSuess.innerHTML += `
        <div class="product-container swiper-slide">
            <p class="product-name">${product.name}</p>
            ${product.info ? `<p class="product-name-detail">${product.info}</p>` : ''}
            <div class="product-info">
                <img src = "${product.pic}">
                <div class="preis-container">
                   <p class='menge'>${product.amount}${product.unit}</p>
                   <p class='preis' data-preis="${product.preis}">${product.preis.toFixed(2)}€</p>
                </div>

                <div class="anzahl">
                  <button class="minus">-</button>
                  <p class="nummer">1 Portion</p>
                  <button class="plus">+</button>
                </div>
                <button class="hinzufuegen">hinzufügen</button>
            </div>
        </div>
    `;
});

arrayNuesse.forEach(product => {
    productListNuesse.innerHTML += `
        <div class="product-container swiper-slide">
            <p class="product-name">${product.name}</p>
            ${product.info ? `<p class="product-name-detail">${product.info}</p>` : ''}
            <div class="product-info">
                <img src = "${product.pic}">
                <div class="preis-container">
                   <p class='menge'>${product.amount}g</p>
                   <p class='preis' data-preis="${product.preis}">${product.preis.toFixed(2)}€</p>
                </div>

                <div class="anzahl">
                  <button class="minus">-</button>
                  <p class="nummer">1 Portion</p>
                  <button class="plus">+</button>
                </div>
                <button class="hinzufuegen">hinzufügen</button>
            </div>
        </div>
    `;
});

arraySuperfoods.forEach(product => {
    productListSuperfoods.innerHTML += `
        <div class="product-container swiper-slide">
            <p class="product-name">${product.name}</p>
            ${product.info ? `<p class="product-name-detail">${product.info}</p>` : ''}
            <div class="product-info">
                <img src = "${product.pic}">
                <div class="preis-container">
                   <p class='menge'>${product.amount}${product.unit}</p>
                   <p class='preis' data-preis="${product.preis}">${product.preis.toFixed(2)}€</p>
                </div>

                <div class="anzahl">
                   <button class="minus">-</button>
                   <p class="nummer">1 Portion</p>
                   <button class="plus">+</button>
                </div>
                <button class="hinzufuegen">hinzufügen</button>
            </div>
        </div>
    `;
});

arrayFluessigkeit.forEach(product => {
    productListFluessigkeit.innerHTML += `
        <div class="product-container swiper-slide">
            <p class="product-name">${product.name}</p>
            ${product.info ? `<p class="product-name-detail">${product.info}</p>` : ''}
            <div class="product-info">
                <img src = "${product.pic}">
                <div class="preis-container">
                   <p class='menge'>${product.amount}${product.unit}</p>
                   <p class='preis' data-preis="${product.preis}">${product.preis.toFixed(2)}€</p>
                </div>

                    <div class="select-container">
                       <select class="select-menge">
                          <option value = "klein">klein</option>
                          <option value = "medium">medium</option>
                          <option value = "groß">groß</option>
                    </select>
                    <div class="icon-container">   <i class="fa-solid fa-chevron-down"></i>   </div>
                </div>

                <button class="hinzufuegen">hinzufügen</button>
            </div>
        </div>
    `;
});



//Flicker  Flicker  Flicker  Flicker  Flicker  Flicker  Flicker  
document.addEventListener('DOMContentLoaded', () => {
    arrayContainer.forEach(container => {
        container.classList.remove('hidden');
    });

    setTimeout(() => {
        arrayContainer.forEach(container => {
            container.classList.add('hidden');
        });

        valueNummer = 0;
        arrayContainer[valueNummer].classList.remove('hidden');
        arrayBttn[valueNummer].classList.add('chosen');
    }, 500);
});