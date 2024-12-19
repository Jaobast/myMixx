const priceContainer6 = document.querySelector('.price-container6');
let preisFluessigkeit = 0;
let nameFluessigkeit = '';

productListFluessigkeit.addEventListener('click', function (event) {
    const button = event.target;

    const fluessigkeitDiv = document.querySelector('#fluessigkeit');
    const allFluessigkeitButtons = fluessigkeitDiv.querySelectorAll('button');
    
    if (![...allFluessigkeitButtons].includes(button)) {
        return;
    }

    if (!button.classList.contains('hinzufuegen') && !button.classList.contains('entfernen')) {
        return;
    }

    if (button.classList.contains('hinzufuegen')) {
        alarmFlusssigkeit.classList.add('hidden');
        preisFluessigkeit = 0;

        allFluessigkeitButtons.forEach((btn) => {
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
                preisFluessigkeit = preisNumber;

                const nameProduct = button.closest('.product-container')?.querySelector('.product-name');
                if (nameProduct) {
                    nameFluessigkeit = nameProduct.textContent.trim();
                    const nameFlussigkeitText = document.querySelector('.fluessigkeit-name');
                    nameFlussigkeitText.innerHTML = nameFluessigkeit;
                }
            }
        }

    } else if (button.classList.contains('entfernen')) {
        preisFluessigkeit = 0;

        button.classList.add('hinzufuegen');
        button.innerHTML = 'hinzufügen';

        const productContainer = button.closest('.product-container');
        if (productContainer) {
            productContainer.classList.remove('entfernen-container');
        }

        button.classList.remove('entfernen');
    }

    updateTotal();
});


const deleteFluessigkeit = priceContainer6.querySelector('.delete');

deleteFluessigkeit.addEventListener('click', () =>{
    priceContainer6.classList.add('hidden');
    preisFluessigkeit = 0;
    updateTotal();

    const productContainerDivs = document.querySelectorAll('.product-container');

    productContainerDivs.forEach(container => {
        const productNameElement = container.querySelector('.product-name');
        const bttn = container.querySelector('button');
    
        if (productNameElement && productNameElement.innerHTML.trim() === nameFluessigkeit) {
            container.classList.remove('entfernen-container');

            bttn.classList.remove('entfernen');
            bttn.classList.add('hinzufuegen');
            bttn.innerHTML = 'hinzufügen';

        }
    });
})










const selectFluessigkeit = productListFluessigkeit.querySelectorAll('.select-menge');
selectFluessigkeit.forEach(element => {
    let numberAmount = 1;
    element.addEventListener('change', (event) => {
        numberAmount = selectAmount(element, preisFluessigkeit, nameFluessigkeit, numberAmount);
    });
});