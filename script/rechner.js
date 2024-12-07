let preisFruechteTotal = 0;
let preisSuessTotal = 0;
let preisNuesseTotal = 0;
let preisSuperfoodsTotal = 0;

let preisTotal = 0;

function updatePricePlus(preisProduct) {
    preisFruechteTotal += preisProduct;
    console.log('somando frutas: ' + preisFruechteTotal);
    
}


function updatePriceMinus(preisProduct){
    preisFruechteTotal -= preisProduct;
    console.log('diminuindo frutas: ' + preisFruechteTotal);
}

function updateTotal() {
    preisTotal = preisBasis + preisFruechteTotal + preisSuessTotal + preisNuesseTotal + preisSuperfoodsTotal + preisFluessigkeit;

    if(preisTotal > 0){
        document.querySelector('.total-price').innerHTML = `${preisTotal.toFixed(2)}€`;
    } else {
        document.querySelector('.total-price').innerHTML = '';
    }

    console.log('Esse é o total: ' + preisTotal);
}