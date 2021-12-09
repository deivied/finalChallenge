//Importation de module
const functionModule = require('./lib/funcApi');


//Affectations
const TransactionDate = document.querySelector("#datLog");
const TransactionObjet = document.querySelector("#transLog");
const code1 = document.querySelector("#codeLog");
const debit1 = document.querySelector("#debitLog");
const credit1 = document.querySelector("#creditLog");
const code2 = document.querySelector("#codeLogDeux");
const debit2 = document.querySelector("#debitLogDeux");
const credit2 = document.querySelector("#creditLogDeux");
const table = document.querySelector("#tbl");
const tbody = document.querySelector("#tbody");
const button = document.querySelector("#btn");
const inputCodeUn = document.querySelector("#codeUn");
const inputCodeDue = document.querySelector("#codeDue");

const p1 = document.querySelector('#somme1')
const p2 = document.querySelector('#somme2')

let trsDate;
let trsObjet;
let codeUn;
let codeDue;
let creshUn;
let creshDue, cresh;
let debUn;
let debDue, deb;
let sumDeb;
let sumCresh;
let entree = [];
let sumTime = [];
let dataList = [];
let id, idSum, idEntre;
let data = localStorage.listeCompte;
let dataSum = localStorage.credeb;
let dataLog = localStorage.listeLog;
let cress = 0;
let debs = 0;
console.log(dataLog)



functionModule.getLogValue();

functionModule.pushDataList();



//Verifier si le localStorage contient des donnees et
//Chargement des données sur une Table de la page



//écoute des événements sur chaque élément
TransactionDate.addEventListener('change', (a) => {
  trsDate = a.target.value;
  console.log(trsDate);
});
TransactionObjet.addEventListener('change', (b) => {
  trsObjet = b.target.value;
  console.log(trsObjet);
});
inputCodeUn.addEventListener('change', (c) => {
  codeUn = c.target.value;
  console.log(codeUn);
});
inputCodeDue.addEventListener('change', (d) => {
  codeDue = d.target.value;
  console.log(codeDue);
});
credit1.addEventListener('change', (e) => {
  if (e.target.value) {
    debit1.disabled = true;
    credit2.disabled = true;
    cresh = e.target.value;
    console.log(cresh);

  } else {
    deb = null;
    debit1.disabled = false;
    credit2.disabled = false;
  }
});
credit2.addEventListener('change', (f) => {
  if (f.target.value) {
    debit2.disabled = true;
    credit1.disabled = true;
    cresh = f.target.value;
    console.log(cresh);
  } else {
    deb = null;
    debit2.disabled = false;
    credit1.disabled = false;
  }
});
debit1.addEventListener('change', (g) => {
  if (g.target.value) {
    credit1.disabled = true;
    debit2.disabled = true;
    deb = g.target.value;
    console.log(deb);

  } else {
    deb = null;
    credit1.disabled = false;
    debit2.disabled = false;
  }
});
debit2.addEventListener('change', (h) => {
  if (h.target.value) {
    credit2.disabled = true;
    debit1.disabled = true;
    deb = h.target.value;
    console.log(deb);

  } else {
    deb = null;
    credit2.disabled = false;
    debit1.disabled = false;
  }
});

button.addEventListener('click', () => {
  if (TransactionDate.value && TransactionObjet.value && inputCodeDue.value && inputCodeUn.value) {
    functionModule.addLogDataToTable(trsDate, codeUn, codeDue, trsObjet, deb, cresh);
    functionModule.addSumTable(deb, cresh);
    sumTime.push({
      id: idSum,
      debit: deb,
      credit: cresh
    });
    entree.push({
      id: idEntre,
      date: trsDate,
      ObjetTraansac: trsObjet,
      code1: codeUn,
      code2: codeDue,
      debit: deb,
      credit: cresh
    });
    localStorage.setItem("listeLog", JSON.stringify(entree));
    localStorage.setItem("listeSum", JSON.stringify(sumTime));
    idEntre++;
    idSum++;
    functionModule.pushDataList();
  }
  else {
    alert('Veuiller remplir tous les champs');
    functionModule.clearInput();
  }
});