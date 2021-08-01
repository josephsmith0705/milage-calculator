const target = document.getElementById('target');
const milage = document.getElementById('milage');
const milesDifference = document.getElementById('difference');
const currentDate = new Date();

let startDate;
let dateDifference;
let targetDecimal;
let targetMiles;
let differenceDecimal;

let miles;
let milesDecimal;
let maxMiles;

function update(){
    calculate();
    if (miles && targetMiles && maxMiles){
        target.textContent = "Target: " + (targetDecimal).toFixed(2) + "% of " + maxMiles + " miles (" + targetMiles.toFixed(2) + " miles)";
        milage.textContent = "Current milage: " + milesDecimal.toFixed(2) + "% of " + maxMiles + " miles (" + miles + " miles)";
        milesDifference.textContent = "You are currently " + (miles - targetMiles).toFixed(2) + " miles over par";
    }
}

function calculate(){
    dateDifference = (currentDate.getTime() - startDate.getTime()) / (1000*60*60*24);
    targetDecimal = dateDifference / 365.25 * 100;
    targetMiles = dateDifference / 365.25 * 3000;
    milesDecimal = miles/maxMiles * 100;
    differenceDecimal = milesDecimal - targetDecimal;
}

const dateBox = document.getElementById('date');
dateBox.addEventListener('change', e=>{
    const testDate = new Date(dateBox.value);
    const testDifference = (currentDate.getTime() - testDate.getTime()) / (1000*60*60*24);
    if (testDifference <= 366 && testDifference >= 0){
        startDate = new Date(dateBox.value);
        update();
    }
});

const currentMilesBox = document.getElementById('miles');
currentMilesBox.addEventListener('input', e=>{
    miles = currentMilesBox.value;
    update();
});

const maxMilageBox = document.getElementById('maxMiles');
maxMilageBox.addEventListener('input', e=>{
    maxMiles = maxMilageBox.value;
    update();
});