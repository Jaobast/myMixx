const priceContainer1 = document.querySelector('.price-container1');

let preisBasis = 0;
let nameBasis = '';

const nameBasisText = document.querySelector('.basis-name');


productListBasis.addEventListener('click', function (event) {
    const button = event.target;

    const basisDiv = document.querySelector('#basis');
    const allBasisButtons = basisDiv.querySelectorAll('button');
    
    if (![...allBasisButtons].includes(button)) {
        return;
    }

    if (!button.classList.contains('hinzufuegen') && !button.classList.contains('entfernen')) {
        return;
    }

    if (button.classList.contains('hinzufuegen')) {
        alarmBasis.classList.add('hidden');
        preisBasis = 0;
        nameBasis = '';

        allBasisButtons.forEach((btn) => {
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
                preisBasis = preisNumber;
                
                const nameProduct = button.closest('.product-container')?.querySelector('.product-name');
                if (nameProduct) {
                    nameBasis = nameProduct.textContent.trim();
                    nameBasisText.innerHTML = nameBasis;
                }
            }
        }

    } else if (button.classList.contains('entfernen')) {
        preisBasis = 0;

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


const deleteBasis = priceContainer1.querySelector('.delete');

deleteBasis.addEventListener('click', () =>{
    priceContainer1.classList.add('hidden');
    preisBasis = 0;
    updateTotal();

    const productContainerDivs = document.querySelectorAll('.product-container');

    productContainerDivs.forEach(container => {
        const productNameElement = container.querySelector('.product-name');
        const bttn = container.querySelector('button');
    
        if (productNameElement && productNameElement.innerHTML.trim() === nameBasis) {
            container.classList.remove('entfernen-container');

            bttn.classList.remove('entfernen');
            bttn.classList.add('hinzufuegen');
            bttn.innerHTML = 'hinzufügen';

        }
    });

})












const selectBasis = productListBasis.querySelectorAll('.select-menge');
selectBasis.forEach(element => {
    let numberAmount = 1;
    element.addEventListener('change', (event) => {
        numberAmount = selectAmount(element, preisBasis, nameBasis, numberAmount);
    });
});



function selectAmount(element, preisProduct, nameProduct, numberAmount) {
    const amountText = element.closest('.product-info').querySelector('.menge');
    let amount = parseInt(amountText.textContent);

    amount = amount / numberAmount;

    const preisText = element.closest('.product-info').querySelector('.preis');
    let preis = parseFloat(preisText.innerHTML.replace('€', '').trim());

    preis = preis / numberAmount;

    const button = element.closest('.product-info').querySelector('button.entfernen');

    const amountMedium = amount * 2;
    const amountGroß = amount * 3;

    const preisMedium = preis * 2;
    const preisGroß = preis * 3;

    if (element.value === 'medium') {
        if (amountText.innerHTML.includes('ml')) {
            amountText.innerHTML = `${amountMedium}ml`;
        } else {
            amountText.innerHTML = `${amountMedium}g`;
        }
        
        preisProduct = parseFloat(preisMedium.toFixed(2));

        numberAmount = 2;
    } else if (element.value === 'groß') {
        if (amountText.innerHTML.includes('ml')) {
            amountText.innerHTML = `${amountGroß}ml`;
        } else {
            amountText.innerHTML = `${amountGroß}g`;
        }
        
        preisProduct = parseFloat(preisGroß.toFixed(2));

        numberAmount = 3;
    } else {
        if (amountText.innerHTML.includes('ml')) {
            amountText.innerHTML = `${amount}ml`;
        } else {
            amountText.innerHTML = `${amount}g`;
        }

        preisProduct = parseFloat(preis.toFixed(2));

        numberAmount = 1;
    }

    preisText.innerHTML = `${preisProduct.toFixed(2)}€`;

    if (button && button.classList.contains('entfernen')) {
        const productContainer = element.closest('.product-container');

        if (productContainer.closest('#basis')) {
            preisBasis = parseFloat(preisProduct);
        } else if (productContainer.closest('#fluessigkeit')) {
            preisFluessigkeit = parseFloat(preisProduct);
        }

        updateTotal();
    }
    return numberAmount;
 
}
