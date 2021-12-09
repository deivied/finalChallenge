//une petite importation pour utiliser la notion de classe.


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
let sumTime = []
let dataList = [];
let data = localStorage.listeCompte;
let dataSum = localStorage.credeb;
let dataLog = localStorage.listeLog;


function getLogValue() {
  if (dataLog) {
    entree = JSON.parse(dataLog);
    sumTime = JSON.parse(dataSum);
    id = entree.length;
    idSum = sumTime.length;
    tableEntree(entree);
    credebSum(sumTime);
  } else {
    entree = [];
    id = 0;
  }
}
getLogValue();
//Partie concernant comment link la page1.input a la page2.datalist:
//Le datalist
function pushDataList() {
  if (data) {
    dataList = JSON.parse(data);
    // console.log(dataList)
    loadDataToList(dataList);
  }
  else {
    return;
  }
}

pushDataList();

function loadDataToList(array) {
  array.forEach(function (itemLog) {
    addDataToList(itemLog.code);
  });
}

function addDataToList(code) {
  code1.innerHTML += `<option value="${code}"/>`;
  code2.innerHTML += `<option value="${code}"/>`;
  // return console.log(`<option value="${code}">${code}</option>`)
}

//Verifier si le localStorage contient des donnees et
//Chargement des données sur une Table de la page


function credebSum(array) {
  array.forEach( (itemSum) =>{
    addSumTable(itemSum.debit, itemSum.credit);
  });
}

function tableEntree(array) {
  array.forEach(function (logItem) {
    addLogDataToTable(logItem.date, logItem.code1, logItem.code2, logItem.ObjetTraansac, logItem.debit, logItem.credit);
  });
}
let cress = 0 ;
let debs = 0 ;
//F pour les somme credit et debit dans le tableau
function addSumTable(debit, credit){
  
  cress = parseInt(cress) + parseInt(credit);
  
  debs = parseInt(debs) + parseInt(debit);
  p1.textContent = debs;
  p2.textContent = cress;
}
//Fonction D'ajout de donnes storage dans la table de la page
function addLogDataToTable(date, codeUn, codeDue, ObjetTraansac, debit, credit) {

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
    addLogDataToTable(trsDate, codeUn, codeDue, trsObjet, deb, cresh);
    addSumTable(deb, cresh);
    sumTime.push({
      id : idSum,
      debit : deb,
      credit : cresh
    })
    entree.push({
      id: id,
      date: trsDate,
      ObjetTraansac: trsObjet,
      code1: codeUn,
      code2: codeDue,
      debit: deb,
      credit: cresh
    });
    localStorage.listeLog = JSON.stringify(entree);
    localStorage.listeSum = JSON.stringify(sumTime);
    id++;
    idSum++;
  }
  else {
    alert('Veuiller remplir tous les champs');

  }
  TransactionDate.value = "";
  TransactionObjet.value = "";
  inputCodeUn.value = "";
  inputCodeDue.value = "";
  debit1.disabled = false;
  debit2.disabled = false;
  credit1.disabled = false;
  credit2.disabled = false;
  debit1.value = "";
  debit2.value = "";
  credit1.value = "";
  credit2.value = "";

});
