function addAndRemove(event, faseList) {
    const button = event.target;

    const nameProduct = button.closest('.product-container')?.querySelector('.product-name')?.textContent.trim();

    const preisText = button.closest('.product-info')?.querySelector('.preis')?.textContent;
    const preisProduct = preisText
      ? parseFloat(preisText.replace('€', '').replace(',', '.'))
      : NaN;

    if (button.classList.contains('hinzufuegen')) {
        addProduct(button, nameProduct, preisProduct, faseList);

    } else if (button.classList.contains('entfernen')) {
        removeProduct(button, nameProduct, preisProduct, faseList);
    }
}

function addProduct(button, nameProduct, preisProduct, faseList) {

    faseList.nameArray.push(nameProduct);
    faseList.preisArray.push(preisProduct);
    updatePricePlus(preisProduct);

    button.classList.remove('hinzufuegen');
    button.classList.add('entfernen');
    button.innerHTML = 'entfernen';

    const productContainer = button.closest('.product-container');
    if (productContainer) {
        productContainer.classList.add('entfernen-container');
    }
    updatePriceContainer(faseList);
}

function removeProduct(button, nameProduct, preisProduct, faseList) {
    
    faseList.nameArray = faseList.nameArray.filter(nome => nome !== nameProduct);
    faseList.preisArray = faseList.preisArray.filter(preis => preis !== preisProduct);
    updatePriceMinus(preisProduct);
    

    button.classList.remove('entfernen');
    button.classList.add('hinzufuegen');
    button.innerHTML = 'hinzufügen';

    const productContainer = button.closest('.product-container');
    if (productContainer) {
        productContainer.classList.remove('entfernen-container');
    }

    updatePriceContainer(faseList);
}

function updatePriceContainer(faseList) {
    console.log(faseList.nameArray);
    console.log(faseList.preisArray);
    
    faseList.priceContainer.innerHTML = '';

    for (let i = 0; i < faseList.preisArray.length; i++) {
        const product = faseList.preisArray[i];
        faseList.priceContainer.innerHTML += `
            <div class="product-name-price-container"> 
               <p class="product-name-info">${faseList.nameArray[i]}</p>
               <p class="product-price-info">${faseList.preisArray[i]} €</p>
               <button class="delete"><i class="fa-regular fa-circle-xmark"></i></button>
            </div>   
        `;
    }

    const bttnDelete = faseList.priceContainer.querySelectorAll('.delete');
    bttnDelete.forEach(btn => {
        btn.addEventListener('click', (event) => {
            const div = event.target.closest('.product-name-price-container');
            if (!div) return;
    
            const nameProduct = div.querySelector('.product-name-info').textContent.trim();
            const preisText = div.querySelector('.product-price-info').textContent;
            const preisProduct = preisText
                ? parseFloat(preisText.replace('€', '').replace(',', '.'))
                : NaN;
    
            div.remove(); // Remover o produto do DOM
    
            // Atualizar os arrays e o total
            faseList.nameArray = faseList.nameArray.filter(nome => nome !== nameProduct);
            faseList.preisArray = faseList.preisArray.filter(preis => preis !== preisProduct);
            updatePriceMinus(preisProduct);
            updateTotal();
            updatePriceContainer(faseList);
    
            // Resetar o botão no container principal
            const productContainerDivs = document.querySelectorAll('.product-container');
            productContainerDivs.forEach(container => {
                const productNameElement = container.querySelector('.product-name');
                const bttn = container.querySelector('.entfernen');
    
                if (productNameElement && productNameElement.innerHTML.trim() === nameProduct) {
                    container.classList.remove('entfernen-container');
                    bttn.classList.add('hinzufuegen');
                    bttn.innerHTML = 'hinzufügen';
                    bttn.classList.remove('entfernen');
                }
            });
        });
    });
    
}




const buttonPlusFruechte = productListFruechte.querySelectorAll('.plus');

buttonPlusFruechte.forEach(element => {
    element.addEventListener('click', function() {
        buttonPlus(this, preisFruechte, nameFruechte);
    });
});