let preisFruechteTotal = 0;
let preisSuessTotal = 0;
let preisNuesseTotal = 0;
let preisSuperfoodsTotal = 0;

let preisTotal = 0;

function updatePricePlus(preisProduct) {
    preisFruechteTotal += preisProduct;
}


function updatePriceMinus(preisProduct){
    preisFruechteTotal -= preisProduct;
}

function updateTotal() {
    preisTotal = preisBasis + preisFruechteTotal + preisSuessTotal + preisNuesseTotal + preisSuperfoodsTotal + preisFluessigkeit;

    if(preisTotal > 0){
        document.querySelector('.total-price').innerHTML = `${preisTotal.toFixed(2)}€`;
    } else {
        document.querySelector('.total-price').innerHTML = '';
    }
}