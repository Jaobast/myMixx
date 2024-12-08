weiterBttn.addEventListener('click', () => {

            if(valueNummer === arrayContainer.length){

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







