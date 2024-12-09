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
                <img src = "${product.pic}">
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
                <img src = "${product.pic}">
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
                <img src = "${product.pic}">
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
                <img src = "${product.pic}">
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
                <img src = "${product.pic}">
                <div class="preis-container">
                   <p class='menge'>20g</p>
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
            const productContainer = element.closest('.product-container');
        
            if (productContainer.closest('#basis')) {
                preisBasis = parseFloat(newPreis);
            } else if (productContainer.closest('#fluessigkeit')) {
                preisFluessigkeit = parseFloat(newPreis);
                console.log('mudou');
                
            }
            
            updateTotal();
        }
    });
});



// MENGE   MENGE   MENGE   MENGE   MENGE  MENGE   MENGE   MENGE   MENGE   MENGE  




/* buttonMengeMinus.forEach(element => {
    element.addEventListener('click', () => {
        const mengeProduct = element.closest('.product-info').querySelector('.menge');
        const preisProduct = element.closest('.product-info').querySelector('.product-name');

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
        updateTotal()
    });
}); */