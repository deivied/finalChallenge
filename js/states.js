import { List } from "./lib/module";
import { onChange } from "./lib/module";
//affectations
const date1 = document.querySelector('#fdate');
const date2 = document.querySelector('#ldate');
const combo = document.querySelector('#ComboBox')
const bouton = document.querySelector('#btn')
const p1 = document.querySelector('#somme1')
const p2 = document.querySelector('#somme2')
const tbody = document.querySelector('#tbody')

//écoute des événements

let dataState = JSON.parse(localStorage.listeLog);
let dateRecup = [];
let fdate;
let ldate;
let label;
let dateFirt = [];
let dateTwo = [];
// console.log(JSON.parse(dataState));

dataState.forEach(itemS => {
    dateRecup.push(itemS.date);
});
// console.log(dateRecup);

date1.addEventListener('change', function (p) {
    fdate = p.target.value;
    console.log(fdate);
})

date1.addEventListener('change', function (t) {
    ldate = t.target.value;
    console.log(ldate);
})

combo.addEventListener('change', function (c) {
    label = c.target.value;
    console.log(label);
})

function addStateDataToTable(date, ObjetTraansac, debit, credit) {

    const row = tbody.insertRow(-1);
    const cell1 = row.insertCell(0);
    const cell2 = row.insertCell(1);
    const cell3 = row.insertCell(2);
    const cell4 = row.insertCell(3);

    //isertion des valeurs à un index donné dans les cellules
    cell1.textContent = date;
    cell2.textContent = ObjetTraansac;
    cell3.textContent = debit;
    cell4.textContent = credit;

}

bouton.addEventListener('click', function (event) {
    if (date1.value && combo.value) {
        dataState.forEach(function (itemStat) {
            switch (itemStat.date) {
                case date1.value:
                    dateFirt = itemStat
                    console.log(dateFirt);   
                    addStateDataToTable(dateFirt.date, dateFirt.ObjetTraansac, dateFirt.debit, dateFirt.credit);          
                break;

                default:
                    alert('La date un mise n\'existe pas');
                    break;
            }
        })
    }else if (date2.value && combo.value) {
        dataState.forEach(function (itemStat) {
            switch (itemStat.date) {
                case date2.value:
                    dateTwo = itemStat;
                    console.log(dateTwo);   
                    addStateDataToTable(dateTwo.date, dateFirt.ObjetTraansac, dateFirt.debit, dateFirt.credit);          
                    break;

                default:
                    alert('La date deux mise n\'existe pas');
                    break;
            }
        })
    }
});







