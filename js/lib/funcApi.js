const TransactionDate = document.querySelector("#datLog");
const TransactionObjet = document.querySelector("#transLog");
const debit1 = document.querySelector("#debitLog");
const credit1 = document.querySelector("#creditLog");
const debit2 = document.querySelector("#debitLogDeux");
const credit2 = document.querySelector("#creditLogDeux");
const inputCodeUn = document.querySelector("#codeUn");
const inputCodeDue = document.querySelector("#codeDue");
const code1 = document.querySelector("#codeLog");
const code2 = document.querySelector("#codeLogDeux");
const p1 = document.querySelector('#somme1');
const p2 = document.querySelector('#somme2');
const tbody = document.querySelector("#tbody");

let cress = 0;
let debs = 0;

export let data = localStorage.listeCompte;
export let dataSum;
export let dataLog;
export let entree = [];
export let sumTime = [];


//Partie Concernant le tableeau du logSystem
//Fonction D'ajout de donnes storage dans la table de la page

export function tableEntree(array) {
    array.forEach(function (logItem) {
        addLogDataToTable(logItem.date, logItem.code1, logItem.code2, logItem.ObjetTraansac, logItem.debit, logItem.credit);
    });
}

export function addLogDataToTable(date, codeUn, codeDue, ObjetTraansac, debit, credit) {

    const row = tbody.insertRow(-1);
    const cell1 = row.insertCell(0);
    const cell2 = row.insertCell(1);
    const cell3 = row.insertCell(2);
    const cell4 = row.insertCell(3);
    const cell5 = row.insertCell(4);
    const cell6 = row.insertCell(5);
    //isertion des valeurs à un index donné dans les cellules
    cell1.textContent = date;
    cell2.textContent = codeUn;
    cell3.textContent = codeDue;
    cell4.textContent = ObjetTraansac;
    cell5.textContent = debit;
    cell6.textContent = credit;

}
export async function getLogValue() {
    try {

        if (localStorage.listeLog) {
            entree = JSON.parse(localStorage.getItem("listeLog"));
            sumTime = JSON.parse(localStorage.getItem("listeSum"));
            idEntre = entree.length;
            idSum = sumTime.length;
            tableEntree(entree);
            credebSum(sumTime);
        } else {
            entree = [];
            sumTime = [];
            idEntre = 0;
            idSum = 0;
        }
    } catch (error) {
        console.log(error.message)
    }

}
//Partie concernant comment link la page1.input a la page2.datalist:
//Le datalist
export function pushDataList() {
    if (data) {
        dataList = JSON.parse(data);
        // console.log(dataList)
        loadDataToList(dataList);
    }
    else {
        dataList = [];
        id = 0;
    }
}

export function loadDataToList(array) {
    array.forEach(function (itemLog) {
        addDataToList(itemLog.code);
    });
}

export function addDataToList(code) {
    code1.innerHTML += `<option value="${code}"/>`;
    code2.innerHTML += `<option value="${code}"/>`;
    // return console.log(`<option value="${code}">${code}</option>`)
}
//Fin partie DataList


//F pour les somme credit et debit dans le tableau
export function addSumTable(debit, credit) {
     cress = parseInt(cress) + parseInt(credit);
    debs = parseInt(debs) + parseInt(debit);
    p1.textContent = debs;
    p2.textContent = cress;
}
export function credebSum(array) {
    array.forEach((itemSum) => {
        addSumTable(itemSum.debit, itemSum.credit);
    });
}

//fin  somme credit et debit dans le tableau


export function clearInput() {
    TransactionDate.value = "";
    TransactionObjet.value = "";
    inputCodeUn.value = "";
    inputCodeDue.value = "";
    code1.value = "";
    code2.value = "";
    debit1.disabled = false;
    debit2.disabled = false;
    credit1.disabled = false;
    credit2.disabled = false;
    debit1.value = "";
    debit2.value = "";
    credit1.value = "";
    credit2.value = "";
}

