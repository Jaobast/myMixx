const preisSuess = [];
const preisNuesse = [];
const preisSuperfoods = [];

let preisBasis = 0;
let nameBasis = '';

let preisFluessigkeit = 0;
let nameFluessigkeit = '';

let preisFruechteTotal = 0;
let preisSuessTotal = 0;
let preisNuesseTotal = 0;
let preisSuperfoodsTotal = 0;

let preisTotal = 0;


function updateTotal() {
    preisTotal = preisBasis + preisFruechteTotal + preisSuessTotal + preisNuesseTotal + preisSuperfoodsTotal;
    document.querySelector('.total-price').innerHTML = `${preisTotal.toFixed(2)}€`;
}


// Mehrere Produkte 

/* const productLists = [
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
}); */


