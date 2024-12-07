const arrayBasis = [
    { name: 'Zarte Haferflocken', preis: 0.50, pic:'assets/01.basis/01.png'},
    { name: 'Buchweizenflocken', preis: 1.40, pic:'assets/01.basis/02.png'},
    { name: 'Maisgrieß (Polenta)', preis: 0.60, pic:'assets/01.basis/03.png'},
    { name: 'Hirseflocken', preis: 1.27, pic:'assets/01.basis/04.png'},
    { name: 'Haferschrot', preis: 0.70, pic:'assets/01.basis/05.png'},
    { name: 'Dinkelflocken', preis: 0.80, pic:'assets/01.basis/06.png'},
    { name: 'Vollkorn-Reisflocken', preis: 1.30, pic:'assets/01.basis/07.png'},
    { name: 'Amaranth-Pops', preis: 2.00, pic:'assets/01.basis/08.png'},
    { name: 'Schrot', info: '(Gersten| Roggen)', preis: 0.75, pic:'assets/01.basis/09.png'},
    { name: 'Cornflakes', info: '(zuckerfrei| Honig)', preis: 1.17, pic:'assets/01.basis/10.png'},
    { name: 'Crunchy Müsli', info: '(Schoko| Nuss| Honig)', preis: 1.29, pic:'assets/01.basis/11.png'},
    { name: 'Haferflocken', info: '(großblättrig)', preis: 0.54, pic:'assets/01.basis/12.png'},
    { name: 'Quinoaflocken', preis: 1.50, pic:'assets/01.basis/13.png'},
    { name: 'Gerstenflocken', preis: 0.75, pic:'assets/01.basis/14.png'},
    { name: 'Geröstete Haferflakes', preis: 1.07, pic:'assets/01.basis/15.png'},
    { name: 'Müsliriegelstückchen', preis: 2.33, pic:'assets/01.basis/16.png'},
    { name: 'Rice Krispies', preis: 1.27, pic:'assets/01.basis/17.png'},
    { name: 'Weizenkleie', preis: 1.25, pic:'assets/01.basis/18.png'}
];

//20g
const arrayFruechte = [
    { name: 'Cranberries', preis: 0.40, pic:'assets/02.fruechte/01.png'},
    { name: 'Rosinen', preis: 0.24, pic:'assets/02.fruechte/02.png' },
    { name: 'Goji-Beeren', preis: 0.87, pic:'assets/02.fruechte/03.png' },
    { name: 'Mangostückchen', preis: 0.67, pic:'assets/02.fruechte/04.png' },
    { name: 'Ananasstücke', preis: 0.60, pic:'assets/02.fruechte/05.png' },
    { name: 'Apfelringe', preis: 0.70, pic:'assets/02.fruechte/06.png' },
    { name: 'Bananenchips', preis: 0.28, pic:'assets/02.fruechte/07.png' },
    { name: 'Datteln', preis: 0.42, pic:'assets/02.fruechte/08.png' },
    { name: 'Feigen', preis: 0.45, pic:'assets/02.fruechte/09.png' },
    { name: 'Erdbeerscheiben', preis: 1.20, pic:'assets/02.fruechte/10.png' },
    { name: 'Heidelbeeren', preis: 0.73, pic:'assets/02.fruechte/11.png' },
    { name: 'Kirschen', preis: 0.67, pic:'assets/02.fruechte/12.png' },
    { name: 'Aprikosen', preis: 0.40, pic:'assets/02.fruechte/13.png' }
];

//20g  30ml
const arraySuess = [
    { name: 'Dunkelschokoladen', info: '(Stücke)', preis: 0.52, pic:'assets/03.suess/01.png'},
    { name: 'Weißschokoladen', info: '(Stücke)', preis: 0.51, pic:'assets/03.suess/02.png'},
    { name: 'Karamellstücke', preis: 0.53, pic:'assets/03.suess/03.png'},
    { name: 'Kokoschips', preis: 0.47, pic:'assets/03.suess/04.png'},
    { name: 'Honig', preis: 0.72 },
    { name: 'Ahornsirup', preis: 0.96 },
    { name: 'Agavendicksaft', preis: 0.54 },
];

const arrayNuesse = [
    { name: 'Mandeln', info: '(geröstet, gehackt, blättrig)', preis: 0.53, pic:'assets/04.nuesse/01.png' },
    { name: 'Walnüsse', preis: 0.60, pic:'assets/04.nuesse/02.png' },
    { name: 'Haselnüsse', preis: 0.56, pic:'assets/04.nuesse/03.png' },
    { name: 'Pistazien', preis: 1.10, pic:'assets/04.nuesse/04.png' },
    { name: 'Cashewkerne', preis: 0.64, pic:'assets/04.nuesse/05.png' },
    { name: 'Pekanüsse', preis: 0.67, pic:'assets/04.nuesse/06.png' },
    { name: 'Sonnenblumenkerne', preis: 0.25 },
    { name: 'Kürbiskerne', preis: 0.47, pic:'assets/04.nuesse/07.png' },
    { name: 'Chiasamen', preis: 0.70, pic:'assets/04.nuesse/08.png' },
    { name: 'Leinsamen', preis: 0.25, pic:'assets/04.nuesse/19.png' },
    { name: 'Hanfsamen', preis: 0.80, pic:'assets/04.nuesse/10.png' },
    { name: 'Sesamsamen', preis: 0.28, pic:'assets/04.nuesse/11.png' }
];


const arraySuperfoods = [
    { name: 'Kakaonibs', preis: 0.90, pic:'assets/05.superfood/01.png' },
    { name: 'Matcha-Pulver', preis: 4.80, pic:'assets/05.superfood/02.png' },
    { name: 'Maca-Pulver', preis: 1.10, pic:'assets/05.superfood/03.png' },
    { name: 'Baobab-Pulver', preis: 1.20, pic:'assets/05.superfood/04.png' },
    { name: 'Spirulina', preis: 2.80 },
    { name: 'Acai-Beeren', preis: 1.70 },
    { name: 'Lucuma-Pulver', preis: 1.00 },
    { name: 'Weizengraspulver', preis: 1.30 },
    { name: 'Gojipulver', preis: 1.50 },
    { name: 'Kokosflocken', preis: 0.47 },
    { name: 'Trockene Maulbeeren', preis: 0.73 },
    { name: 'Agavendicksaft', preis: 0.66 }
];

const arrayFluessigkeit = [
    { name: 'Hafermilch', preis: 0.19, pic:'assets/06.fluessigkeit/01.png' },
    { name: 'Mandelmilch', preis: 0.23, pic:'assets/06.fluessigkeit/02.png' },
    { name: 'Kokosmilch', preis: 0.23, pic:'assets/06.fluessigkeit/03.png' },
    { name: 'Sojamilch', preis: 0.18, pic:'assets/06.fluessigkeit/04.png' },
    { name: 'Reismilch', preis: 0.19 },
    { name: 'Vollmilch', preis: 0.16 },
    { name: 'Joghurt', info: '(natur| griechisch)', preis: 0.38 },
    { name: 'Wasser', info: '(sehr weich und mikrofiltriert)', preis: 0.19 },
    { name: 'Kokoswasser', preis: 0.21 }
];
