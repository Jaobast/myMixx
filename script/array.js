const arrayBasis = [
    { name: 'Haferflocken', info: '(zart)', preis: 0.50, amount: 80, pic:'assets/01.basis/01.png'},
    { name: 'Haferflocken', info: '(großblättrig)', preis: 0.54, amount: 80, pic:'assets/01.basis/12.png'},
    { name: 'Dinkelflocken', preis: 0.80, amount: 70, pic:'assets/01.basis/06.png'},
    { name: 'Quinoaflocken', preis: 1.50, amount: 65, pic:'assets/01.basis/13.png'},
    { name: 'Buchweizenflocken', preis: 1.40, amount: 65, pic:'assets/01.basis/02.png'},
    { name: 'Hirseflocken', preis: 1.27, amount: 65, pic:'assets/01.basis/04.png'},
    { name: 'Vollkorn-Reisflocken', preis: 1.30, amount: 65, pic:'assets/01.basis/07.png'},
    { name: 'Gerstenflocken', preis: 0.75, amount: 70, pic:'assets/01.basis/14.png'},
    { name: 'Maisgrieß (Polenta)', preis: 0.60, amount: 80, pic:'assets/01.basis/03.png'},
    { name: 'Haferschrot', preis: 0.70, amount: 70, pic:'assets/01.basis/05.png'},
    { name: 'Gersten- und Roggenschrot', preis: 0.75, amount: 70, pic:'assets/01.basis/09.png'},
    { name: 'Amaranth-Pops', preis: 2.00, amount: 50, pic:'assets/01.basis/08.png'},
    { name: 'Cornflakes', info: '(zuckerfrei)', preis: 1.17, amount: 65, pic:'assets/01.basis/10.png'},
    { name: 'Cornflakes', info: '(mit Honig gesüßt)', preis: 1.17, amount: 65, pic:'assets/01.basis/10.png'},
    { name: 'Crunchy Müsli', info: '(Schoko)', preis: 1.29, amount: 70, pic:'assets/01.basis/11.png'},
    { name: 'Crunchy Müsli', info: '(Nuss)', preis: 1.29, amount: 70, pic:'assets/01.basis/11.png'},
    { name: 'Crunchy Müsli', info: '(Honig)', preis: 1.29, amount: 70, pic:'assets/01.basis/11.png'},
    { name: 'Rice Krispies', preis: 1.27, amount: 65, pic:'assets/01.basis/17.png'},
    { name: 'Weizenkleie', preis: 1.25, amount: 50, pic:'assets/01.basis/18.png'},
    { name: 'Geröstete Haferflakes', preis: 1.07, amount: 65, pic:'assets/01.basis/15.png'},
    { name: 'Müsliriegelstückchen', preis: 2.33, amount: 50, pic:'assets/01.basis/16.png'}
];

//20g
const arrayFruechte = [
    { name: 'Cranberries', preis: 0.40, amount: 65, pic:'assets/02.fruechte/01.png'},
    { name: 'Rosinen', preis: 0.24, amount: 70, pic:'assets/02.fruechte/02.png' },
    { name: 'Goji-Beeren', preis: 0.87, amount: 50, pic:'assets/02.fruechte/03.png' },
    { name: 'Mangostückchen', preis: 0.67, amount: 50, pic:'assets/02.fruechte/04.png' },
    { name: 'Ananasstücke', preis: 0.60, amount: 50, pic:'assets/02.fruechte/05.png' },
    { name: 'Apfelringe', preis: 0.70, amount: 35, pic:'assets/02.fruechte/06.png' },
    { name: 'Bananenchips', preis: 0.28, amount: 65, pic:'assets/02.fruechte/07.png' },
    { name: 'Datteln', preis: 0.42, amount: 65, pic:'assets/02.fruechte/08.png' },
    { name: 'Feigen', preis: 0.45, amount: 65, pic:'assets/02.fruechte/09.png' },
    { name: 'Erdbeerscheiben', preis: 1.20, amount: 35, pic:'assets/02.fruechte/10.png' },
    { name: 'Heidelbeeren', preis: 0.73, amount: 50, pic:'assets/02.fruechte/11.png' },
    { name: 'Kirschen', preis: 0.67, amount: 55, pic:'assets/02.fruechte/12.png' },
    { name: 'Aprikosen', preis: 0.40, amount: 65, pic:'assets/02.fruechte/13.png' }
];

//20g  30ml
const arraySuess = [
    { name: 'Dunkle Schokolade', info: '(Stücke)', preis: 0.52, amount: 50, unit: 'g', pic:'assets/03.suess/01.png'},
    { name: 'Weiße Schokolade', info: '(Stücke)', preis: 0.51, amount: 50, unit: 'g', pic:'assets/03.suess/02.png'},
    { name: 'Karamellstückchen', preis: 0.53, amount: 65, unit: 'g', pic:'assets/03.suess/03.png'},
    { name: 'Kokoschips', preis: 0.47, amount: 65, unit: 'g', pic:'assets/03.suess/04.png'},
    { name: 'Honig', preis: 0.72, amount: 70, unit: 'ml', pic:'assets/03.suess/05.png' },
    { name: 'Ahornsirup', preis: 0.96, amount: 70, unit: 'ml', pic:'assets/03.suess/06.png' },
    { name: 'Agavendicksaft', preis: 0.54, amount: 70, unit: 'ml', pic:'assets/03.suess/07.png' }
];

const arrayNuesse = [
    { name: 'Mandeln', preis: 0.53, amount: 50, pic:'assets/04.nuesse/01.png' },
    { name: 'Walnüsse', preis: 0.60, amount: 50, pic:'assets/04.nuesse/02.png' },
    { name: 'Haselnüsse', preis: 0.56, amount: 50, pic:'assets/04.nuesse/03.png' },
    { name: 'Pistazien', preis: 1.10, amount: 35, pic:'assets/04.nuesse/04.png' },
    { name: 'Cashewkerne', preis: 0.64, amount: 50, pic:'assets/04.nuesse/05.png' },
    { name: 'Pekanüsse', preis: 0.67, amount: 50, pic:'assets/04.nuesse/06.png' },
    { name: 'Sonnenblumenkerne', preis: 0.25, amount: 65, pic:'assets/04.nuesse/07.png' },
    { name: 'Kürbiskerne', preis: 0.47, amount: 50, pic:'assets/04.nuesse/12.png' },
    { name: 'Chiasamen', preis: 0.70, amount: 35, pic:'assets/04.nuesse/08.png' },
    { name: 'Leinsamen', preis: 0.25, amount: 65, pic:'assets/04.nuesse/09.png' },
    { name: 'Hanfsamen', preis: 0.80, amount: 35, pic:'assets/04.nuesse/10.png' },
    { name: 'Sesamsamen', preis: 0.28, amount: 65, pic:'assets/04.nuesse/11.png' }
];


const arraySuperfoods = [
    { name: 'Kakaonibs', preis: 0.90, amount: 35, unit: 'g', pic:'assets/05.superfood/01.png' },
    { name: 'Matcha-Pulver', preis: 1.80, amount: 20, unit: 'g', pic:'assets/05.superfood/02.png' },
    { name: 'Maca-Pulver', preis: 1.10, amount: 35, unit: 'g', pic:'assets/05.superfood/03.png' },
    { name: 'Baobab-Pulver', preis: 1.20, amount: 35, unit: 'g', pic:'assets/05.superfood/04.png' },
    { name: 'Spirulina', preis: 2.30, amount: 20, unit: 'g', pic:'assets/05.superfood/05.png' },
    { name: 'Acai-Beeren', preis: 1.70, amount: 35, unit: 'g', pic:'assets/05.superfood/06.png' },
    { name: 'Lucuma-Pulver', preis: 1.00, amount: 35, unit: 'g', pic:'assets/05.superfood/07.png' },
    { name: 'Weizengraspulver', preis: 1.30, amount: 35, unit: 'g', pic:'assets/05.superfood/08.png' },
    { name: 'Gojipulver', preis: 1.50, amount: 35, unit: 'g', pic:'assets/05.superfood/09.png' },
    { name: 'Kokosflocken', preis: 0.47, amount: 50, unit: 'g', pic:'assets/05.superfood/10.png' },
    { name: 'Trockene Maulbeeren', preis: 0.73, amount: 50, unit: 'g', pic:'assets/05.superfood/11.png' }
];

const arrayFluessigkeit = [
    { name: 'Hafermilch', preis: 0.19, amount: 100, unit: 'ml', pic:'assets/06.fluessigkeit/01.png' },
    { name: 'Mandelmilch', preis: 0.23, amount: 100, unit: 'ml', pic:'assets/06.fluessigkeit/02.png' },
    { name: 'Kokosmilch', preis: 0.23, amount: 100, unit: 'ml', pic:'assets/06.fluessigkeit/03.png' },
    { name: 'Sojamilch', preis: 0.18, amount: 100, unit: 'ml', pic:'assets/06.fluessigkeit/04.png' },
    { name: 'Reismilch', preis: 0.19, amount: 100, unit: 'ml', pic:'assets/06.fluessigkeit/05.png' },
    { name: 'Vollmilch', preis: 0.16, amount: 100, unit: 'ml', pic:'assets/06.fluessigkeit/06.png'},
    { name: 'Joghurt', info: '(natur)', preis: 0.38, amount: 80, unit: 'g', pic:'assets/06.fluessigkeit/07.png' },
    { name: 'Joghurt', info: '(griechisch)', preis: 0.38, amount: 80, unit: 'g', pic:'assets/06.fluessigkeit/07.png' },
    { name: 'Wasser', info: '(sehr weich und mikrofiltriert)', preis: 0.19, amount: 100, unit: 'ml', pic:'assets/06.fluessigkeit/08.png' },
    { name: 'Kokoswasser', preis: 0.21, amount: 100, unit: 'ml', pic:'assets/06.fluessigkeit/09.png' }
];
