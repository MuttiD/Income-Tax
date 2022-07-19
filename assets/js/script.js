console.log('connected!');

document.addEventListener("DOMContentLoaded", function() {     // DOMContentLoaded = fires when the initial HTML document has been completely loaded and parsed, without waiting for stylesheets, images, and subframes to finish loading.
    console.log('DOM fully loaded and parsed')
})

// declaring initial variables

let selfSalary;

let bikCarOMV;
let bikCarkm;

let bikRent;
let bikExp;

let bikCar;
function calculatebikCar() {    
    
    if (bikCarkm <= 0) {
        bikCar = 0;
    } else if (bikCarkm <= 24000) {
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

// calculating gross income

let grossIncome;
function calculateGrossIncome() {
    grossIncome = (selfSalary + bikCar + bikRent + bikExp);
}

// calculating deductions

let taxBand;
let balanceTaxBand;
let totalTax;
function calculateTaxBands() {
    if (grossIncome >= 35300) {
        taxBand = (35300 * 0.2);
        balanceTaxBand = (grossIncome - 35300) * 0.4;
        
        totalTax = taxBand + balanceTaxBand;
    } else {
        totalTax = (grossIncome * 0.2);
    }
}

// Single Person + PAYE employee = 1,650 + 1,650 = 3,300 euros Tax Credits (as of Budget 2021) 
let taxCredits = 3300;

// Pay Related Social Insurance


let prsi;
let weeklySalary;
function calculatePrsi() {
    weeklySalary = parseFloat(grossIncome / 52);
    if (weeklySalary >= 352.01) {        
        prsi = (weeklySalary*0.04) * 52;
    } else {
        prsi = 0;
    }
}

// universal social charge
// reference: https://www.revenue.ie/en/jobs-and-pensions/usc/calculating-usc.aspx
let usc;
function calculateUsc() {
    
    if (grossIncome > 70044) {
        usc = parseFloat(grossIncome - 70044) * 0.08 + (60.06 + 173.50 + 2221.07);
    } else if (grossIncome <= 70044) {
        usc = parseFloat(grossIncome - 20687) * 0.045 + (60.06 + 173.50);
    } else if (grossIncome <= 20687) {
        usc = parseFloat(grossIncome - 12012) * 0.02 + 60.06;        
    } else if (grossIncome <= 12012) {
        usc = parseFloat(grossIncome * 0.005);
    }

}

// calculating tax due

let taxDue;
let result;
let button;
let roundTaxDue;
let absTaxDue;
function calculateTaxDue() {
    selfSalary = parseInt(document.getElementById('selfSalary').value);

    bikCarOMV = parseInt(document.getElementById('bikCarOMV').value);
    bikCarkm = parseInt(document.getElementById('bikCarkm').value);

    bikRent = parseInt(document.getElementById('bikRent').value);
    bikExp = parseInt(document.getElementById('bikExp').value);

    calculatebikCar();
    calculateGrossIncome();
    calculateTaxBands();
    calculatePrsi();
    calculateUsc();

    button = document.getElementById('button');
    button.addEventListener('click', button);

    taxDue = totalTax - taxCredits + prsi + usc;
    roundTaxDue = Math.round(taxDue);
    result = roundTaxDue < 0 ? "Tax Refund" : "Tax Due";
    absTaxDue = Math.abs(roundTaxDue);

    console.log(result, absTaxDue);

    document.getElementById('grossIncome').innerHTML = grossIncome;
    document.getElementById('prsi').innerHTML = prsi;
    document.getElementById('usc').innerHTML = usc;
    
    document.getElementById('taxDue').innerHTML = absTaxDue;
    document.getElementById('result').innerHTML = result;
}

calculateTaxDue()
