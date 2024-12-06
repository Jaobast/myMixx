const superfoodList = {
    containerId: '#superfood',
    array: preisSuperfoods,
    total: () => preisSuperfoodsTotal
};

const superfoodContainer = document.querySelector(superfoodList.containerId);
if (superfoodContainer) {
    superfoodContainer.addEventListener('click', function (event) {
        const button = event.target;

        const allButtons = superfoodContainer.querySelectorAll('button');
        if (![...allButtons].includes(button)) {
            return;
        }

        if (button.classList.contains('hinzufuegen')) {
            addProduct(button, superfoodList);
        } else if (button.classList.contains('entfernen')) {
            removeProduct(button, superfoodList);
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
    if (containerId === '#superfood') preisSuperfoodsTotal += preisNumber;
}
