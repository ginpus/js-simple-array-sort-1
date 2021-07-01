"use strict";

// DAUGYBOS LENTELE:

// let nuo = -2;
// let iki = 7;

// for (let daug1 = nuo; daug1 <= iki; daug1++) {
//     for (let daug2 = nuo; daug2 <= iki; daug2++) {
//         console.log(daug1 + ' X ' + daug2 + ' = ' + daug1 * daug2);
//     }
// }

//-----------------------------------------------------------------------

// function minVal(m) {
//     let rez = 9999999;
//     for (let i = 0; i < m.length; i++) {
//         if (rez > m[i]) {
//             rez = m[i];
//             m[i] = m[i] * 10;
//         }
//     }
//     return rez;
// }
// let m1 = [1, 2];
// console.log(minVal(m1));
// console.log(m1);

//-----------------------------------------------------------------------

let m = [1, 5, -2, 7, 6];

// PAPRASTASIS BUDAS:

// m.sort();
// console.log(m);

// BUDAS PAGAL IDEJA:

for (var i = m.length - 1; i >= 0; i--) {
    for (var j = 1; j <= i; j++) {
        console.log('ciklas ' + i + '.' + j);
        if (m[j - 1] > m[j]) {
            console.log('pirmiau esantis narys ' + m[j - 1] + ' yra didesnis uz paskesni ' + m[j] + '. Sukeiciam vietomis:');
            var temp = m[j - 1];
            m[j - 1] = m[j];
            m[j] = temp;
        } else { console.log('pirmiau esantis narys ' + m[j - 1] + ' nera didesnis uz paskesni ' + m[j] + '. Masyvas lieka toks pat:'); }
        console.log(m);
    }
}
console.log('pabaiga: ');
console.log(m);