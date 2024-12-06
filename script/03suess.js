const suessList = {
    containerId: '#suess',
    array: preisSuess,
    total: () => preisSuessTotal
};

const suessContainer = document.querySelector(suessList.containerId);
if (suessContainer) {
    suessContainer.addEventListener('click', function (event) {
        const button = event.target;

        const allButtons = suessContainer.querySelectorAll('button');
        if (![...allButtons].includes(button)) {
            return;
        }

        if (button.classList.contains('hinzufuegen')) {
            addProduct(button, suessList);
        } else if (button.classList.contains('entfernen')) {
            removeProduct(button, suessList);
        }

        updateTotal();
    });
}

function addProduct(button, productList) {
    const preisProduct = button.closest('.product-info')?.querySelector('.preis');
    if (preisProduct) {
        const preisText = preisProduct.textContent.trim();
        const preisNumber = parseFloat(preisText.replace('€', '').replace(',', '.'));
        if (!isNaN(preisNumber)) {
            productList.array.push(preisNumber);
            updateTotalForContainer(productList.containerId, preisNumber);
        }
    }

    button.classList.remove('hinzufuegen');
    button.classList.add('entfernen');
    button.innerHTML = 'entfernen';

    const productContainer = button.closest('.product-container');
    if (productContainer) {
        productContainer.classList.add('entfernen-container');
    }
}

function removeProduct(button, productList) {
    const preisProduct = button.closest('.product-info')?.querySelector('.preis');
    if (preisProduct) {
        const preisText = preisProduct.textContent.trim();
        const preisNumber = parseFloat(preisText.replace('€', '').replace(',', '.'));
        if (!isNaN(preisNumber)) {
            updateTotalForContainer(productList.containerId, -preisNumber);
        }
    }

    button.classList.remove('entfernen');
    button.classList.add('hinzufuegen');
    button.innerHTML = 'hinzufügen';

    const productContainer = button.closest('.product-container');
    if (productContainer) {
        productContainer.classList.remove('entfernen-container');
    }

    productList.array.length = 0;
}

function updateTotalForContainer(containerId, preisNumber) {
    if (containerId === '#suess') preisSuessTotal += preisNumber;
}
