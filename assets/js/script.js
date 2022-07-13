

let selfSalary = parseInt(document.getElementById('selfSalary').value);

let bikCarOMV = parseInt(document.getElementById('bikCarOMV').value);    
let bikCarkm = parseInt(document.getElementById('bikCarkm').value);

let bikRent = parseInt(document.getElementById('bikRent').value);
let bikExp = parseInt(document.getElementById('bikExp').value);

function calculatebikCar() {
    let bikCar;
    if (bikCarkm <= 24000) {
    bikCar = (bikCarOMV * 0.3);
    } else if (bikCarkm <= 32000) {
    bikCar = (bikCarOMV * 0.24);
    } else if (bikCarkm <= 40000) {
    bikCar = (bikCarOMV * 0.18);
    } else if (bikCarkm <= 48000) {
    bikCar = (bikCarOMV * 0.12);
    } else {
    bikCar = (bikCarOMV * 0.08);
    }
}

function calculateGrossIncome() {
    let grossIncome = (selfSalary + bikCar + bikRent + bikExp);
}

// deductions

function calculateTaxBands() {
    if (grossIncome >= 35300) {
        let taxBand = (grossIncome * 0.2);
        let balanceTaxBand = (35300 - taxBand) * 0.4;
        let totalTax = taxBand + balanceTaxBand;
    } else { 
        totalTax = (grossIncome * 0.2);
    }
}

let taxCredits = 3300;

function calculatePrsi() {
    let weeklySalary = parseFloat(grossIncome / 52);
    if (weeklySalary >= 352.01) {
        let prsi;
        prsi = (weeklySalary * 0.04);
    } else {
        prsi = 0;
    }
}

function calculateUsc() {
    let usc;
    if (grossIncome <= 12012) {
        usc = parseFloat(grossIncome * 0.005);
    } else if (grossIncome <= 20687) {
        usc = parseFloat(grossIncome * 0.02);
    } else if (grossIncome <= 70044) {
        usc = parseFloat(grossIncome * 0.045);
    } else {
        usc = parseFloat(grossIncome * 0.08);
    }
}

function calculateTaxDue() {
    let taxDue = totalTax - taxCredits - prsi - usc;
    result = taxDue < 0 ? "Tax to be repayable" : "Tax Due";
    console.log(result);
}


// adding event listener

document.addEventListener("Calculate", calculateGrossIncome());
let button = document.getElementsByTagName("Calculate");


 
console.log('connected!')