const preisFruechte = [];
const preisSuess = [];
const preisNuesse = [];
const preisSuperfoods = [];

let preisBasis = 0;
let preisFruechteTotal = 0;
let preisSuessTotal = 0;
let preisNuesseTotal = 0;
let preisSuperfoodsTotal = 0;
let preisFluessigkeit = 0;

let preisTotal = 0;


function updateTotal() {
    preisTotal = preisBasis + preisFruechteTotal + preisSuessTotal + preisNuesseTotal + preisSuperfoodsTotal;
    document.querySelector('#totalPrice').innerHTML = `${preisTotal.toFixed(2)}€`;
}




// Basis  

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
        preisBasis = 0;

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



// Fluessigkeit

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




// Mehrere Produkte 

const productLists = [
    { containerId: '#fruechte', array: preisFruechte, total: () => preisFruechteTotal },
    { containerId: '#suess', array: preisSuess, total: () => preisSuessTotal },
    { containerId: '#nuesse', array: preisNuesse, total: () => preisNuesseTotal },
    { containerId: '#superfood', array: preisSuperfoods, total: () => preisSuperfoodsTotal }
];

productLists.forEach(productList => {
    const productListContainer = document.querySelector(productList.containerId);
    
    if (productListContainer) {
        productListContainer.addEventListener('click', function (event) {
            const button = event.target;

            // Verifica se o clique foi em um botão dentro da lista de produtos
            const allButtons = productListContainer.querySelectorAll('button');
            if (![...allButtons].includes(button)) {
                return;
            }

            // Verifica se o botão tem as classes 'hinzufuegen' ou 'entfernen'
            if (button.classList.contains('hinzufuegen')) {
                // Adiciona o preço à lista e soma ao total
                const preisProduct = button.closest('.product-info')?.querySelector('.preis');
                if (preisProduct) {
                    const preisText = preisProduct.textContent.trim();
                    const preisNumber = parseFloat(preisText.replace('€', '').replace(',', '.'));
                    if (!isNaN(preisNumber)) {
                        productList.array.push(preisNumber);
                        // Atualiza o total ao adicionar o produto
                        if (productList.containerId === '#fruechte') preisFruechteTotal += preisNumber;
                        if (productList.containerId === '#suess') preisSuessTotal += preisNumber;
                        if (productList.containerId === '#nuesse') preisNuesseTotal += preisNumber;
                        if (productList.containerId === '#superfood') preisSuperfoodsTotal += preisNumber;
                    }
                }

                // Atualiza a classe do botão
                button.classList.remove('hinzufuegen');
                button.classList.add('entfernen');
                button.innerHTML = 'entfernen';

                // Marca o produto como adicionado
                const productContainer = button.closest('.product-container');
                if (productContainer) {
                    productContainer.classList.add('entfernen-container');
                }

            } else if (button.classList.contains('entfernen')) {
                // Remove o preço da lista e subtrai do total
                const preisProduct = button.closest('.product-info')?.querySelector('.preis');
                if (preisProduct) {
                    const preisText = preisProduct.textContent.trim();
                    const preisNumber = parseFloat(preisText.replace('€', '').replace(',', '.'));
                    if (!isNaN(preisNumber)) {
                        // Atualiza o total ao remover o produto
                        if (productList.containerId === '#fruechte') preisFruechteTotal -= preisNumber;
                        if (productList.containerId === '#suess') preisSuessTotal -= preisNumber;
                        if (productList.containerId === '#nuesse') preisNuesseTotal -= preisNumber;
                        if (productList.containerId === '#superfood') preisSuperfoodsTotal -= preisNumber;
                    }
                }

                // Atualiza a classe do botão
                button.classList.remove('entfernen');
                button.classList.add('hinzufuegen');
                button.innerHTML = 'hinzufügen';

                // Marca o produto como removido
                const productContainer = button.closest('.product-container');
                if (productContainer) {
                    productContainer.classList.remove('entfernen-container');
                }

                // Limpa a lista de preços (como no original)
                productList.array.length = 0;
            }

            // Atualiza o total sempre que um produto for adicionado ou removido
            updateTotal();
        });
    }
});
