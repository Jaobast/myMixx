/* weiterBttn.addEventListener('click', () => {

    if(valueNummer === arrayContainer.length){

        displayProduct();

        main.classList.add('hidden');
        formularContain.classList.remove('hidden');


        basisFormular.innerHTML = `${preisBasis.toFixed(2) + '€'}`;
        fluessigkeitFormular.innerHTML = `${preisFruechteTotal.toFixed(2) + '€'}`;
        suessFormular.innerHTML = `${preisSuessTotal.toFixed(2) + '€'}`;
        nuesseFormular.innerHTML = `${preisNuesseTotal.toFixed(2) + '€'}`;
        superfoodFormular.innerHTML = `${preisSuperfoodsTotal.toFixed(2) + '€'}`;
        fluessigkeitFormular.innerHTML = `${preisFluessigkeit.toFixed(2) + '€'}`;
    }

}) */




function displayProduct(){

    nameFruechte.forEach(nameProduct =>{
        
        const index = nameFruechte.indexOf(nameProduct);
        const preisProduct = preisFruechte[index];
        
        const div = document.querySelector('.display-Fruechte');
        
        div.innerHTML += `
            <div class="product-name-price-container"> 
               <p class="product-name-info">${nameProduct}</p>
               <p class="product-price-info">${preisProduct.toFixed(2)}€</p>
               <button class="delete"><i class="fa-regular fa-circle-xmark"></i></button>
            </div>   
        `
    })


    nameSuess.forEach(nameProduct =>{

        const index = nameSuess.indexOf(nameProduct);
        const preisProduct = preisSuess[index];
        
        const div = document.querySelector('.display-Suess');
        
        div.innerHTML += `
            <div class="product-name-price-container"> 
               <p class="product-name-info">${nameProduct}</p>
               <p class="product-price-info">${preisProduct.toFixed(2)}€</p>
               <button class="delete"><i class="fa-regular fa-circle-xmark"></i></button>
            </div>   
        `
    })


    nameNuesse.forEach(nameProduct =>{

        const index = nameNuesse.indexOf(nameProduct);
        const preisProduct = preisNuesse[index];
        
        const div = document.querySelector('.display-Nuesse');
        
        div.innerHTML += `
            <div class="product-name-price-container"> 
               <p class="product-name-info">${nameProduct}</p>
               <p class="product-price-info">${preisProduct.toFixed(2)}€</p>
               <button class="delete"><i class="fa-regular fa-circle-xmark"></i></button>
            </div>   
        `
    })


    nameSuperfoods.forEach(nameProduct =>{

        const index = nameSuperfoods.indexOf(nameProduct);
        const preisProduct = preisSuperfoods[index];
        
        const div = document.querySelector('.display-Superfoods');
        
        div.innerHTML += `
            <div class="product-name-price-container"> 
               <p class="product-name-info">${nameProduct}</p>
               <p class="product-price-info">${preisProduct.toFixed(2)}€</p>
               <button class="delete"><i class="fa-regular fa-circle-xmark"></i></button>
            </div>   
        `
    })
}






