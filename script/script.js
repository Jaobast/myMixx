const basisBttn = document.getElementById("basis-bttn");
const fruechteBttn = document.getElementById("fruechte-bttn");
const suessBttn = document.getElementById("suess-bttn");
const nuesseBttn = document.getElementById("nuesse-bttn");
const superfoodBttn = document.getElementById("superfood-bttn");
const fluessigkeitBttn = document.getElementById("fluessigkeit-bttn");
const arrayBttn = [basisBttn, fruechteBttn, suessBttn, nuesseBttn, superfoodBttn, fluessigkeitBttn];

const basis = document.getElementById("basis");
const fruechte = document.getElementById("fruechte");
const suess = document.getElementById("suess");
const nuesse = document.getElementById("nuesse");
const superfood = document.getElementById("superfood");
const fluessigkeit = document.getElementById("fluessigkeit");
const arrayContainer = [basis, fruechte, suess, nuesse, superfood, fluessigkeit];

const weiterBttn = document.getElementById("weiter");

const mixxBttn = document.getElementById("mixx");
const bestellenBttn = document.getElementById("bestellen");
const geniessenBttn = document.getElementById("geniessen");
const arraySchrittBttn = [mixxBttn, bestellenBttn, geniessenBttn];

const mixxSchritt = document.getElementById("schritt-mixx");
const bestellenSchritt = document.getElementById("schritt-bestellen");
const geniessenSchritt = document.getElementById("schritt-geniessen");
const arraySchritt = [mixxSchritt, bestellenSchritt, geniessenSchritt];

const logo = document.querySelector("#logo img");

const main = document.getElementById('main');
const formularContain = document.querySelector('.formular-background');


let nummer = 0;
let valueNummer = 0;


const alarmBasis = document.querySelector('.alarm-basis');
const alarmFlusssigkeit = document.querySelector('.alarm-fluessigkeit');

for (let i = 0; i < arrayBttn.length; i++) {
    arrayBttn[i].addEventListener('click', () => {
        for (let j = 0; j < arrayContainer.length; j++) {
            if (arrayContainer[j]) {
                arrayContainer[j].classList.add("hidden");
            }
            if (arrayBttn[j]) {
                arrayBttn[j].classList.remove("chosen");
            }
        }

        arrayContainer[i].classList.remove("hidden");
        arrayBttn[i].classList.add("chosen");

        valueNummer = arrayBttn[i].value;
        

        if (arrayBttn[arrayBttn.length - 1].classList.contains("chosen")) {
            weiterBttn.textContent = "BESTELLEN";
        } else {
            weiterBttn.textContent = "WEITER";
        }
    });
}

weiterBttn.addEventListener('click', () => {
    if (valueNummer < arrayContainer.length-1) {
        valueNummer++;
        
        for (let i = 0; i < arrayContainer.length; i++) {
            arrayContainer[i].classList.add("hidden");
            arrayBttn[i].classList.remove("chosen");
        }

        arrayContainer[valueNummer].classList.remove("hidden");
        arrayBttn[valueNummer].classList.add("chosen");

        if (valueNummer === arrayContainer.length - 1) {
            weiterBttn.textContent = "BESTELLEN";
        } else {
            weiterBttn.textContent = "WEITER";
        }
    } else {

        if(preisBasis == 0 && preisFluessigkeit == 0){
            alarmBasis.classList.remove('hidden');
            alarmFlusssigkeit.classList.remove('hidden');
        }else if(preisFluessigkeit == 0){
            alarmFlusssigkeit.classList.remove('hidden');
        }else if(preisBasis == 0){
            alarmBasis.classList.remove('hidden');
        }
        else{
            displayProduct();
            main.classList.add('hidden');
            formularContain.classList.remove('hidden');

        }
    }
    
});






//NAV   NAV   NAV   NAV   NAV   NAV   NAV   NAV   NAV   NAV   NAV   NAV   NAV 

for (let i = 0; i < arraySchritt.length; i++){
    arraySchrittBttn[i].addEventListener('mouseenter', (e)=>{
        arraySchritt[i].classList.remove("hidden");
    })


    arraySchrittBttn[i].addEventListener('mouseleave', (e)=>{
        arraySchritt[i].classList.add("hidden");
    })
}

let intervalId;
let colorIntervalId;

logo.addEventListener('mouseenter', (e) => {
    colorIntervalId = setInterval(() => {
        logo.classList.add("logo-color");
    }, 200);

    intervalId = setInterval(() => {
        logo.src = "assets/logo-color.svg";
    }, 500);
});

logo.addEventListener('mouseleave', (e) => {
    clearInterval(colorIntervalId);
    clearInterval(intervalId);

    logo.classList.remove("logo-color");
    logo.src = "assets/logo.svg";
});