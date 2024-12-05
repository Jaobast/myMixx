const main = document.getElementById('main');
const formularContain = document.querySelector('.formular-background');

const basisFormular = document.querySelector('.basis-price-formular');
const fruechteFormular = document.querySelector('.fruechte-price-formular');
const suessFormular = document.querySelector('.suess-price-formular');
const nuesseFormular = document.querySelector('.nuesse-price-formular');
const superfoodFormular = document.querySelector('.superfood-price-formular');
const fluessigkeitFormular = document.querySelector('.fluessigkeit-price-formular');

weiterBttn.addEventListener('click', () => {


    if(weiterBttn.innerHTML.includes('BESTELLEN')){

        main.classList.add('hidden');
        formularContain.classList.remove('hidden');


        basisFormular.innerHTML = `${preisBasis.toFixed(2) + '€'}`;
        fluessigkeitFormular.innerHTML = `${preisFruechteTotal.toFixed(2) + '€'}`;
        suessFormular.innerHTML = `${preisSuessTotal.toFixed(2) + '€'}`;
        nuesseFormular.innerHTML = `${preisNuesseTotal.toFixed(2) + '€'}`;
        superfoodFormular.innerHTML = `${preisSuperfoodsTotal.toFixed(2) + '€'}`;
        fluessigkeitFormular.innerHTML = `${preisFluessigkeit.toFixed(2) + '€'}`;



    }
})







