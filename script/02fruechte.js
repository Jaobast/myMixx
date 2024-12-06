const nameFruechte = [];
const preisFruechte = [];

const fruechteList = {
    containerId: '#fruechte',
    array: preisFruechte,
    total: () => preisFruechteTotal
};

const fruechteContainer = document.querySelector(fruechteList.containerId);
if (fruechteContainer) {
    fruechteContainer.addEventListener('click', function (event) {
        const button = event.target;

        const allButtons = fruechteContainer.querySelectorAll('button');
        if (![...allButtons].includes(button)) {
            return;
        }

        if (button.classList.contains('hinzufuegen')) {
            addProduct(button, fruechteList);
        } else if (button.classList.contains('entfernen')) {
            removeProduct(button, fruechteList);
        }

        const nameProduct = button.closest('.product-container')?.querySelector('.product-name');
        const nameFruechteText = nameProduct.textContent.trim();
        nameFruechte.push(nameFruechteText);
        
        updatePriceContainer();
    });
}

function addProduct(button, productList) {
    const preisProduct = button.closest('.product-info')?.querySelector('.preis');

    if (preisProduct) {
        const preisText = preisProduct.textContent.trim();
        const preisNumber = parseFloat(preisText.replace('€', '').replace(',', '.'));

        console.log(nameFruechteText);
        
        if (!isNaN(preisNumber)) {
            preisFruechte.push(preisNumber);


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
    const productName = button.closest('.product-info')?.querySelector('.product-name').textContent.trim();
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

    // Limpa a lista e refaz a exibição
    productList.array = productList.array.filter(item => item.price !== preisNumber); // Remove apenas o item correspondente
    updatePriceContainer();
}

function updateTotalForContainer(containerId, preisNumber) {
    if (containerId === '#fruechte') preisFruechteTotal += preisNumber;
}

// Função para atualizar a visualização na container de preços
function updatePriceContainer() {
    console.log(preisFruechte);
    console.log(nameFruechte);
    
    const priceContainer = document.querySelector('.price-container2');
    priceContainer.innerHTML = ''; // Limpa a container antes de re-popular

    for (let i = 0; i < preisFruechte.length; i++) {
        const product = preisFruechte[i];
        priceContainer.innerHTML += `
            <p class="fruechte-name">${nameFruechte[i]}</p>
            <p class="fruechte-price">${preisFruechte[i]} €</p>
            <button class="delete"><i class="fa-regular fa-circle-xmark"></i></button>
        `;
    }
}
