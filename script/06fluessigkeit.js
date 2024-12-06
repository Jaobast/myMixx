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