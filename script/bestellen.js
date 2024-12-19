const nameInput = document.getElementById('name-formular');
const nameAlarm = document.querySelector('.alarm-name');

const emailInput = document.getElementById('mail');
const emailAlarm = document.querySelector('.alarm-email');

const telInput = document.getElementById('tel');
const telAlarm = document.querySelector('.alarm-tel');

const selectStore = document.getElementById('select-store');
const optionBlanc = document.getElementById('option-blanc');
const storeAlarm = document.querySelector('.alarm-store');

const dayInput = document.getElementById('day');
const dayAlarm = document.querySelector('.alarm-day');

const hourInput = document.getElementById('hour');
const hourAlarm = document.querySelector('.alarm-hour');


const orderBttn = document.getElementById('bestellen-submit');

const headerContainer = document.getElementById('header');
const doneContainer = document.querySelector('.done');

const nameDone = document.querySelector('.name-done');
const dayDone = document.querySelector('.day-done');
const hourDone = document.querySelector('.hour-done');
const storeDone = document.querySelector('.store-done');

const backStartSeite = document.getElementById('startseite');
const backNewMixx = document.getElementById('new-mixx');



let orderName = false;
let orderEmail = false;
let orderTel = false;
let orderStore = false;
let orderDay = false;
let orderHour = false;




function displayProduct(){
    const divBasis = document.querySelector('.display-Basis');
    divBasis.innerHTML += `
            <div class="product-name-price-container"> 
               <p class="product-name-info">${nameBasis}</p>
               <p class="product-price-info">${preisBasis.toFixed(2)}€</p>
               <button class="delete"><i class="fa-regular fa-circle-xmark"></i></button>
            </div>   
        `;

    const divFluessigkeit = document.querySelector('.display-Fluessigkeit');
    divFluessigkeit.innerHTML += `
            <div class="product-name-price-container"> 
               <p class="product-name-info">${nameFluessigkeit}</p>
               <p class="product-price-info">${preisFluessigkeit.toFixed(2)}€</p>
               <button class="delete"><i class="fa-regular fa-circle-xmark"></i></button>
            </div>   
        `;

    nameFruechte.forEach(nameProduct =>{
        
        const index = nameFruechte.indexOf(nameProduct);
        const preisProduct = preisFruechte[index];
        
        const div = document.querySelector('.display-Fruechte');
        
        div.innerHTML += `
            <div class="product-name-price-container"> 
               <p class="product-name-info">${nameProduct}</p>
               <p class="product-price-info">${preisProduct.toFixed(2)}€</p>
               <button class="delete delete-formular"><i class="fa-regular fa-circle-xmark"></i></button>
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
               <button class="delete delete-formular"><i class="fa-regular fa-circle-xmark"></i></button>
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
               <button class="delete delete-formular"><i class="fa-regular fa-circle-xmark"></i></button>
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
               <button class="delete delete-formular"><i class="fa-regular fa-circle-xmark"></i></button>
            </div>   
        `
    })

    const TotalText = document.querySelector('.total-price-formular');
    TotalText.innerHTML = `${preisTotal.toFixed(2)}€`;



    // DELETE  DELETE  DELETE  DELETE  DELETE  DELETE  DELETE  DELETE  DELETE  


    function deleteProductFormular(nameList, priceList, priceListTotal, productList){
        const allDeleteBttn = document.querySelectorAll('.delete-formular');
        allDeleteBttn.forEach(bttnElement => {
            bttnElement.addEventListener('click', (event) => {

                const bttn = event.target;
                const nameProduct = bttn.closest('.product-name-price-container').querySelector('.product-name-info').innerHTML;
                const preisText = bttn.closest('.product-name-price-container').querySelector('.product-price-info').innerHTML;
                const preisProduct = parseFloat(preisText.replace('€', '').replace(',', '.'));
            
            
                let index = nameList.findIndex(nome => nome === nameProduct);
            
                if (index !== -1 && priceList[index] === preisProduct) {
                    nameList.splice(index, 1);
                    priceList.splice(index, 1);
                }
        
                if(nameList == nameFruechte){
                    preisFruechteTotal = priceList.reduce((acc, preis) => acc + preis, 0);
                } else if (nameList == nameSuess){
                    preisSuessTotal = priceList.reduce((acc, preis) => acc + preis, 0);
                }else if (nameList == nameNuesse){
                    preisNuesseTotal = priceList.reduce((acc, preis) => acc + preis, 0);
                }else if (nameList == nameSuperfoods){
                    preisSuperfoodsTotal = priceList.reduce((acc, preis) => acc + preis, 0);
                }
        
                updatePriceContainer(productList);
                updateTotal();
                TotalText.innerHTML = `${preisTotal.toFixed(2)}€`;

                const div = bttn.closest('.product-name-price-container');
                div.remove();
            })})
    }

    deleteProductFormular(nameFruechte, preisFruechte, preisFruechteTotal, fruechteList);
    deleteProductFormular(nameSuess, preisSuess, preisSuessTotal, suessList);
    deleteProductFormular(nameNuesse, preisNuesse, preisNuesseTotal, nuesseList);
    deleteProductFormular(nameSuperfoods, preisSuperfoods, preisSuperfoodsTotal, superfoodsList);

}




const backButton = document.getElementById('back');
backButton.addEventListener('click', () =>{
    valueNummer = 0;

    formularContain.classList.add('hidden');
    main.classList.remove('hidden');

    arrayContainer[arrayContainer.length-1].classList.add("hidden");
    arrayBttn[arrayContainer.length-1].classList.remove("chosen");

    arrayContainer[valueNummer].classList.remove("hidden");
    arrayBttn[valueNummer].classList.add("chosen");

    weiterBttn.textContent = "WEITER";

    const divBasis = document.querySelector('.display-Basis');
    divBasis.innerHTML = '';

    const divFruechte = document.querySelector('.display-Fruechte');
    divFruechte.innerHTML = '';

    const divSuess = document.querySelector('.display-Suess');
    divSuess.innerHTML = '';

    const divNuesse = document.querySelector('.display-Nuesse');
    divNuesse.innerHTML = '';

    const divSuperfoods = document.querySelector('.display-Superfoods');
    divSuperfoods.innerHTML = '';

    const divFluessigkeit = document.querySelector('.display-Fluessigkeit');
    divFluessigkeit.innerHTML = '';
})


nameInput.addEventListener('change', ()=>{
    if(nameInput.value != ''){
        orderName = true;
        nameInput.style.border = '1px solid black';
        nameAlarm.classList.add('hidden');
    }else{
        orderName = false;
        nameInput.style.border = '2px solid red';
        nameAlarm.classList.remove('hidden');
    }
})

emailInput.addEventListener('change', ()=>{

    if(emailInput.value.match(/^[A-Za-z\._\-0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)){
        orderEmail = true;
        emailInput.style.border = '1px solid black'
        emailAlarm.classList.add('hidden');
    } else {
        orderEmail = false;
        emailInput.style.border = '2px solid red'
        emailAlarm.classList.remove('hidden');
    }
    
})

telInput.addEventListener('change', ()=>{

    if (telInput.value && !isNaN(telInput.value)) {
        telInput.style.border = '1px solid black';
        telAlarm.classList.add('hidden');
        orderTel = true;
    } else {
        telInput.style.border = '2px solid red';
        telAlarm.classList.remove('hidden');
        orderTel = false;
    }
})

selectStore.addEventListener('change', () =>{
    if(selectStore.value){
        orderStore = true;
        selectStore.style.border = '1px solid black';
        storeAlarm.classList.add('hidden');
    }else{
        orderStore = false;
        selectStore.style.border = '2px solid red';
        storeAlarm.classList.remove('hidden');
    }
    if (optionBlanc) {
        optionBlanc.remove();
    }
})

dayInput.addEventListener('change', () =>{

    const selectedDate = new Date(dayInput.value);

    if (selectedDate.getDay() === 0) {
        orderDay = false;
        dayInput.style.border = '2px solid red';
        dayInput.style.color = 'red';
        dayAlarm.innerHTML= 'An diesem Tag geschlossen';
        dayAlarm.classList.remove('hidden');
    } else {
        orderDay = true;
        dayInput.style.border = '1px solid black';
        dayInput.style.color = 'black';
        dayAlarm.classList.add('hidden');
    }
})

hourInput.addEventListener('change', () => {
    const selectedTime = hourInput.value;
    
    if (selectedTime) {
        const [hours, minutes] = selectedTime.split(':').map(Number);
        
        if (hours < 10 || hours >= 20) {
            orderHour = false;
            hourInput.style.border = '2px solid red';
            hourInput.style.color = 'red';
            hourAlarm.innerHTML= 'In dieser Uhrzeit geschlossen';
            hourAlarm.classList.remove('hidden');
        } else {
            orderHour = true;
            hourInput.style.border = '1px solid black';
            hourInput.style.color = 'black';
            hourAlarm.classList.add('hidden');
        }
    }
});


orderBttn.addEventListener('click', () =>{

    if(!orderName){
        nameInput.style.border = '2px solid red';
        nameAlarm.classList.remove('hidden');
    }

    if(!orderEmail){
        emailInput.style.border = '2px solid red';
        emailAlarm.classList.remove('hidden');
    }

    if(!orderTel){
        telInput.style.border = '2px solid red';
        telAlarm.classList.remove('hidden');
    }

    if(!orderStore){
        selectStore.style.border = '2px solid red';
        storeAlarm.classList.remove('hidden');
    }else{
        selectStore.style.border = '1px solid black';
    }

    if(!orderDay){
        dayInput.style.border = '2px solid red';
        dayAlarm.innerHTML= 'Tag für die Abholung';
        dayAlarm.classList.remove('hidden');
    }else{
        dayInput.style.border = '1px solid black';
    }

    if(!orderHour){
        hourInput.style.border = '2px solid red';
        hourAlarm.innerHTML= 'Uhrzeit für die Abholung';
        hourAlarm.classList.remove('hidden');
    }else{
        hourInput.style.border = '1px solid black';
    }

    if(orderName && orderEmail && orderTel && orderStore && orderDay && orderHour){

        nameDone.innerHTML = nameInput.value;
        hourDone.innerHTML = hourInput.value;
        storeDone.innerHTML = selectStore.value;

        const inputDate = new Date(dayInput.value);
        const today = new Date();
        today.setHours(0, 0, 0, 0);
        const tomorrow = new Date(today);
        tomorrow.setDate(today.getDate() + 1);
        
        if (inputDate.toDateString() === today.toDateString()) {
          dayDone.innerHTML = 'heute';
        } else if (inputDate.toDateString() === tomorrow.toDateString()) {
          dayDone.innerHTML = 'morgen';
        } else {
          const formattedDate = `${String(inputDate.getDate()).padStart(2, '0')}.${String(inputDate.getMonth() + 1).padStart(2, '0')}.${String(inputDate.getFullYear()).slice(2)}`;
          dayDone.innerHTML = `${'<span class="am">am</span> ' + formattedDate}`;
        }
        

        formularContain.classList.add('hidden');
        headerContainer.classList.add('hidden');
        doneContainer.classList.remove('hidden');

        preisBasis= 0;
        nameBasis = ''

        nameFruechte.length = 0;
        preisFruechte.length = 0;
        preisFruechteTotal = 0;

        nameSuess.length = 0;
        preisSuess.length = 0;
        preisSuessTotal = 0;

        nameNuesse.length = 0;
        preisNuesse.length = 0;
        preisNuesseTotal = 0;

        nameSuperfoods.length = 0;
        preisSuperfoods.length = 0;
        preisSuperfoodsTotal = 0;

        preisFluessigkeit = 0;
        nameFluessigkeit = '';

        preisTotal = 0;




        const allEntfernen = document.querySelectorAll('.entfernen');
        allEntfernen.forEach(button => {
            button.classList.remove('entfernen');
            button.classList.add('hinzufuegen');
            button.innerHTML = 'hinzufügen';

            const productContainer = button.closest('.product-container');
            productContainer.classList.remove('entfernen-container');
        })

        updatePriceContainer(fruechteList);
        updatePriceContainer(suessList);
        updatePriceContainer(nuesseList);
        updatePriceContainer(superfoodsList);
        updateTotal();
    }
})



backNewMixx.addEventListener('click', () =>{
    headerContainer.classList.remove('hidden');
    main.classList.remove('hidden');
    doneContainer.classList.add('hidden');
})