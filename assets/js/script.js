
function calculateGrossIncome() {
    let selfSalary = parseInt(document.getElementById('selfSalary').value);
    document.getElementById("selfSalary").focus();
    let bikCarOMV = parseInt(document.getElementById('bikCarOMV'));    
    let bikCar;
    let bikCarkm = parseInt(document.getElementById('bikCarkm'));
        function calculatebikCar() {
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
    let bikRent = parseInt(document.getElementById('bikRent'));
    let bikExp = parseInt(document.getElementById('bikExp'));

    let grossIncome = (selfSalary + bikCar + bikRent + bikExp);
    console.log(grossIncome);
}

// deductions

function calculateTaxBands() {
    if (grossIncome >= 35300) {
        let taxBand = (grossIncome * 0.2);
        let balanceTaxBand = (35300 - taxBand) * 0.4;
        let finalTaxBand = taxBand + balanceTaxBand;
    } else finalTaxBand = (grossIncome * 0.2);
}

let taxCredits = 3300;

function calculatePrsi() {
    let weeklySalary = (grossIncome / 52);
    if (weeklySalary >= 352.01) {
        let prsi;
        prsi = (weeklySalary * 0.04);
    } else {
        prsi = 0;
    }
}



console.log('connected!')