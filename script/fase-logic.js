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
    
    faseList.priceContainer.innerHTML = '';

    for (let i = 0; i < faseList.preisArray.length; i++) {
        const product = faseList.preisArray[i];
        faseList.priceContainer.innerHTML += `
            <div class="product-name-price-container"> 
               <p class="product-name-info">${faseList.nameArray[i]}</p>
               <p class="product-price-info">${faseList.preisArray[i].toFixed(2)}€</p>
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



//PLUS   PLUS   PLUS   PLUS   PLUS   PLUS   PLUS   PLUS   PLUS   PLUS 

function buttonPlus(button, faseList) {

    const nameProduct = button.closest('.product-container').querySelector('.product-name').innerHTML;
    const indexProduct = faseList.nameArray.findIndex(nome => nome === nameProduct);


    const preisEuro = button.closest('.product-container').querySelector('.preis');
    let preisProduct;

    const amountText = button.closest('.product-info').querySelector('.menge');
    const amount = parseFloat(amountText.innerHTML.replace('g', '').trim());

    const portionText = button.closest('.anzahl').querySelector('.nummer');
    let portion = parseInt(portionText.textContent) || 1;


    if (indexProduct !== -1) {
        preisProduct = faseList.preisArray[indexProduct];
    } else {
        preisProduct = parseFloat(preisEuro.innerHTML.replace('Portion', '').trim());
    }



    if (portion < 3) {
        portion++;

        const newPreisFlat = preisProduct + (preisProduct/(portion - 1));
        const newPreis = parseFloat(newPreisFlat.toFixed(2));

        portionText.textContent = `${portion} Portion${portion > 1 ? 'en' : ''}`;
        preisEuro.innerHTML = `${newPreis.toFixed(2) + '€'}`;

        if(amountText.innerHTML.includes('ml')){
            amountText.innerHTML = `${(amount + (amount/(portion - 1))) + 'ml'}`;
        } else { amountText.innerHTML = `${(amount + (amount/(portion - 1))) + 'g'}`;}


        faseList.preisArray[indexProduct] = newPreis;
        updatePriceContainer(faseList);
    } 

}


//MINUS   MINUS   MINUS   MINUS   MINUS   MINUS   MINUS   MINUS   MINUS

function buttonMinus(button, faseList) {

    const nameProduct = button.closest('.product-container').querySelector('.product-name').innerHTML;
    const indexProduct = faseList.nameArray.findIndex(nome => nome === nameProduct);

    const preisEuro = button.closest('.product-container').querySelector('.preis');
    const amountText = button.closest('.product-info').querySelector('.menge');
    const portionText = button.closest('.anzahl').querySelector('.nummer');

    let portion = parseInt(portionText.textContent) || 1;

    const basePreis = parseFloat(preisEuro.innerHTML.replace('€', '').trim()) / portion;
    const baseAmount = parseFloat(amountText.innerHTML.replace('g', '').trim()) / portion;

    if (portion > 1) {
        portion--;

        const newPreisFlat = basePreis * portion;
        const newPreis = parseFloat(newPreisFlat.toFixed(2));
        const newAmount = baseAmount * portion;

        portionText.textContent = `${portion} Portion${portion > 1 ? 'en' : ''}`;
        preisEuro.innerHTML = `${newPreis.toFixed(2)}€`;

        if(amountText.innerHTML.includes('ml')){
            amountText.innerHTML = `${newAmount.toFixed(0)}ml`;
        }else { amountText.innerHTML = `${newAmount.toFixed(0)}g`;}

        if (indexProduct !== -1) {
            faseList.preisArray[indexProduct] = newPreis;
            updatePriceContainer(faseList);
        }
        
    }
}
