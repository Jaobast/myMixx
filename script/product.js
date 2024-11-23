const productListBasis = document.querySelector('#basis .product-list');
const productListFruechte = document.querySelector('#fruechte .product-list');
const productListSuess = document.querySelector('#suess .product-list');
const productListNuesse = document.querySelector('#nuesse .product-list');
const productListSuperfoods = document.querySelector('#superfood .product-list');
const productListFluessigkeit = document.querySelector('#fluessigkeit .product-list');

const arrayProductList = [arrayBasis, arrayFruechte, arraySuess, arrayNuesse, arraySuperfoods, arrayFluessigkeit];

const preisBasis = [];
let priceTotal = preisBasis;




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
                   <p class='menge'>100g</p>
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

                <div class="preis-container">
                   <p class='menge'>20g</p>
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
            
                <div class="preis-container">
                   <p class='menge'>20g</p>
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

                <div class="preis-container">
                   <p class='menge'>20g</p>
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

                <div class="preis-container">
                   <p class='menge'>20g</p>
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

                <div class="preis-container">
                   <p class='menge'>20g</p>
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



// SELECT   SELECT   SELECT   SELECT   SELECT   SELECT   SELECT   SELECT  

const selectMenge = document.querySelectorAll('.select-menge');

selectMenge.forEach(element => {
    element.addEventListener('change', (e) => {
        const mengeProduct = element.closest('.product-info').querySelector('.menge');
        const preisProduct = element.closest('.product-info').querySelector('.preis');
        const button = element.closest('.product-info').querySelector('button.entfernen');
        const preisKlein = parseFloat(preisProduct.dataset.preis).toFixed(2);
        const preisMedium = (preisKlein * 2).toFixed(2);
        const preisGroß = (preisKlein * 3).toFixed(2);

        let newPreis;

        if (element.value === 'medium') {
            mengeProduct.innerHTML = '200g';
            newPreis = preisMedium;
        } else if (element.value === 'groß') {
            mengeProduct.innerHTML = '300g';
            newPreis = preisGroß;
        } else {
            mengeProduct.innerHTML = '100g';
            newPreis = preisKlein;
        }

        preisProduct.innerHTML = `${newPreis}€`;

        if (button && button.classList.contains('entfernen')) {
            preisBasis.length = 0;
            preisBasis.push(parseFloat(newPreis));
        }
    });
});



// MENGE   MENGE   MENGE   MENGE   MENGE  MENGE   MENGE   MENGE   MENGE   MENGE  

const buttonMengePlus = document.querySelectorAll('.plus');
const buttonMengeMinus = document.querySelectorAll('.minus');

buttonMengePlus.forEach(element => {
    element.addEventListener('click', () => {
        const mengeProduct = element.closest('.product-info').querySelector('.menge');
        const preisProduct = element.closest('.product-info').querySelector('.preis');

        const preisPortion = parseFloat(preisProduct.dataset.preis).toFixed(2);
        const mengePortion = 20;

        const anzahlContainer = element.closest('.anzahl');
        const anzahlPortion = anzahlContainer.querySelector('.nummer');
        let anzahl = parseInt(anzahlPortion.textContent) || 1;


        if (anzahl < 3) {
            anzahl++;
            anzahlPortion.textContent = `${anzahl} Portion${anzahl > 1 ? 'en' : ''}`;
            preisProduct.innerHTML = `${(preisPortion * anzahl).toFixed(2) + '€'}`;
            mengeProduct.innerHTML = `${(mengePortion * anzahl) + 'g'}`;
        }
    });
});

buttonMengeMinus.forEach(element => {
    element.addEventListener('click', () => {
        const mengeProduct = element.closest('.product-info').querySelector('.menge');
        const preisProduct = element.closest('.product-info').querySelector('.preis');

        const preisPortion = parseFloat(preisProduct.dataset.preis).toFixed(2);
        const mengePortion = 20;

        const anzahlContainer = element.closest('.anzahl');
        const anzahlPortion = anzahlContainer.querySelector('.nummer');
        let anzahl = parseInt(anzahlPortion.textContent) || 1;

        if (anzahl > 1) {
            anzahl--;
            anzahlPortion.textContent = `${anzahl} Portion${anzahl > 1 ? 'en' : ''}`;
            preisProduct.innerHTML = `${(preisPortion * anzahl).toFixed(2) + '€'}`;
            mengeProduct.innerHTML = `${(mengePortion * anzahl) + 'g'}`;
        }
    });
});


// HINZUFUEGEN   HINZUFUEGEN   HINZUFUEGEN   HINZUFUEGEN   HINZUFUEGEN   HINZUFUEGEN   HINZUFUEGEN   


document.addEventListener('click', function (event) {
    const button = event.target;

    if (!button.classList.contains('hinzufuegen') && !button.classList.contains('entfernen')) {
        return;
    }

    const basisDiv = document.querySelector('#basis');
    const allButtons = basisDiv.querySelectorAll('button');

    if (button.classList.contains('hinzufuegen')) {
        preisBasis.length = 0;

        allButtons.forEach((btn) => {
            if (btn.classList.contains('entfernen')) {
                btn.classList.add('hinzufuegen');
                btn.innerHTML = 'hinzufügen';

                const productContainer = btn.closest('.product-container');
                if (productContainer) {
                    productContainer.classList.remove('entfernen-container');
                }

                btn.classList.remove('entfernen');
            }
        });

        button.classList.add('entfernen');
        button.innerHTML = 'entfernen';

        const productContainer = button.closest('.product-container');
        if (productContainer) {
            productContainer.classList.add('entfernen-container');
        }

        button.classList.remove('hinzufuegen');

        const preisProduct = button.closest('.product-info')?.querySelector('.preis');
        if (preisProduct) {
            const preisText = preisProduct.textContent.trim();
            const preisNumber = parseFloat(preisText.replace('€', '').replace(',', '.'));
            if (!isNaN(preisNumber)) {
                preisBasis.push(preisNumber);
            }
        }
    } else if (button.classList.contains('entfernen')) {
        button.classList.add('hinzufuegen');
        button.innerHTML = 'hinzufügen';

        const productContainer = button.closest('.product-container');
        if (productContainer) {
            productContainer.classList.remove('entfernen-container');
        }

        button.classList.remove('entfernen');
        preisBasis.length = 0;
        console.log(preisBasis);
    }
});



